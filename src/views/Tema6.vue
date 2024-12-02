<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Canal de comunicación

    .col.mb-5(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')

    p(data-aos="fade-left") Un canal de comunicación es el medio a través del cual se envía un mensaje desde el emisor hacia el receptor. En el contexto de las oficinas de turismo, estos canales son esenciales para proporcionar información relevante y oportuna a los turistas, tanto en interacciones directas como a través de medios digitales, asegurando una experiencia informativa efectiva y accesible.

    p.mb-5(data-aos="fade-left") Entre los canales de comunicación más comunes en el turismo están:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img02.svg' alt='AvatarTop')
          h4.text-center Contacto directo en oficinas
          p.text-center Permite una atención personalizada y respuesta inmediata a las preguntas de los turistas. Además, facilita la entrega de material impreso o recomendaciones específicas.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img03.svg' alt='AvatarTop')
          h4.text-center Correo electrónico
          p.text-center Ideal para enviar información detallada y de seguimiento a turistas que solicitan asesoría o reservas. También permite una comunicación rápida y eficiente con clientes frecuentes.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img04.svg' alt='AvatarTop')
          h4.text-center Redes sociales
          p.text-center Utilizadas para interactuar de forma dinámica con el público, compartir contenido visual y promocionar eventos. Las redes permiten a los turistas interactuar, comentar y consultar en tiempo real.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img05.svg' alt='AvatarTop')
          h4.text-center Sitios web
          p.text-center Ofrecen una plataforma centralizada donde los turistas pueden encontrar información completa sobre destinos, actividades, itinerarios y servicios disponibles.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img06.svg' alt='AvatarTop')
          h4.text-center Aplicaciones móviles
          p.text-center Facilitan la navegación y el acceso a información específica sobre destinos turísticos en cualquier momento, con funciones como mapas interactivos y agendas personalizadas.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img07.svg' alt='AvatarTop')
          h4.text-center Material impreso (folletos o mapas)
          p.text-center Especialmente útil para turistas que prefieren un recurso tangible o que tienen limitado acceso a internet, permitiéndoles orientarse de manera autónoma.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.col-md-5.mb-2
              figure
                img(src='@/assets/curso/temas/tema6/img08.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 <b>Ejemplo</b>: una oficina de turismo utiliza su página web y redes sociales para promocionar eventos culturales y actividades locales, complementando con atención personalizada en la oficina física para responder a las consultas de los turistas.
    
    p(data-aos="fade-left") La elección adecuada y el uso eficiente de estos canales garantiza que los turistas reciban información precisa y accesible, mejorando su experiencia y fomentando una conexión positiva con el destino.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Comunicación empresarial

    p.mb-5(data-aos="fade-left") La comunicación empresarial abarca los procesos y estrategias para el intercambio de información dentro de una organización y hacia su entorno externo. En el contexto de las oficinas de turismo municipales, esta comunicación juega un rol crucial en la coordinación interna y en la relación con el público y colaboradores externos, contribuyendo al éxito de la gestión turística. Las principales dimensiones de la comunicación empresarial en turismo incluyen:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Comunicación interna")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img09.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Se enfoca en cómo los empleados y departamentos dentro de la oficina de turismo interactúan y se mantienen informados sobre proyectos y políticas organizacionales. Una comunicación interna solida alinea a los equipos con los objetivos comunes, promoviendo un servicio unificado y eficiente para los turistas.
            p <b>Ejemplo</b>: en la oficina de turismo de un municipio, se realizan reuniones semanales entre los empleados para informar sobre nuevos proyectos, próximos eventos y estrategias de promoción, garantizando que todo el equipo cuente con la misma información y este preparado para atender a los visitantes de manera coherente.

      .py-3.py-md-4(titulo="Comunicación externa")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img10.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Involucra todas las interacciones y mensajes que la oficina de turismo envía a los visitantes, proveedores, asociaciones locales y otros interesados. Este tipo de comunicación permite que la  oficina de turismo  promocione los atractivos del destino y mantenga  informados a los turistas sobre eventos, actividades y servicios.
            p <b>Ejemplo</b>: la oficina de turismo del municipio envía boletines electrónicos mensuales a agencias de viajes, incluyendo información actualizada sobre las actividades y promociones del destino, Facilitando así que las agencias puedan brindar información precisa los clientes.
    
    .row.justify-content-center
      .col-lg-10.col-12
        p(data-aos="fade-left") La gestión eficaz de estos canales de comunicación empresarial es fundamental para fortalecer las relaciones internas y externas, garantizando una experiencia positiva para los turistas y el desarrollo coordinado de la oferta turística.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Comunicación escrita

    p(data-aos="fade-left") La comunicación escrita en las oficinas de turismo es una herramienta clave para transmitir información de manera clara, profesional y accesible tanto a los turistas como al personal interno. Incluye el uso de diversos formatos como correos electrónicos, cartas, informes, guías turísticas, folletos, carteles y publicaciones en plataformas digitales. Cada tipo de documento tiene un propósito específico, desde informar sobre eventos y actividades hasta orientar a los visitantes sobre los servicios disponibles y las normas de conducta en los destinos.
    
    p.mb-5(data-aos="fade-left") Para lograr una comunicación efectiva, es importante tener en cuenta varios aspectos: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Claridad y precisión") El lenguaje debe ser directo y comprensible, evitando tecnicismos que puedan dificultar la comprensión del mensaje. Cada palabra y frase debe estar cuidadosamente seleccionada para asegurar que el lector entienda sin ambigüedades.
              
              p(numero="2" titulo="Adaptación al público") La información debe estar dirigida a la audiencia específica, ya sea un visitante, un empleado o un proveedor. En documentos dirigidos al público, como folletos y carteles, se emplea un tono accesible y amigable; en cambio, en informes o comunicados internos puede utilizarse un estilo más formal y técnico.
              
              p(numero="3" titulo="Formato visual atractivo") La presentación visual es esencial, especialmente en materiales como folletos y guías. Un diseño gráfico atractivo, con un buen uso de imágenes, colores y espacios en blanco, facilita la lectura y hace la información más llamativa y fácil de seguir.
              
              p(numero="4" titulo="Consistencia en la información") Es fundamental que todos los documentos de comunicación escrita de la oficina de turismo contengan información actualizada y coherente en todos los canales de difusión, lo que ayuda a generar confianza y a evitar malentendidos entre los turistas y los empleados.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img11.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon1.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10.col-12.order-lg-1.order-2
              p.mb-0 <b>Ejemplo</b>: la oficina de turismo elabora un folleto detallado sobre los sitios históricos del municipio, en el que se incluye una breve descripción de cada lugar, recomendaciones prácticas (como horarios y accesibilidad), un mapa interactivo, e imágenes representativas de los sitios destacados. El lenguaje es accesible y atractivo para asegurar que turistas de todas las edades puedan entender la información. Además, se distribuye en formato impreso en la oficina de turismo y en formato digital en el sitio web y redes sociales de la oficina, asegurando que la información llegue a un público amplio.
            .col-lg-2.col-6.col-md-5.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img08.svg', alt='Imagen decorativa')
    
    p(data-aos="fade-left") En conclusión, la comunicación escrita permite transmitir de forma efectiva la identidad y los valores del destino, mejorar la experiencia del turista y garantizar que el personal interno esté alineado con los objetivos de la organización. 

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Comunicación turística

    p(data-aos="fade-left") La comunicación turística es el conjunto de estrategias y acciones destinadas a difundir información sobre los servicios, productos y experiencias disponibles en un destino, con el objetivo de informar, atraer y retener el interés de los turistas. Las oficinas de turismo municipales juegan un papel clave en la planificación y ejecución de esta comunicación, que no solo busca promover el destino sino también mejorar la experiencia de los visitantes.
    
    p.mb-5(data-aos="fade-left") Para que la comunicación turística sea efectiva, es fundamental considerar algunos elementos importantes: 

    .tarjeta.tarjeta--BG10.p-4.p-md-5.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Diversidad cultural y accesibilidad
              p La comunicación debe ser inclusiva y respetuosa de la diversidad cultural de los visitantes, adaptando el contenido y el lenguaje a diferentes idiomas y culturas para hacer el destino accesible a un público global. Además, se debe asegurar que el contenido esté adaptado a personas con discapacidades, ofreciendo información en formatos accesibles cuando sea necesario.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img13.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Selección de canales de comunicación
              p La elección de los canales depende del tipo de visitante y del alcance que se desee lograr. Esto incluye desde plataformas digitales, como sitios web y redes sociales, hasta medios tradicionales como mapas, guías impresas, o señalización en puntos estratégicos del destino. La combinación de canales permite llegar a un mayor número de turistas y brindar información oportuna en distintos momentos de su viaje.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img14.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Información clara y detallada
              p Los mensajes deben ser precisos y estar bien estructurados, proporcionando detalles relevantes sobre actividades, alojamientos, gastronomía y atracciones locales. Esto permite a los turistas planificar su visita de manera efectiva y tener una experiencia más completa en el destino.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img15.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Uso de estrategias visuales y audiovisuales
              p En el ámbito turístico, el impacto visual es crucial para captar la atención y despertar el interés. Fotos de calidad, videos y mapas interactivos ayudan a que los visitantes se sientan motivados a explorar el destino. Además, el uso de elementos visuales facilita la comprensión de la información. 
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img16.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema6/img12.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 <b>Ejemplo</b>: una oficina de turismo municipal mantiene un sitio web multilingüe que ofrece información detallada sobre las principales actividades y puntos de interés en la región. La web incluye secciones dedicadas a alojamiento, gastronomía, rutas de senderismo y eventos culturales, junto con mapas descargables y recomendaciones personalizadas. Además, en sus redes sociales, la oficina pública regularmente imágenes y videos de alta calidad que destacan la belleza natural y cultural del destino, acompañados de descripciones y enlaces a la página de reserva o contacto.
    
    p(data-aos="fade-left") La comunicación turística eficaz no solo se enfoca en informar, sino en construir una experiencia que motive a los visitantes a conocer y explorar el destino, mejorando así su percepción y satisfacción.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Redacción de comunicación

    p(data-aos="fade-left") La redacción de comunicación en las oficinas de turismo consiste en la creación de contenidos escritos que sean claros, persuasivos y adecuados para distintos formatos y audiencias. Es una habilidad esencial para transmitir información de forma efectiva y captar el interés de los visitantes, ya sean locales o internacionales.

    p.mb-5(data-aos="fade-left") Para lograr una redacción eficaz en el contexto turístico, es fundamental considerar los siguientes aspectos: 

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img18.svg', alt='Imagen decorativa')
            
          h4.text-center Claridad
          p.text-center Los textos deben ser directos, evitando tecnicismos o términos complicados que puedan dificultar la comprensión. La claridad ayuda a que los turistas encuentren la información que necesitan rápidamente y sin esfuerzo, mejorando su experiencia desde el primer contacto con el destino.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img19.svg', alt='Imagen decorativa')
            
          h4.text-center Persuasión
          p.text-center Además de informar, la redacción turística busca inspirar y motivar. Se emplean descripciones atractivas y llamadas a la acción para despertar el interés del lector y alentarlo a visitar el destino o participar en actividades específicas. La redacción persuasiva contribuye a que los turistas perciban la experiencia como única y deseable.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img20.svg', alt='Imagen decorativa')
            
          h4.text-center Adecuación al público y al canal
          p.text-center Es importante adaptar el tono, el lenguaje y el estilo a la audiencia y al medio de comunicación. Para folletos impresos o guías, se prefiere un tono más formal y detallado, mientras que, en redes sociales o blogs, se emplea un tono más casual y cercano. La adecuación asegura que el mensaje sea apropiado y efectivo según el contexto en que se presenta.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon1.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10.col-12.order-lg-1.order-2
              p.mb-0 <b>Ejemplo</b>: la oficina de turismo redacta una guía sobre festividades locales en la región, utilizando un lenguaje inclusivo y amigable. La guía invita a los turistas a sumergirse en la cultura local mediante descripciones vibrantes de las celebraciones y proporciona recomendaciones prácticas, como el mejor lugar para observar desfiles o probar platillos tradicionales. Además, incluye datos históricos y culturales que enriquecen la experiencia y permiten a los visitantes comprender el trasfondo de las festividades.
            .col-lg-2.col-6.col-md-5.mb-3.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img17.svg', alt='Imagen decorativa')

    p(data-aos="fade-left") La redacción de comunicación en el ámbito turístico combina claridad, persuasión y adecuación para informar y cautivar, proporcionando una experiencia enriquecedora que va más allá de la simple transmisión de información.

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Relaciones públicas

    p(data-aos="fade-left") Las relaciones públicas en las oficinas de turismo constituyen una estrategia esencial para fortalecer la imagen del destino y mejorar la percepción del municipio como un lugar atractivo y hospitalario para los visitantes. Estas actividades contribuyen a construir una relación positiva con el público y consolidar la marca del destino turístico.

    p(data-aos="fade-left") Mediante las relaciones públicas, las oficinas de turismo gestionan vínculos con diversos actores, como medios de comunicación, asociaciones turísticas, entidades gubernamentales y la comunidad local. Esta gestión busca generar una imagen coherente y favorable del destino, aumentando su visibilidad y atractivo ante turistas potenciales. 

    p.mb-5(data-aos="fade-left") Las relaciones públicas permiten:

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img22.svg", alt="alt").img90.m-auto
          h4.text-center Difusión de información positiva
          p.text-center.mb-0 A través de comunicados de prensa, eventos promocionales y redes sociales, se da a conocer lo mejor del destino, resaltando atractivos, actividades y logros relevantes.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img23.svg", alt="alt").img90.m-auto
          h4.text-center Organización de eventos
          p.text-center.mb-0 Las oficinas de turismo suelen organizar y promover eventos que refuercen la identidad del destino, como ferias, festivales o inauguraciones de rutas turísticas. Esto atrae tanto a turistas como a la comunidad local, fomentando el interés y la participación.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img24.svg", alt="alt").img90.m-auto
          h4.text-center Gestión de la imagen pública en situaciones de crisis
          p.text-center.mb-0 Ante eventos adversos, las relaciones públicas ayudan a manejar la información de manera transparente y a responder rápidamente, minimizando los impactos negativos y preservando la reputación del destino.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema6/img21.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 <b>Ejemplo</b>: la oficina de turismo del municipio organiza una rueda de prensa para presentar una nueva ruta gastronómica, que resalta los sabores tradicionales y el talento local. Para maximizar la visibilidad del evento, invita a periodistas y operadores turísticos de la región y difunde el lanzamiento en medios y redes sociales. De esta manera, no solo logra atraer la atención de un público amplio, sino que también fortalece el vínculo con la comunidad y el sector turístico local.

    p(data-aos="fade-left") Las relaciones públicas en el ámbito turístico van más allá de la promoción; son una herramienta estratégica para construir una imagen positiva y estable, fomentar alianzas, y actuar proactivamente en la gestión de la reputación del destino.

    separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.6 Política de calidad comunicativa

    p(data-aos="fade-left") La política de calidad comunicativa en una oficina de turismo establece directrices y estándares para asegurar que toda la información compartida, tanto dentro como fuera de la organización, cumpla con altos criterios de calidad, precisión, claridad y accesibilidad. Esta política es clave para ofrecer una comunicación confiable y profesional, lo que genera credibilidad y fortalece la confianza de los turistas, proveedores y otros actores.
    
    p.mb-5(data-aos="fade-left") Los elementos fundamentales de una política de calidad comunicativa incluyen:

    .tarjeta.tarjeta--BG11.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Precisión de la información
            p Se garantiza que los datos proporcionados, como horarios de atención, tarifas y direcciones, sean exactos y se mantengan actualizados para evitar malentendidos o inconvenientes a los visitantes.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img25.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Coherencia en el mensaje
            p La comunicación debe ser uniforme y alineada con la identidad de la oficina de turismo, asegurando que todos los empleados transmitan el mismo mensaje y que la información sea consistente en todos los canales.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img26.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Accesibilidad
            p La información debe ser fácil de encontrar y entender, considerando la diversidad de los turistas. Esto implica ofrecer material en varios idiomas y formatos, tanto digitales como impresos, para alcanzar a un público amplio.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img27.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Atención al cliente
            p Fomentar una comunicación proactiva y receptiva, asegurando que las consultas y quejas de los turistas reciban respuestas rápidas y satisfactorias.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img28.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .cajon.cajon1.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10.col-12.order-lg-1.order-2
              p.mb-0 <b>Ejemplo</b>: la oficina de turismo implementa una política de calidad comunicativa que exige revisiones trimestrales de todo el material informativo, como folletos, sitios web y redes sociales, para asegurar que la información sea actualizada, precisa y comprensible para todos los visitantes. Esta revisión ayuda a mantener un estándar de calidad en la comunicación, proporcionando una experiencia informativa confiable y atractiva para los turistas.
            .col-lg-2.col-6.col-md-5.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img08.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Una política de calidad comunicativa es esencial para mantener una imagen sólida y profesional del destino turístico, ya que facilita una experiencia positiva para el visitante y fomenta la confianza en los servicios que ofrece el municipio.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
