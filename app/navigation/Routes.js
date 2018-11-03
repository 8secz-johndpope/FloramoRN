import EncyclopediaScreen from '../components/encyclopedia/EncyclopediaScreen';
import SearchScreen from '../components/search/SearchScreen';

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
