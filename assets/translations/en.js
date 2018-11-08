import plants from './en/plants';

const en = {
  title: 'Flóramo',
  navigation: {
    title: {
      encyclopedia: 'Encyclopedia',
      search: 'Search',
      tropicos: 'Tropicos Search',
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
      dmq: 'DMQ',
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
  plants,
  about: {
    paramo: [
      'Páramo is a unique mountain ecosystem dominated by bunch–grasses. '
        + 'It is found above the tree line and up to the permanent snow line (3000–5000 m/9000–15000 ft elev.) from Venezuela to northern Peru and on mountains in Panama and Costa Rica. '
        + 'The word páramo is associated to treeless inhospitable plains. '
        + 'However, páramos have high biological diversity and endemism, and constitute a unique biota.',
      'Plants have adapted to the cold conditions, extreme solar irradiation, low atmospheric pressure, dramatic daily fluctuations in temperature, and seasonal rains. '
        + 'Many plants grow very close to the ground, forming <a info=rosette>rosettes</a> and <a info=cushion>cushion-plants</a>, '
        + 'or have reduced <a info=leaves>hard leaves</a> or are covered with a dense layer of <a info=hairs>white or silvery hairs</a>.',
      'Páramos along with the Andean forests, function as a buffer in the hydrological cycle, which slowly releases the fallen rain water to rivers and lakes. '
        + 'The water captured in the páramos benefits millions of people that use it for consumption and irrigation.',
      ' The effect of the increase in temperatures due to climate change is already observed in peaks on the higher tropical mountains with a marked glacier retreat. '
        + 'Changes in the páramos hydrological cycle can bring catastrophic consequences and immense economic implications '
        + 'for the Andean countries that depend on this ecosystem for provision of water for human consumption, '
        + 'for operation of hydro-electrical plants, irrigation systems.',
      'Read more: <a link=http://www.mobot.org/MOBOT/Research/paramo_flora.shtml>Páramo flora project</a>',
    ],
    cajas: [
      'The Cajas massif is located 30 km west of the city of Cuenca, Azuay province in southern Ecuador. '
        + 'It is dominated by herbaceous páramo with scattered patches of forest.',
      'Pleistocene glaciers carved the landscape resulting in a unique area of irregular topography with more than 235 lakes and lagoons and unparalleled scenic beauty. '
        + 'The climate is cold and humid; there is however, considerable daily weather variation that can change rapidly from calm to strong winds, from cloudy to intense sun, from dry to fog or drizzle, and from hard rain to hail. '
        + 'The minimum daily temperature is –2°C and the maximum is 18°C. '
        + 'The annual mean precipitation is 1200 mm. '
        + 'It has two access roads: the main Cuenca-Molleturo-Naranjal road, and the unpaved Cuenca-Soldados. '
        + 'The Área de Recreación Cajas was created in 1977 and upgraded to Cajas National Park in 1996. '
        + 'It comprises 28,544 hectares, between 3150 and 4450 m asl.',
      'Read more: <a link=http://www.mobot.org/MOBOT/research/paramo/study.shtml>Study area: Cajas National Park</a>',
    ],
    dmq: [
      'The Metropolitan District of Quito (DMQ) is located in the Northern center of the province of Pichincha, Ecuador. '
        + 'Its irregular topography is crossed by several rivers that converge in two sub-basins, of the rivers Guayllabamba and Blanco. '
        + 'Its extension is 4,232 km2. The altitude ranges from 500 to 4,750 m. It includes multiple geomorphological and climate units, and vegetation formations. '
        + 'Its landscape is heterogeneous, influenced by its position in the Andean alley, and extending towards the slopes of the Western and Oriental Cordilleras of the Andes, that has resulted in the formation of various ecosystems with different vegetal and faunal composition. '
        + 'Vegetation cover consists of páramo, natural forest, forest with crops and pastureland, pastures, crops of short cycle and dry scrub.',
      'The Páramos cover 11% and are located in the two mountain ranges of the Andes in areas with altitudes above 3,500 m.\n'
        + 'Frequent fires of anthropogenic origin have changed the composition and structure of its ecosystems.\n'
        + 'Despite the importance of the Páramo ecosystems as water sources of the DMQ that feed the hydrographic system and provide drinking water and irrigation to the rural and urban areas -like other páramos in the country- they are permanently facing activities harmful to their welfare and conservation, the burning of the grasslands, overgrazing and the expansion of agricultural frontier are among the most common activities. '
        + 'In the páramos of the DMQ, especially of the Guagua and Ruco Pichincha, Padre Encantado, Atacazo, Sincholagua, Pambamarca, Cerro Puntas, and Mojanda, each summer and even in winter, grasses are burned in order to obtain tender shoots for cattleand sheep. '
        + 'This activity has caused the reduction of the original vegetation cover that triggers strong erosion by wind and rain, in addition, many lakes and water sheds have dried and disappeared, in the absence of vegetation and due to livestock trampling. '
        + 'Probably these activities have been practiced for tens or hundreds of years and consequently, in the majority of páramos the original vegetation is gone, quite noticeable at Puntas, Pambamarca,and Sincholagua.',
      'Six ecosystems are recognized in the DMQ páramos (MAE, 2013): '
        + 'Arbustal siempreverde y Herbazal del Páramo, Bosque siempreverde del Páramo, Herbazal del Páramo,  Herbazal húmedo subnival del Páramo, Herbazal inundable del Páramo, y Herbazal y Arbustal siempreverde subnival.',
    ],
    app: [
      'Flóramo is a field guide to identify some 240 species of wild plants found in the páramo, a vegetation type at the top of the Andes Mountains of tropical South America. '
        + 'It contains field images, species descriptions, and an identification key using life forms, flower colors or scientific names. '
        + 'A map with location of species, routes for personalized records. '
        + 'Additional features include searches into the Missouri Botanical Garden Tropicos® database. '
        + 'Flóramo currently includes plants found the in Ecuador, but various species are found beyond this area.',
      'All rights reserved.',
      '©Missouri Botanical Garden, Science and Conservation Division',
    ],
    moreInfo: {
      cushion: 'Cushion-plants',
      hairs: 'White or silvery hairs',
      leaves: 'Hard leaves',
      rosette: 'Rosettes',
      button: 'Close',
    },
  },
  bugs: {
    intro: 'Let us know if you found a bug, send us your feedback, comments or ideas for new features.\n\n'
      + 'If you are reporting a bug, please include your phone information (make, model, Android/iOS version) along with a short explanation'
      + 'of what you were doing.',
    fieldHint: 'Any comments, feedback or bugs found',
    subject: 'Comments, suggestions, feedback, bugs',
    email: 'nth.development@gmail.com',
    button: 'send',
  },
  colors: {
    blue: 'Blue',
    brown: 'Brown',
    cone: 'Fern/Other',
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
    grass: 'Grass',
    herb: 'Herb',
    liana: 'Liana',
    rosette: 'Rosette',
    shrub: 'Shrub',
    tree: 'Tree',
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


export default en;
