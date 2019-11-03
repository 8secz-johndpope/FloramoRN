# iOS

1. Create a signing certificate request
https://help.apple.com/developer-account/#/devbfa00fef7
1. Create new certificate iOS distribution 
https://developer.apple.com/account/resources/certificates/list
1. replace current certificate in distribution profile
https://developer.apple.com/account/resources/profiles/list
1. Change in XCode in `Signing & capabilities`
1. Hope it works


# Android

1. Download keys and certs (dropbox)
1. Make sure to have a copy of `android/app/debug.keystore` 
and `android/app/my-release-key.keystore` in
`android/app` 
1. Open Android Studio and make sure gradle builds
1. Update and accept
1. Run commands in commands file
1. (if in mac & want to build from console) create new keystore password
for gradle to read (name: `floramo_keystore`, account: `luz`)
https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/
1. Hope it works