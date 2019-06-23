import plants from './es/plants';
import credits from './es/credits';
import about from './es/about';
import places from './places';

const es = {
  title: 'Flóramo',
  plants,
  about,
  credits,
  navigation: {
    title: {
      encyclopedia: 'Enciclopedia',
      search: 'Búsqueda',
      tropicos: 'Búsqueda en Tropicos®',
      tropicosResults: 'Resultados de Tropicos®',
      paramo: 'Páramo',
      cajas: 'Cajas',
      dmq: 'Quito',
      app: 'Esta app',
      bugs: 'Reporte de bugs, feedback',
      credits: 'Créditos',
    },
    drawer: {
      encyclopedia: 'Enciclopedia',
      search: 'Búsqueda',
      tropicos: 'Búsqueda en Tropicos®',
      separator: 'Acerca de',
      separator2: '',
      paramo: 'Páramo',
      cajas: 'Cajas',
      dmq: 'Quito',
      app: 'Esta app',
      bugs: 'Reporte de bugs, feedback',
      credits: 'Créditos',
    },
  },
  plantDetails: {
    family: 'Familia',
    genus: 'Género',
    species: 'Especie',
    color: 'Color',
    lifeForm: 'Forma de vida',
    distribution: 'Distribución',
    tropicos: 'Ver esta planta en Tropicos®',
    photoIndex: 'Foto {{current}} de {{total}}',
  },
  search: {
    andSearch: 'Búsqueda AND',
    orSearch: 'Búsqueda OR',
    input: 'Familia, género o especie',
    header: 'Se encontraron {{count}} resultados para tu búsqueda',
    noResults: 'No se encontraron resultados para tu búsqueda...\n\nCambia los parámetros y vuelve a intentar',
    hint: {
      and: 'Búsqueda que concuerde con TODOS los siguientes parámetros:',
      or: 'Búsqueda que concuerde con AL MENOS UNO de los siguientes parámetros:',
      color: 'Especies con color {{colors}}',
      noColor: 'Especies con cualquier color',
      lifeForm: 'Especies con forma de vida {{lifeForms}}',
      noLifeForm: 'Especies con cualquier forma de vida',
      input: 'Especies con familia, género o especie que contenga {{input}}',
      noInput: 'Especies con cualquier familia, género o especie',
    },
    button: 'Buscar',
  },
  tropicosSearch: {
    warning: 'Esta búsqueda se conectará al internet',
    info: 'Ingrese al menos uno de los siguientes criterios para buscar en la base de datos de Tropicos®. Se mostrarán hasta {{max}} resultados.',
    name: 'Nombre',
    commonName: 'Nombre común',
    family: 'Familia',
    button: 'Buscar en Tropicos®',
    loading: 'cargando...',
    results: {
      all: {
        one: 'Mostrando un resultado encontrado',
        other: 'Mostrando los {{count}} resultados encontrados',
      },
      zero: 'No se encontraron resultados',
      other: 'Se encontraron {{count}} resultados. Mostrando los primeros {{max}}',
    },
  },
  bugs: {
    intro: 'Déjanos saber si encontraste un problema con la app, si tienes comentarios o ideas para nueva funcionalidad.\n\n'
      + 'Si estas reportando un problema, por favor incluye los datos de tu teléfono (marca, modelo, versión de Android/iOS) y una'
      + 'corta explicación de lo que estabas haciendo.',
    fieldHint: 'Comentarios, problemas, ideas',
    subject: 'Comentarios, problemas, ideas',
    email: 'nth.development@gmail.com',
    button: 'Enviar',
  },
  colors: {
    blue: 'Azul',
    brown: 'Café',
    green: 'Verde',
    orange: 'Naranja',
    pink: 'Rosa',
    purple: 'Violeta',
    red: 'Rojo',
    white: 'Blanco',
    yellow: 'Amarillo',
  },
  lifeForms: {
    aquatic: 'Acuática',
    cushion: 'Almohadilla',
    fern: 'Helecho',
    grass: 'Hierba',
    herb: 'Pasto',
    liana: 'Trepadora',
    rosette: 'Roseta',
    shrub: 'Arbusto',
    tree: 'Árbol',
  },
  places,
};


export default es;
