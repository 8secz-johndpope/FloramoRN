import AboutAppScreen from '../components/about/AboutAppScreen';
import AboutCajasScreen from '../components/about/AboutCajasScreen';
import AboutDMQScreen from '../components/about/AboutDMQScreen';
import AboutParamoScreen from '../components/about/AboutParamoScreen';
import BugsScreen from '../components/bugs/BugsScreen';
import ConfigScreen from '../components/config/ConfigScreen';
import CreditsScreen from '../components/credits/CreditsScreen';
import DetailScreen from '../components/encyclopedia/DetailScreen';
import EncyclopediaScreen from '../components/encyclopedia/EncyclopediaScreen';
import PlantWebView from '../components/plantWebView/PlantWebView';
import SearchScreen from '../components/search/SearchScreen';
import TropicosSearchScreen from '../components/tropicosSearch/TropicosSearchScreen';

const routes = {
  encyclopedia: { screen: EncyclopediaScreen },
  detail: { screen: DetailScreen },
  search: { screen: SearchScreen },
  tropicos: { screen: TropicosSearchScreen },
  plantWebView: { screen: PlantWebView },
  paramo: { screen: AboutParamoScreen },
  cajas: { screen: AboutCajasScreen },
  dmq: { screen: AboutDMQScreen },
  app: { screen: AboutAppScreen },
  bugs: { screen: BugsScreen },
  credits: { screen: CreditsScreen },
  config: { screen: ConfigScreen },
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
