#!/bin/bash


function foregroundColor() {
  local colorCode=${1}
  tput setaf $colorCode 2> /dev/null
}

# Ignore failures when trying to get colors
set +e
normal=$(tput sgr0 2> /dev/null)

red=$(foregroundColor 1)
green=$(foregroundColor 2)

utils_fg=$(foregroundColor 9)
android_fg=$(foregroundColor 4)
ios_fg=$(foregroundColor 5)
react_fg=$(foregroundColor 180)
store_fg=$(foregroundColor 140)

# From now on fail on errors
set -eu

export ENV=${ENV:-"DEV"}
export APPLICATION_ID=${APPLICATION_ID:-"com.twparking"}
export BUILD_NUMBER=${BUILD_NUMBER:-1}

function timestamp() {
  date +"%Y%m%d_%H%M%S"
}

function check_for_tool() {
  local toolName="${1}"
  local installInstructions="${2}"

  if ! which ${toolName} &>/dev/null ; then
    echo "${red}${toolName}${utils_fg} not found${normal}"
    echo "${utils_fg}Install with: ${red}${installInstructions}${normal}"
    exit 1
  fi
}

function check_for_tool_brew() {
  local toolName="${1}"
  local installInstructions="${2}"

  if ! brew ls --versions ${toolName} > /dev/null ; then
    echo "${red}${toolName}${utils_fg} not found${normal}"
    echo "${utils_fg}Install with: ${red}${installInstructions}${normal}"
    exit 1
  fi
}

function check_for_tool_npm() {
  local toolName="${1}"
  local installInstructions="${2}"

  if ! npm list -g ${toolName} > /dev/null ; then
    echo "${red}${toolName}${utils_fg} not found${normal}"
    echo "${utils_fg}Install with: ${red}${installInstructions}${normal}"
    exit 1
  fi
}

function task_build_android {
  echo "${android_fg}Building android signed APK${normal}"
  echo "${android_fg}Did you update the build number and version in android/app/build.gradle??${normal}"
  (cd android && ./gradlew assembleRelease)
  FILENAME="index.android.$(timestamp).bundle"
  echo "${android_fg}Moving apk to root build/${FILENAME} folder${normal}"
  mkdir -p build
  mv android/app/build/intermediates/assets/release/index.android.bundle build/${FILENAME}
}

function task_clean {
    local command="${1:-}"
    echo "${utils_fg}we should clean both ios and android here${normal}"

    echo "${utils_fg}CLEANING ANDROID${normal}"
    echo -e "${utils_fg}\tDeleting root build folder${normal}"
    rm -rf android/build
    echo -e "${utils_fg}\tDeleting app build folder${normal}"
    rm -rf android/app/build

    echo "${utils_fg}CLEANING REACT NATIVE${normal}"
    echo -e "${utils_fg}\tClearing react temp files${normal}"
    rm -rf $TMPDIR/react-*
    echo -e "${utils_fg}\tClearing watchman watches${normal}"
    watchman watch-del-all
    echo -e "${utils_fg}\tDeleting node modules...${normal}"
    rm -rf node_modules

    # Ignore failures when trying to delete package lock
    set +e
    echo -e "${utils_fg}\Trying to delete package lock...${normal}"
    rm -f package-lock.json
    # From now on fail on errors
    set -eu

    echo -e "${utils_fg}\tDeleting flow types...${normal}"
    rm -rf flow-typed
    echo -e "${utils_fg}\tReinstalling node modules${normal}"
    npm install
    echo -e "${utils_fg}\tResetting Metro Bundler cache${normal}"
    rm -rf /tmp/metro-bundler-cache-*  # npm start -- --reset-cache
    echo -e "${utils_fg}\tRemoving haste cache${normal}"
    rm -rf /tmp/haste-map-react-native-packager-*
    echo "${utils_fg}running whatever command you want [${command}]${normal}"
    execute_task "${command}"
}

function task_clean_dir {
    echo "${utils_fg}cleaning everything not in git (except for idea folder)${normal}"
    git clean -fxd -e .idea
}

function task_start_ios {
    echo "${ios_fg}Starting ios${normal}"
    react-native run-ios
}

