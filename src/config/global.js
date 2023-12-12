export default {
  global: {
    componenteFormativo: 'Implementación de la campaña publicitaria digital',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos respecto a la planificación de la campaña publicitaria, el boceto publicitario y presentación de la campaña publicitaria, aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través del <em>marketing</em> digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planificación de la campaña publicitaria digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conformación del equipo de trabajo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Presupuesto publicitario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cronograma',
            hash: 't_1_3',
          },
          {
            numero: '1.47',
            titulo: 'Analítica <em>web</em>',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bocetación de la campaña publicitaria digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diagramación y composición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'El mensaje publicitario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Edición digital',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presentación de la campaña publicitaria digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Herramientas de presentación',
            hash: 't_2_3',
          },
          {
            numero: '3.2',
            titulo: 'Presentación de indicadores de desempeño',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Plan de mejoramiento',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_007_623605.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Planificación de la campaña publicitaria digital',
      referencia:
        'Antolín, R. (2017). <em>Un nuevo y eficiente enfoque de storytelling para las ONGD: caso de estudio de la campaña publicitaria “#cierraUNICEF”</em>. Ucam.edu. ',
      tipo: 'Libro',
      link:
        'http://repositorio.ucam.edu/bitstream/handle/10952/3497/Antol%c3%adn%2c%20R.%20%282017%29.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: '1. Planificación de la campaña publicitaria digital',
      referencia:
        'Sanz-Marcos, P., Jiménez-Marín, G. & Elías-Zambrano, R. (2019). La incorporación de la figura del influencer en las campañas publicitarias: Consecuencias para las agencias de publicidad españolas. adComunica. <em>Revista Científica de Estrategias, Tendencias e Innovación en Comunicación</em>, 18, 63–86. ',
      tipo: 'Libro',
      link: 'https://doi.org/10.6035/2174-0992.2019.18.5',
    },
    {
      tema: '3. Presentación de la campaña publicitaria digital',
      referencia:
        'Aguado, J. M., Martínez, I.J. & Cañete-Sanz, L. (2017). <em>Tendencias evolutivas del contenido digital en aplicaciones móviles.</em>',
      tipo: 'Libro',
      link:
        'https://revista.profesionaldelainformacion.com/index.php/EPI/article/view/epi.2015.nov.10/23781',
    },
  ],
  glosario: [
    {
      termino: 'Campaña publicitaria digital',
      significado:
        'estrategia de <em>marketing</em> digital, que busca dar a conocer un producto, servicio o marca, en medios digitales.',
    },
    {
      termino: 'Cronograma',
      significado:
        'es una herramienta gráfica que permite ordenar actividades en función del tiempo.',
    },
    {
      termino: 'Edición digital',
      significado:
        'preparación de contenido digital para ser publicado en forma masiva.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'plan o estrategias que emplean las organizaciones para impulsar o generar valor de marca',
    },
    {
      termino: 'Medios digitales',
      significado:
        'son las plataformas digitales que permite la disfunción de información y comunicación ',
    },
    {
      termino: 'Presupuesto',
      significado:
        'es un plan integrador y coordinador que se expresa en términos financieros respecto a las operaciones y recursos que forman parte de una empresa para un período determinado, con el fin de lograr los objetivos fijados por la alta gerencia. (Ramírez, 2005, p.270)',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'la publicidad digital es una estrategia de <em>marketing</em> implementada en medios digitales, con el fin de dar a conocer un producto, servicio o marca.',
    },
    {
      termino: 'Recursos gráficos',
      significado:
        'los recursos gráficos son herramientas que soportan la producción de un contenido, como imágenes, textos, gráficas, sonidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguado, J. M., Martínez, I.J. & Cañete-Sanz, L. (2017). <em>Tendencias evolutivas del contenido digital en aplicaciones móviles.</em>',
      link:
        'https://revista.profesionaldelainformacion.com/index.php/EPI/article/view/epi.2015.nov.10/23781',
    },
    {
      referencia:
        'Ramírez Padilla, D. N. (2005). <em>Contabilidad Administrativa.</em> Mc Graw Hill. Séptima Edición. México.',
      link:
        'http://bibmcgrath.usma.ac.pa/library/index.php?title=176496&lang=es%20%20%20%20&query=@title=Special:GSMSearchPage@process=@autor=RAMIREZ,%20DAVID%20@mode=&recnum=7',
    },
    {
      referencia:
        'Sanz-Marcos, P., Jiménez-Marín, G. & Elías-Zambrano, R. (2019). La incorporación de la figura del influencer en las campañas publicitarias: Consecuencias para las agencias de publicidad españolas. adComunica. <em>Revista Científica de Estrategias, Tendencias e Innovación</em> en Comunicación, 18, 63–86. ',
      link: 'https://doi.org/10.6035/2174-0992.2019.18.5',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2021). ¿Qué es la analítica <em>web</em>? [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=1pCDpRCmtxY',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2021). ¿Qué es una campaña publicitaria?” [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=oc9tYJOI-Ic',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Alejandra Tovar Bernal',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Industria y la Información',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'André Felipe Herrera Roldán',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
