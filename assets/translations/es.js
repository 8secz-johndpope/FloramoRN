import plants from './es/plants';

const es = {
  title: 'Flóramo',
  navigation: {
    title: {
      encyclopedia: 'Enciclopedia',
      search: 'Búsqueda',
      tropicos: 'Búsqueda en Tropicos',
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
  plants,
  about: {
    paramo: [
      'El páramo es un ecosistema de montaña único dominado por pajonales. '
        + 'Se encuentra sobre el límite continuo de bosque y casi hasta el nivel de la nieve perpetua (3000–5000 m), desde Venezuela hasta el norte de Perú y en Panamá y Costa Rica. '
        + 'La palabra páramo se asocia a planicies sin arboledas e inhóspitas. '
        + 'Sin embargo, los páramos tienen una diversidad biológica y endemismo altos y constituyen una biota única.',
      'Las plantas se han adaptado a las condiciones frías y extremos de alta irradiación solar, la baja presión atmosférica, las dramáticas fluctuaciones diarias de temperatura y las lluvias estacionales. '
        + 'Así, muchas plantas crecen pegadas al suelo en forma de <a info=rosette>rosetas</a> o <a info=cushion>almohadillas</a>, '
        + 'o tienen las <a info=leaves>hojas reducidas</a> y duras, o están recubiertas de una densa capa de <a info=hairs>pelos blancos o plateados</a>.',
      'Los páramos y los bosques andinos funcionan como control de los sistemas hídricos, al absorber agua de lluvia y liberarla lentamente alimentando a ríos y lagunas. '
        + 'El agua capturada en los páramos beneficia a millones de personas que usan este bien tanto para consumo como para riego.',
      'El efecto del incremento de temperaturas debido al cambio climático ya se observa en los picos más altos de las montañas tropicales con un marcado retroceso de los glaciares. '
        + 'Cambios en el ciclo hidrológico de los páramos pueden traer consecuencias catastróficas e implicaciones económicas inmensas para los países andinos que dependen de este ecosistema para provisión de agua para consumo humano, '
        + 'para la operación de plantas hidroeléctricas, para los sistemas de irrigación.',
      'Lea más: <a link=http://www.mobot.org/MOBOT/Research/paramo_flora.shtml>Proyecto Flora del Páramo</a>',
    ],
    cajas: [
      'El macizo del Cajas se encuentra localizado a 30 km al occidente de la ciudad de Cuenca, provincia del Azuay, en el sur del Ecuador. '
        + 'Está dominado por páramo herbáceo con parches esparcidos de bosques.',
      'Glaciares del Pleistoceno han esculpido el paisaje resultando en un escenario único de topografía irregular con más de 235 lagos y lagunas de belleza sin igual. '
        + 'Dos ríos drenan de las vertientes orientales hacia la ciudad de Cuenca. '
        + 'El clima es frío y húmedo, pero hay una variación climática diaria considerable que puede cambiar rápidamente de vientos suaves a fuertes, de cielo nublado a un sol intenso, de neblina a llovizna y granizo. '
        + 'La temperatura mínima es de –2° C y la máxima durante el día de 18°C. '
        + 'La precipitación media anual es de 1200 mm. Tiene dos vías de acceso: la carretera de primer orden Cuenca-Molleturo-Naranjal y la vía de tercer orden Cuenca-Soldados. '
        + 'El Área de Recreación Cajas fue creada en 1977 y en 1996 cambió a la categoría de Parque Nacional Cajas. '
        + 'Consta de 28.544 hectáreas entre los 3150 y 4450 m snm.',
      'Lea más: <a link=http://www.mobot.org/MOBOT/research/paramo/study.shtml>Study area: Cajas National Park</a>',
    ],
    dmq: [
      'El Distrito Metropolitano de Quito (DMQ) está ubicado en el centro norte de la provincia dePichincha, Ecuador. '
        + 'Su topografía irregular está bañada por múltiples ríos que convergen en dos subcuencas, las de los ríos Guayllabamba y Blanco. '
        + 'Su extensión es de 4.232 km2. La altitud oscila entre 500 y 4.750 m. '
        + 'Comprende múltiples unidades geomorfológicas, pisos climáticos y formaciones vegetales. '
        + 'Su paisaje es heterogéneo, influenciado por su posició nen el callejón interandino, y extendiéndose hacia las vertientes de las Cordilleras Occidental '
        + 'y Oriental de los Andes que ha dado lugar a la formación de varios ecosistemas con diversa composición vegetal y faunística. '
        + 'La cobertura vegetal está conformada por páramo, bosque natural, bosques con cultivos y pastizales, pastos, cultivos de ciclo corto y matorrales secos. '
        + 'Los páramos cubren el 11% y están ubicados en las dos cordilleras de los Andes, en áreas con altitudes superiores a 3.500 m. '
        + 'Frecuentemente están sometidos a quemas provocadas por acciones de origen antropogénico que han provocado cambios en la composición y estructura de sus ecosistemas.',
      'No obstante de la importancia de los ecosistemas de páramo al constituirse en las fuentes de agua del DMQ que alimentan el sistema hidrográfico y proveen de agua potable y para riego a las localidades rurales y urbanas '
        + '–al igual que otros páramos del país–, están permanentemente enfrentando actividades nocivas para su bienestar y conservación, la quema de los pajonales, el sobrepastoreo y la ampliación de las áreas de cultivo, están entre las actividades más comunes.',
      'En los páramos del DMQ, especialmente del Guagua y Ruco Pichincha, Padre Encantado, Atacazo, Sincholagua, Pambamarca, Cerro Puntas y Mojanda, cada verano e inclusive en el invierno, se queman los pajonales, con el fin de obtener rebrotes tiernos de paja para la alimentación del ganado vacuno y ovino. '
        + 'Esta actividad ha provocado la reducción de la cubierta vegetal original que desencadena en una fuerte erosión por el viento y las lluvias, además, muchas lagunas y vertientes de agua se han secado y desaparecido, ante la ausencia de cobertura vegetal y debido al pisoteo del ganado. '
        + 'Probablemente estas actividades se vienen practicando desde decenas o cientos de años atrás y en consecuencia, en la mayoría de páramos prácticamente la vegetación original ya no existe, siendo muy notorio en el Puntas, Pambamarca y Sincholagua.',
      'En el DMQ se identifican seis ecosistemas de páramos (MAE, 2013), estos son: '
        + 'Arbustal siempreverde y Herbazal del Páramo, Bosque siempreverde del Páramo, Herbazal del Páramo, Herbazal húmedo subnival del Páramo, Herbazal inundable del Páramo, y Herbazal y Arbustal siempreverde subnival.',
    ],
    app: [
      'Flóramo es una guía de campo para identificar cerca de 240 especies de plantas silvestres que se encuentran en el páramo, un tipo de vegetación se encuentra en la cima de las montañas de los Andes tropicales de América del Sur. '
        + 'Contiene imágenes de campo, descripciones de las especies y una clave de identificación por formas de vida, colores de las flores o nombres científicos. '
        + 'Un mapa con ubicación de las especies, rutas para personalizar registros. '
        + 'Adicionalmente se puede hace búsqueda en la base de datos Tropicos® del Missouri Botanical Garden. '
        + 'Flóramo actualmente incluye plantas que se encuentran en el Ecuador, pero varias especies se encuentran en otras áreas.',
      'Todos los derechos reservados.',
      '©Missouri Botanical Garden, Science and Conservation Division',
    ],
  },
  bugs: {
    intro: 'Déjanos saber si encontraste un problema con la app, si tienes comentarios o ideas para nueva functionalidad.\n\n'
      + 'Si estas reportando un problema, por favor incluye los datos de tu teléfono (marca, modelo, versión de Android/iOS) y una'
      + 'corta explicación de lo que estabas haciendo.',
    fieldHint: 'Comentarios, problemas, ideas',
    subject: 'Comentarios, problemas, ideas',
    email: 'nth.development@gmail.com',
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