function task_start_android {
   echo "${android_fg}Starting android${normal}"
   react-native run-android
}

function task_clean_android_start {
  # Ignore failures when trying to kill processes
  set +e
  echo "${android_fg}Trying to kill the Terminal${normal}"
  killall Terminal
  echo "${android_fg}Trying to kill npm process${normal}"
  killall npm
  # From now on fail on errors
  set -eu
  echo "${android_fg}Cleaning everything first${normal}"
  task_clean
  echo "${android_fg}Uninstalling from android device${normal}"
  (cd android && ./gradlew uninstallDebug)
  echo "${android_fg}Installing app${normal}"
  task_start_android
}

function task_init_ios {
  check_for_tool "pod" "brew install brew install cocoapods"

  echo "${ios_fg}Initializing pod project${normal}"
  (cd ios && rm -rf Pods && rm -rf Podfile.lock && pod install)
}

function task_start_ios_device {
   local device="${1:-}"
   echo "${ios_fg}Starting ios on device ${device}${normal}"
   react-native run-ios --simulator="${device}"
}

function task_start_ios_devices {
   local devices=(iPhone\ SE iPhone\ 6 iPhone\ 8 iPhone\ 8\ Plus iPhone\ X)
   echo "${ios_fg}Starting ios on device iPhoneSE, iPhone6, iPhone8 ,iPhone8Plus, iPhoneX}${normal}"
   for device in "${devices[@]}"; do
      echo "${ios_fg}Starting ios on device ${device} ${normal}"
      react-native run-ios --simulator="${device}"
   done
}

function task_list_ios_devices {
   echo "${ios_fg}Available iOS devices to use with start_ios_device${normal}"
   xcrun simctl list devices
}

function task_debug {
    echo "${utils_fg}Opening debug tools for react native ${normal}"
    check_for_tool "react-devtools" "npm install -g react-devtools"

    react-devtools
}

function task_restart_ios_devices {
  echo "${ios_fg}cleaning ios simulators${normal}"
  xcrun simctl erase all
  echo "${ios_fg}finished cleaning ios simulators${normal}"
}

function task_react_generate_icon {
    local pathIcon=${1-"assets/icon/icon.png"}
    echo "${react_fg}Generating app icon from ${pathIcon}${normal}"
    check_for_tool_brew "imagemagick" "brew install imagemagick"
    check_for_tool_npm "yo" "npm install -g yo"
    check_for_tool_npm "generator-rn-toolbox" "npm install -g generator-rn-toolbox"
    echo "${react_fg}Resizing ${pathIcon} to 512px and moving it to Android fastlane folder${normal}"
    convert assets/icon/icon.png -resize 500 android/fastlane/metadata/android/en-US/images/icon.png
    echo "${react_fg}Generating all Android and iOS icons from ${pathIcon}${normal}"
    yo rn-toolbox:assets --icon ${pathIcon}
}

function task_share_screen_android {
    echo "${utils_fg} Sharing connected Android screen ${normal}"
    check_for_tool "ffplay" "brew install ffmpeg --with-sdl2"
    adb shell screenrecord --output-format=h264 --size 1200x900 - | ffplay -
}

function task_lint() {
#        ESLINT="./node_modules/.bin/eslint"
     local eslint="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"

    ${eslint} .

     if [[ "$?" == 0 ]]; then
       echo ${green}"Javascript validation completed!"
      else
        echo ${red}"ESLint Failed"
        shame
        RESULT=1
      fi
    set -eu
    exit ${RESULT}
}

function task_flow {
    echo "${normal}"
    npm run flow
    if [ $? -ne 0 ]; then
        echo "${red}There was an error in flow checker${normal}"
        shame
        RESULT=1
     else
        echo "${green}Flow checked successfully${normal}"
    fi
     set -eu
    exit ${RESULT}
}

