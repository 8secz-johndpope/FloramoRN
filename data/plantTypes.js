/* eslint-disable import/no-unresolved,global-require */
// @flow
export type Color = "blue" | "brown" | "green" | "orange" | "pink" | "purple" | "red" | "white" | "yellow";
export type LifeForm = "aquatic" | "cushion" | "fern" | "grass" | "herb" | "liana" | "rosette" | "shrub" | "tree";
export type Plant = {
  id: number,
  tropicosId: string,
  key: string,
  species: string,
  genus: string,
  family: string,
  colors: Array<Color>,
  lifeForms: Array<LifeForm>,
  thumbnail: number,
  detailImage: number,
  photos: Array<number>,
  places: Array<string>,
}

const colors = {
  blue: { image: require('../assets/images/encyclopedia/colors/blue.png') },
  brown: { image: require('../assets/images/encyclopedia/colors/brown.png') },
  green: { image: require('../assets/images/encyclopedia/colors/green.png') },
  orange: { image: require('../assets/images/encyclopedia/colors/orange.png') },
  pink: { image: require('../assets/images/encyclopedia/colors/pink.png') },
  purple: { image: require('../assets/images/encyclopedia/colors/purple.png') },
  red: { image: require('../assets/images/encyclopedia/colors/red.png') },
  white: { image: require('../assets/images/encyclopedia/colors/white.png') },
  yellow: { image: require('../assets/images/encyclopedia/colors/yellow.png') },
};

const lifeForms = {
  aquatic: { image: require('../assets/images/encyclopedia/lifeForms/aquatic.png') },
  cushion: { image: require('../assets/images/encyclopedia/lifeForms/cushion.png') },
  fern: { image: require('../assets/images/encyclopedia/lifeForms/fern.png') },
  grass: { image: require('../assets/images/encyclopedia/lifeForms/grass.png') },
  herb: { image: require('../assets/images/encyclopedia/lifeForms/herb.png') },
  liana: { image: require('../assets/images/encyclopedia/lifeForms/liana.png') },
  rosette: { image: require('../assets/images/encyclopedia/lifeForms/rosette.png') },
  shrub: { image: require('../assets/images/encyclopedia/lifeForms/shrub.png') },
  tree: { image: require('../assets/images/encyclopedia/lifeForms/tree.png') },
};

const allColors: Array<string> = Object.keys(colors);
const allLifeForms: Array<string> = Object.keys(lifeForms);

const plantTypes = {
  colors,
  lifeForms,
  allColors,
  allLifeForms,
};

export default plantTypes;
