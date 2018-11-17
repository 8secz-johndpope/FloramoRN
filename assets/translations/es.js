import plants from './es/plants';
import credits from './es/credits';
import about from './es/about';

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
      dmq: 'DMQ',
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
      dmq: 'DMQ',
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
    intro: 'Déjanos saber si encontraste un problema con la app, si tienes comentarios o ideas para nueva functionalidad.\n\n'
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
    cone: 'Helecho/Otro',
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
    grass: 'Hierba',
    herb: 'Pasto',
    liana: 'Trepadora',
    rosette: 'Roseta',
    shrub: 'Arbusto',
    tree: 'Árbol',
  },
  places: {
    azuay: 'Azuay',
    bolivar: 'Bolívar',
    canar: 'Cañar',
    carchi: 'Carchi',
    chimborazo: 'Chimborazo',
    cotopaxi: 'Cotopaxi',
    eloro: 'El Oro',
    esmeraldas: 'Esmeraldas',
    imbabura: 'Imbabura',
    loja: 'Loja',
    losrios: 'Los Ríos',
    moronasantiago: 'Morona Santiago',
    napo: 'Napo',
    pastaza: 'Pastaza',
    pichincha: 'Pichincha',
    sucumbios: 'Sucumbíos',
    tungurahua: 'Tungurahua',
    zamorachinchipe: 'Zamora Chinchipe',
  },
};


export default es;