function task_deploy_to_store_ios {
    read -p "Build number? (default: 1): " BUILD_NUMBER
    [ -z "${BUILD_NUMBER}" ] && BUILD_NUMBER='1'
    read -p "App version? (default: 0.1): " APP_VERSION
    [ -z "${APP_VERSION}" ] && APP_VERSION='0.1'

    export BUILD_NUMBER=$BUILD_NUMBER
    export APP_VERSION=$APP_VERSION

      echo "${store_fg} Getting DEV hash secret${normal}"
      export HASH_SECRET_DEV=$(gopass environments/dev/hash_secret)

    export ENABLE_EMAIL_VALIDATION=true

    TAG_NAME="b${BUILD_NUMBER}_v${APP_VERSION}"
    TAG_MESSAGE="Beta release Build ${BUILD_NUMBER}, version ${APP_VERSION}"

    echo "${store_fg} Creating ios application version ${APP_VERSION}, build number ${BUILD_NUMBER} ${normal}"

    check_for_tool_brew_cask "fastlane" "brew cask install fastlane"

    if [ $ENV = "PROD" ]
    then
      echo "${store_fg} Extracting PROD google services from gopass${normal}"
      gopass binary cp apple-sign/GoogleService-Info.plist ios/GoogleService-Info.plist
    fi

    echo "env: $ENV; build: $BUILD_NUMBER; appVersion: $APP_VERSION;"

    task_clean_ci
    cd ios
    echo "${store_fg} Building an ios application for the store${normal}"
    fastlane build_prod_app
    echo "${store_fg} Trying to upload to the ios store app version ${APP_VERSION}, build number ${BUILD_NUMBER} ${normal}"
    fastlane pilot upload --skip_waiting_for_build_processing --ipa "./output/release/floramo-app.ipa" --changelog "Beta release Build ${BUILD_NUMBER}, version ${APP_VERSION}"
    echo "${store_fg} Tagging the code and pushing ${normal}"
    git tag -a "${TAG_NAME}" -m "${TAG_MESSAGE}"
    git push origin --tags

    if [ $ENV = "PROD" ]
    then
      echo "${store_fg} Restoring DEV google services from gopass${normal}"
      gopass binary cp apple-sign/GoogleService-Info-dev.plist ios/GoogleService-Info.plist
    fi
}

function task_deploy_to_store_android {
    read -p "Environment? (default: QA): " ENV
    [ -z "${ENV}" ] && ENV='QA'
    read -p "Build number? (default: 190): " BUILD_NUMBER
    [ -z "${BUILD_NUMBER}" ] && BUILD_NUMBER='190'
    read -p "Track? (default: internal): " TRACK
    [ -z "${TRACK}" ] && TRACK='internal'

    export ENV=$ENV
    export BUILD_NUMBER=$BUILD_NUMBER
    export TRACK=$TRACK

    if [ $ENV = "DEV" ]
    then
      echo "${store_fg} Getting DEV hash secret${normal}"
      export HASH_SECRET_DEV=$(gopass environments/dev/hash_secret)
    fi

    if [ $ENV = "QA" ]
    then
      echo "${store_fg} Getting QA hash secret${normal}"
      export HASH_SECRET_QA=$(gopass environments/qa/hash_secret)
    fi

    if [ $ENV = "STG" ]
    then
      echo "${store_fg} Getting STG hash secret${normal}"
      export HASH_SECRET_STG=$(gopass environments/stg/hash_secret)
    fi

    if [ $ENV = "PROD" ]
    then
      echo "${store_fg} Getting PROD hash secret${normal}"
      export HASH_SECRET_PROD=$(gopass environments/prod/hash_secret)
    fi

    export APP_VERSION="0.0.${BUILD_NUMBER}-${TRACK}-${ENV}"
    export VERSION=$APP_VERSION
    export ENABLE_EMAIL_VALIDATION=true

    export MYAPP_RELEASE_STORE_PASSWORD=$(gopass google-sign/store_password)
    export MYAPP_RELEASE_KEY_PASSWORD=$(gopass google-sign/key_password)
    export MYAPP_RELEASE_STORE_FILE="release.keystore"
    export MYAPP_RELEASE_KEY_ALIAS="release-key"

    TAG_NAME="b${BUILD_NUMBER}_v${APP_VERSION}"
    TAG_MESSAGE="Beta release Build ${BUILD_NUMBER}, version ${APP_VERSION}"

    echo "${store_fg} Creating android application version ${APP_VERSION}, build number ${BUILD_NUMBER} ${normal}"

    check_for_tool_brew_cask "fastlane" "brew cask install fastlane"

    echo "${store_fg} Extracting key.json from gopass${normal}"
    gopass binary cp google-sign/key.json android/app/key.json

    echo "${store_fg} Extracting release keystore from gopass${normal}"
    gopass binary cp google-sign/release.keystore android/app/release.keystore

    if [ $ENV = "PROD" ]
    then
      echo "${store_fg} Extracting PROD google services from gopass${normal}"
      gopass binary cp google-sign/google-services.json android/app/google-services.json
    fi

    echo "env: $ENV; build: $BUILD_NUMBER; track: $TRACK; appVersion: $APP_VERSION; version: $VERSION"

    task_clean_ci
    cd android
    echo "${store_fg} Building an android application for the store${normal}"
    fastlane build
    echo "${store_fg} Trying to upload to the android store app version ${APP_VERSION}, build number ${BUILD_NUMBER} ${normal}"
    fastlane supply --apk app/build/outputs/apk/release/app-release.apk --track ${TRACK}
    echo "${store_fg} Tagging the code and pushing ${normal}"
    git tag -a "${TAG_NAME}" -m "${TAG_MESSAGE}"
    git push origin --tags

    if [ $ENV = "PROD" ]
    then
      echo "${store_fg} Restoring DEV google services from gopass${normal}"
      gopass binary cp google-sign/google-services-dev.json android/app/google-services.json
    fi
}

