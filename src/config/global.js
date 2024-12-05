export default {
  global: {
    componenteFormativo: 'Gestión de solicitudes de servicio',
    descripcionCurso:
      'La gestión de solicitudes de servicio permite desarrollar competencias para recibir, procesar y gestionar eficazmente las solicitudes de clientes o usuarios. Incluye la identificación de necesidades, asignación de recursos y planificación de acciones para asegurar satisfacción, promoviendo habilidades de comunicación, seguimiento y control para garantizar calidad y eficiencia en la prestación de servicios organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Usuario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Servicio',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Política y protocolo de servicio al cliente',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Solicitud de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Comprensión lectora',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comunicación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Protocolo, etiqueta y netiqueta empresarial',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Habilidades blandas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'PQRSF',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Solicitudes y requerimientos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Trámite',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normativa en tratamiento de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ética del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Generalidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manual',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Código y cartas del turismo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Generalidades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Proceso de gestión',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Proceso de comunicación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Canal de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Comunicación empresarial',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Comunicación escrita',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Comunicación turística',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Redacción de comunicación',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Relaciones públicas',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Política de calidad comunicativa',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Trazabilidad a la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Procedimiento',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tiempos de respuesta',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Reportes',
            hash: 't_7_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_122154_DU.pdf',
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
      tema: '1. Servicio al cliente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Protocolo de atención al cliente [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M0WqQBa3sRI',
    },
    {
      tema: '2. Tipos de clientes',
      referencia:
        'Rodríguez Alarcón, J. G. (2008). Conferencia tipos de clientes. SlideShare.',
      tipo: 'Página web',
      link: 'https://es.slideshare.net/sirxion/tipos-de-clientes',
    },
    {
      tema: '6. Canal de comunicación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Canales utilizados por los clientes. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7fnr7D7cl7M',
    },
  ],
  glosario: [
    {
      termino: 'Etiqueta',
      significado:
        'es una norma de conducta que cumple con las expectativas sobre el comportamiento social y obedece a las normas convencionales dentro de una sociedad, clase social o grupo.',
    },
    {
      termino: 'Habilidades blandas',
      significado:
        'son competencias personales y sociales que facilitan la interacción efectiva con otras personas, como la comunicación, el trabajo en equipo y la empatía. Son fundamentales para el éxito en el ámbito laboral y personal.',
    },
    {
      termino: 'Netiqueta',
      significado:
        'es un conjunto de normas y comportamientos adecuados para comunicarse de manera respetuosa y efectiva en internet. Se refiere a las reglas de cortesía que deben seguirse en los intercambios digitales, como el uso adecuado del lenguaje, el respeto por las opiniones ajenas y la consideración de la privacidad de los demás.',
    },
    {
      termino: 'PQRSF',
      significado:
        'significa Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones. Es un sistema utilizado para gestionar la retroalimentación de los clientes o usuarios sobre productos o servicios.',
    },
    {
      termino: 'Servicio',
      significado:
        'es una acción o conjunto de actividades realizadas para satisfacer las necesidades o demandas de un cliente. A diferencia de los productos tangibles, un servicio es intangible y se caracteriza por ser ofrecido, ejecutado y consumido en el momento. Ejemplos incluyen atención al cliente, asesoría, transporte, entre otros.',
    },
    {
      termino: 'Usuario',
      significado:
        'hace referencia a una persona que utiliza un producto, servicio, sistema o recurso, como un sitio <em>web<em>, una aplicación o un servicio de atención al cliente. El usuario es el receptor o consumidor de un servicio y sus necesidades y experiencias son fundamentales para mejorar la calidad del servicio ofrecido.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrade, H. (2005). Comunicación organizacional interna. Procesos, disciplina y técnica. Netbiblo.',
      link: '',
    },
    {
      referencia:
        'Arenal Laza, C. (2019). Procesos de atención al cliente-consumidor-usuario. Editorial Tutor Formación.',
      link: '',
    },
    {
      referencia: 'Biosphere. (s.f.). Carta Mundial de Turismo Sostenible +20.',
      link:
        'https://www.biospheretourism.com/es/carta-mundialde-turismo-sostenible-20/25',
    },
    {
      referencia:
        'Cortina, A. (2000). Ética mínima. Introducción a la filosofía práctica. Cap. 3. Por una ética filosófica. 1. El ámbito de la ética (págs. 32-33). Editorial Tecnos (6.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Da Silva, D. (2021). Canales de comunicación con el cliente: su importancia en la satisfacción del consumidor. Zendesk.',
      link: 'https://www.zendesk.com.mx/blog/canales-comunicacion-cliente/',
    },
    {
      referencia:
        'EOI. (2014). La importancia de la escucha activa en la comunicación. Escuela de Organización Industrial.',
      link: '',
    },
    {
      referencia:
        'Gestión. (s.f.). Las 10 habilidades blandas que demandará el mercado laboral en el futuro.',
      link:
        'https://gestion.pe/economia/management-empleo/10-habilidades-blandas-demandara-mercado-laboral-futuro-nnda-nnlt-261487-noticia/',
    },
    {
      referencia:
        'Goleman, D. (1995). Inteligencia emocional: Por qué puede importar más que el cociente intelectual. Editorial Kairós.',
      link: '',
    },
    {
      referencia:
        'Guzmán Paz, V. (2012). Comunicación organizacional. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Jakobson, R. (1960). Linguistics and poetics: An introduction to the structural analysis of literary language. En T. A. Sebeok (Ed.), Style in language (pp. 350-377). MIT Press.',
      link: '',
    },
    {
      referencia:
        'Kintsch, W. (1998). Comprehension: A paradigm for cognition. Cambridge University Press.',
      link: '',
    },
    {
      referencia: 'Comisión Europea. (s.f.). La protección de datos en la UE.',
      link:
        'https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_es',
    },
    {
      referencia:
        'Mora Medina, J. de la (1999). Explicación y análisis, taller de la comunicación. Colegio de ciencias y humanidades/ UNAM.',
      link: '',
    },
    {
      referencia:
        'Schramm, W. (1954). How communication works. University of Illinois Press.',
      link: '',
    },
    {
      referencia:
        'Shannon, C. E., & Weaver, W. (1949). The mathematical theory of communication. University of Illinois Press.',
      link: '',
    },
    {
      referencia:
        'Shea, V. (1994). Netiquette: The polite way to use the internet. Albion Books.',
      link: '',
    },
    {
      referencia: 'UNWTO. (2020). Código Ético Mundial para el Turismo.',
      link: 'https://www.unwto.org/es/codigo-etico-mundial-para-el-turismo',
    },
    {
      referencia:
        'Userlike. (2022). Los 9 canales de comunicación con el cliente: ventajas y desventajas.',
      link: 'https://www.userlike.com/es/blog/canales-de-comunicacion',
    },
    {
      referencia:
        'Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2009). Servicios de marketing (6.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Zendesk. (2021). Canales de comunicación con el cliente: su importancia en la satisfacción del consumidor.',
      link: 'https://www.zendesk.com.mx/blog/canales-comunicacion-cliente',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nancy Esperanza Ruge Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
