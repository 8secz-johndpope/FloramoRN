import plants from './en/plants';
import credits from './en/credits';
import about from './en/about';
import places from './places';

const en = {
  title: 'Flóramo',
  plants,
  about,
  credits,
  navigation: {
    title: {
      encyclopedia: 'Encyclopedia',
      search: 'Search',
      tropicos: 'Tropicos® Search',
      tropicosResults: 'Tropicos® Results',
      paramo: 'Páramo',
      cajas: 'Cajas',
      dmq: 'DMQ',
      app: 'This app',
      bugs: 'Bug reports, feedback',
      credits: 'Credits',
    },
    drawer: {
      encyclopedia: 'Encyclopedia',
      search: 'Search',
      tropicos: 'Tropicos® Search',
      separator: 'About',
      separator2: '',
      paramo: 'Páramo',
      cajas: 'Cajas',
      dmq: 'Quito',
      app: 'This app',
      bugs: 'Bug reports, feedback',
      credits: 'Credits',
    },
  },
  plantDetails: {
    family: 'Family',
    genus: 'Genus',
    species: 'Species',
    color: 'Color',
    lifeForm: 'Life form',
    distribution: 'Distribution',
  },
  search: {
    andSearch: 'AND search',
    orSearch: 'OR search',
    input: 'Family, genus or species',
    header: 'Found {{count}} results to your search',
    noResults: 'No results found for your search...\n\nChange your parameters and try again',
    hint: {
      and: 'Search species matching ALL of the next criteria:',
      or: 'Search species matching ANY of the next criteria:',
      noColor: 'Species with any color',
      color: 'Species with color {{colors}}',
      noLifeForm: 'Species with any life form',
      lifeForm: 'Species with life form {{lifeForms}}',
      noInput: 'Species with any family, genus or name',
      input: 'Species with family, genus or name containing {{input}}',
    },
    button: 'Search',
  },
  tropicosSearch: {
    warning: 'This search will connect to the Internet',
    info: 'Enter at least one of the following criteria to perform a search on the Tropicos® database. This search will show up to {{max}} results.',
    name: 'Name',
    commonName: 'Common name',
    family: 'Family',
    button: 'Search in Tropicos®',
    loading: 'loading...',
    results: {
      all: {
        one: 'Showing one found result',
        other: 'Showing all {{count}} found results',
      },
      zero: 'No results were found :(',
      other: 'Found {{count}} results. Showing first {{max}}',
    },
  },
  bugs: {
    intro: 'Let us know if you found a bug, send us your feedback, comments or ideas for new features.\n\n'
      + 'If you are reporting a bug, please include your phone information (make, model, Android/iOS version) along with a short explanation'
      + 'of what you were doing.',
    fieldHint: 'Any comments, feedback or bugs found',
    subject: 'Comments, suggestions, feedback, bugs',
    email: 'nth.development@gmail.com',
    button: 'Send',
  },
  colors: {
    blue: 'Blue',
    brown: 'Brown',
    green: 'Green',
    orange: 'Orange',
    pink: 'Pink',
    purple: 'Purple',
    red: 'Red',
    white: 'White',
    yellow: 'Yellow',
  },
  lifeForms: {
    aquatic: 'Aquatic',
    cushion: 'Cushion',
    fern: 'Fern',
    grass: 'Grass',
    herb: 'Herb',
    liana: 'Liana',
    rosette: 'Rosette',
    shrub: 'Shrub',
    tree: 'Tree',
  },
  places,
};


export default en;