function task_help {
  help_message="usage"
  help_message+=" ${utils_fg}clean${normal}"
  help_message+=" | ${utils_fg}clean_dir${normal}"
  help_message+=" | ${utils_fg}debug${normal}"
  help_message+=" | ${utils_fg}share_screen_android${normal}"
  help_message+=" | ${utils_fg}lint${normal}"
  help_message+=" | ${utils_fg}flow${normal}"

  help_message+=" | ${android_fg}build_android${normal}"
  help_message+=" | ${android_fg}start_android | run_android${normal}"
  help_message+=" | ${android_fg}clean_android_start${normal}"

  help_message+=" | ${ios_fg}init_ios${normal}"
  help_message+=" | ${ios_fg}list_ios_devices${normal}"
  help_message+=" | ${ios_fg}start_ios | run_ios${normal}"
  help_message+=" | ${ios_fg}start_ios_device DEVICE${normal}"
  help_message+=" | ${ios_fg}start_ios_devices${normal}"
  help_message+=" | ${ios_fg}test_ios${normal}"
  help_message+=" | ${ios_fg}test_ios_screenshots${normal}"
  help_message+=" | ${ios_fg}restart_ios_devices${normal}"

  help_message+=" | ${react_fg}react_generate_icon [PATH_TO_ICON]${normal}"

  help_message+=" | ${store_fg}deploy_to_store_ios${normal}"
  help_message+=" | ${store_fg}deploy_to_store_android${normal}"
  echo "${help_message}"
}

function execute_task {
    local task="${1:-}"
    shift || true
    case ${task} in
      clean) task_clean "$@" ;;
      clean_dir) task_clean_dir "$@" ;;
      debug) task_debug ;;
      share_screen_android) task_share_screen_android ;;

      build_android) task_build_android ;;
      run_android) task_start_android ;;
      start_android) task_start_android ;;
      clean_android_start) task_clean_android_start ;;

      list_ios_devices) task_list_ios_devices ;;
      init_ios) task_init_ios ;;
      run_ios) task_start_ios ;;
      start_ios) task_start_ios ;;
      start_ios_device) task_start_ios_device "$@" ;;
      start_ios_devices) task_start_ios_devices ;;
      restart_ios_devices) task_restart_ios_devices ;;

      react_generate_icon) task_react_generate_icon "$@" ;;

      deploy_to_store_ios) task_deploy_to_store_ios ;;
      deploy_to_store_android) task_deploy_to_store_android ;;

      lint) task_lint ;;
      flow) task_flow ;;
      *) task_help ;;
    esac
}

execute_task "$@"
