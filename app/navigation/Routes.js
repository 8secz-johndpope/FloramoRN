import EncyclopediaScreen from '../components/encyclopedia/EncyclopediaScreen';
import SearchScreen from '../components/search/SearchScreen';
import TropicosSearchScreen from "../components/tropicosSearch/TropicosSearchScreen";
import AboutParamoScreen from "../components/about/AboutParamoScreen";
import BugsScreen from "../components/bugs/BugsScreen";
import CreditsScreen from "../components/credits/CreditsScreen";
import AboutCajasScreen from "../components/about/AboutCajasScreen";
import AboutDMQScreen from "../components/about/AboutDMQScreen";
import AboutAppScreen from "../components/about/AboutAppScreen";

const routes = {
  encyclopedia: {
    screen: EncyclopediaScreen,
    navigationOptions: {
      title: 'encyclopedia',
    },
  },
  search: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'search',
    },
  },
  tropicos: {
    screen: TropicosSearchScreen,
    navigationOptions: {
      title: 'tropicos',
    },
  },
  paramo: {
    screen: AboutParamoScreen,
    navigationOptions: {
      title: 'paramo',
    },
  },
  cajas: {
    screen: AboutCajasScreen,
    navigationOptions: {
      title: 'cajas',
    },
  },
  dmq: {
    screen: AboutDMQScreen,
    navigationOptions: {
      title: 'dmq',
    },
  },
  app: {
    screen: AboutAppScreen,
    navigationOptions: {
      title: 'app',
    },
  },
  bugs: {
    screen: BugsScreen,
    navigationOptions: {
      title: 'bugs',
    },
  },
  credits: {
    screen: CreditsScreen,
    navigationOptions: {
      title: 'credits',
    },
  },
};

const routesKeys = Object.keys(routes);
const navigationTree = {};
routesKeys.forEach((route) => {
  navigationTree[route] = { key: route, routeName: route };
});

const appNavigation = {
  routes,
  navigationTree,
  initialScreen: 'encyclopedia',
};

export default appNavigation;
