import EncyclopediaScreen from '../components/EncyclopediaScreen';
import SearchScreen from '../components/SearchScreen';

const routes = {
  Encyclopedia: { screen: EncyclopediaScreen },
  Search: { screen: SearchScreen },
};

const routesKeys = Object.keys(routes);
const navigationTree = {};
routesKeys.forEach((route) => {
  navigationTree[route] = { key: route, routeName: route };
});

const appNavigation = {
  routes,
  navigationTree,
  initialScreen: 'Encyclopedia',
};

export default appNavigation;
