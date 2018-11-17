import EncyclopediaScreen from '../components/encyclopedia/EncyclopediaScreen';
import SearchScreen from '../components/search/SearchScreen';
import TropicosSearchScreen from '../components/tropicosSearch/TropicosSearchScreen';
import AboutParamoScreen from '../components/about/AboutParamoScreen';
import BugsScreen from '../components/bugs/BugsScreen';
import CreditsScreen from '../components/credits/CreditsScreen';
import AboutCajasScreen from '../components/about/AboutCajasScreen';
import AboutDMQScreen from '../components/about/AboutDMQScreen';
import AboutAppScreen from '../components/about/AboutAppScreen';
import DetailScreen from '../components/encyclopedia/DetailScreen';
import PlantWebView from '../components/plantWebView/PlantWebView';

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
