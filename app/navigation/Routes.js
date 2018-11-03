import EncyclopediaScreen from '../components/EncyclopediaScreen';
import SearchScreen from '../components/SearchScreen';

const routes = {
  Encyclopedia: {
    screen: EncyclopediaScreen,
    navigationOptions: {
      title: 'encyclopedia',
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'search',
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
  initialScreen: 'Encyclopedia',
};

export default appNavigation;
