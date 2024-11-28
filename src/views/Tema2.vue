<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Solicitud de servicio

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las solicitudes de servicio son peticiones formales que los clientes realizan para obtener asistencia, información o solucionar problemas relacionados con los productos o servicios de una organización. En el ámbito de atención al cliente, estas solicitudes permiten a las empresas identificar y atender las necesidades específicas de los usuarios, lo cual es fundamental para mejorar su experiencia. Una solicitud de servicio puede abarcar consultas técnicas, pedidos de reparación, solicitudes de información sobre productos, quejas o sugerencias, y su adecuada gestión es clave para mantener la satisfacción y lealtad del cliente.
          br
          br
          | 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon-b.color-primario.p-3
          p.mb-0 Para gestionar las solicitudes de servicio de manera efectiva, las organizaciones deben establecer canales de comunicación claros y accesibles, como correos electrónicos, líneas telefónicas de atención o plataformas digitales. También es esencial implementar un sistema de seguimiento que permita registrar, priorizar y resolver cada solicitud en tiempos adecuados. Una respuesta rápida y efectiva no solo fortalece la relación con el cliente, sino que además proyecta una imagen de empresa confiable y comprometida con la calidad.
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.order-lg-2.order-2 
            p.mb-3 En una oficina de turismo territorial, la solicitud de servicio se refiere a los procesos en los que los turistas o usuarios requieren información, orientación o asistencia sobre servicios turísticos. Esto incluye solicitudes de guías turísticas, información sobre atracciones locales, alojamiento, transporte y eventos culturales. Una gestión eficiente de estas solicitudes garantiza respuestas oportunas y precisas, esenciales para una experiencia positiva.
            p.mb-0 De acuerdo con Zeithaml et al. (2009), las solicitudes de servicio son una parte fundamental en la entrega de un servicio de calidad, en la que la rapidez de respuesta y la comprensión de las expectativas del cliente son prioritarias. En el contexto turístico, esto significa no solo responder las consultas, sino también anticiparse a las necesidades del turista para generar una experiencia memorable y satisfactoria.
          .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img02.svg', alt='Imagen decorativa')

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Comprensión lectora

    p(data-aos="fade-left") La comprensión lectora en la atención al cliente se refiere a la capacidad del personal de servicio para interpretar y entender con precisión los mensajes escritos de los clientes, ya sea a través de correos electrónicos, formularios, chats u otras formas de comunicación escrita.
    
    p.mb-5(data-aos="fade-left") Esta habilidad es fundamental, ya que permite identificar claramente las necesidades, preocupaciones o solicitudes expresadas por el cliente, lo que facilita una respuesta adecuada y oportuna. Sin una comprensión lectora efectiva, pueden surgir malentendidos o interpretaciones incorrectas que afecten negativamente la experiencia del cliente y la calidad del servicio.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto de la atención al cliente, una buena comprensión lectora también implica ser capaz de captar detalles importantes, como fechas, datos específicos o instrucciones, esenciales para la resolución eficiente de las solicitudes. Además, permite identificar el tono emocional del mensaje, lo que facilita adaptar la respuesta para que sea empática y apropiada a la situación del cliente.
          br
          br
          | Comprender con exactitud lo que el cliente está comunicando no solo agiliza los procesos, sino que también mejora la satisfacción al ofrecer soluciones más precisas y alineadas con las expectativas.
    
    p.mb-5(data-aos="fade-left") En el contexto de las oficinas de turismo territorial, la comprensión lectora es clave para que los funcionarios comprendan y procesen eficazmente las solicitudes de servicio. Los turistas suelen enviar consultas por escrito, ya sea por correo electrónico, formularios web o en persona mediante documentos. La comprensión lectora es la habilidad de interpretar correctamente estos textos, comprendiendo tanto la información explícita como implícita.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-primario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-bold.bloque-texto-f__texto.text-center - Kintsch (1998)
          p.text-regular.bloque-texto-f__texto.text-center Menciona que la comprensión lectora implica la construcción de una representación mental del texto, lo que es esencial para proporcionar respuestas precisas y adecuadas a las consultas de los turistas. En oficinas de turismo, esto se traduce en la capacidad de entender rápidamente las peticiones y brindar una atención efectiva.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Comunicación

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2 
        p <b>Según Shannon y Weaver (1949)</b>, la comunicación es "el proceso mediante el cual un emisor transmite un mensaje a un receptor a través de un canal, con el objetivo de compartir información". En su modelo, la comunicación se ve como un proceso técnico que incluye elementos como el "ruido", que puede interferir en la transmisión y recepción del mensaje.
        p <b>Schramm (1954)</b>, define la comunicación como un proceso interactivo en el que tanto el emisor como el receptor desempeñan un rol activo, creando un ciclo de retroalimentación (feedback). Schramm subraya que la comunicación no es lineal, sino un intercambio bidireccional en el que el significado se construye a partir de la experiencia compartida.
        p <b>Por su parte, Jakobson (1960)</b>, define la comunicación como un proceso compuesto por seis elementos: emisor, receptor, mensaje, canal, código y contexto. Destaca que cada uno de estos elementos tiene una función particular (emotiva, conativa, referencial, fática, metalingüística o poética), y que la comunicación es una interacción en la que el lenguaje juega un papel clave en la construcción de significados.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen decorativa')

    p.mb-3(data-aos="fade-left") Cada tipo de comunicación cumple un papel importante dependiendo del contexto y el objetivo de la interacción. A continuación, se presentan siete tipos principales:

    .row.justify-content-center.p-md-5.p-4(data-aos="flip-up")
      .col-12
        .tarjeta.tarjeta--BG08.p-4
          SlyderB.p-4(:datos="datosSlyder")
    
    p.mb-5(data-aos="fade-left") La comunicación es el eje central de las interacciones dentro de una oficina de turismo territorial. Puede darse de manera verbal, escrita o no verbal, y es esencial para transmitir información clara y precisa a los turistas.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-primario.pt-4.px-5.mb-3
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto.text-center Quien escucha pone en ejercicio el sentido del oído. Quien atiende aplica el intelecto para comprender lo que oye.
          p.text-bold.bloque-texto-f__texto.text-center - EOI, 2014
          
    
    p(data-aos="fade-left") Una buena comunicación no solo implica transmitir un mensaje, sino también asegurarse de que este sea comprendido adecuadamente por el receptor. Según Shannon y Weaver (1949), la comunicación eficaz en el servicio al cliente minimiza las distorsiones y ruidos, asegurando que el mensaje original llegue sin interferencias. En el turismo, es crucial que los mensajes no solo sean informativos, sino que también generen confianza y satisfacción en el turista. Esto depende de una escucha activa y de un lenguaje accesible.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Protocolo, etiqueta y netiqueta empresarial

    p.mb-5(data-aos="fade-left") El protocolo, la etiqueta y la netiqueta empresarial son fundamentales en las interacciones de las oficinas de turismo, ya que establecen las normas de comportamiento en diferentes contextos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen decorativa')
          .col-lg-6.col-12
            .cajon.cajon.color-secundario.p-4.mb-3
              p El protocolo se refiere a las reglas formales que guían las interacciones en eventos o situaciones oficiales, asegurando un ambiente ordenado y respetuoso. La etiqueta trata sobre las normas de cortesía y comportamiento adecuado en las interacciones personales, especialmente en el trato con los turistas, donde la amabilidad y el respeto son esenciales
            p Por otro lado, la netiqueta empresarial ha ganado relevancia en la era digital, ya que muchos turistas interactúan con las oficinas de turismo a través de plataformas en línea. Shea (1994), define la netiqueta como un conjunto de normas de comportamiento en la comunicación digital, que en el ámbito turístico incluye la cortesía al responder correos electrónicos, mensajes en redes sociales, y el manejo adecuado de foros de discusión y chats.

    p.mb-5(data-aos="fade-left") Para contextualizar, se puede resumir de la siguiente manera:

    .row.justify-content-center.ali.mb-4(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
            
          h4.text-center Protocolo
          p.text-center Son las normas y procedimientos que regulan el comportamiento en situaciones formales, tanto a nivel empresarial como institucional, garantizando un ambiente de respeto y orden.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img14.png', alt='Imagen decorativa')
            
          h4.text-center Etiqueta empresarial
          p.text-center Son las normas de conducta que dictan el comportamiento adecuado en un entorno laboral, como el respeto hacia los superiores, el uso apropiado del lenguaje, la presentación personal y el trato cordial entre compañeros de trabajo.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen decorativa')
            
          h4.text-center Netiqueta
          p.text-center Son las normas de comportamiento y cortesía que deben seguirse en las comunicaciones electrónicas (correos electrónicos, videollamadas, redes sociales, etc.), aplicando el respeto y profesionalismo incluso en la virtualidad.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Habilidades blandas

    p(data-aos="fade-left") Las habilidades blandas son un conjunto de competencias interpersonales y sociales que complementan las habilidades técnicas. Incluyen aspectos como la empatía, la comunicación efectiva, el trabajo en equipo, la gestión del tiempo, la resolución de conflictos y la inteligencia emocional. Estas habilidades son esenciales para interactuar eficazmente con los demás, adaptarse a diferentes situaciones y fomentar un ambiente de trabajo colaborativo.
    
    p.mb-5(data-aos="fade-left") Es probable que el futuro del trabajo traiga una amplia gama de nuevos empleos, muchos de los cuales hoy apenas podemos concebir. Algunas de las habilidades blandas más demandadas son:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Las 10 habilidades blandas que demandará el mercado laboral en el futuro.</i>
      .row.justify-content-center
        .col-lg-12.col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img16.svg', alt=' En la figura 1 se presentan las habilidades blandas, como la gestión de conflictos, el manejo del tiempo, la comunicación efectiva y la inteligencia emocional, son esenciales para el éxito laboral. Estas competencias interpersonales permiten a los profesionales interactuar eficazmente, adaptarse a cambios y generar un ambiente de trabajo positivo.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img17.svg', alt=' En la figura 1 se presentan las habilidades blandas, como la gestión de conflictos, el manejo del tiempo, la comunicación efectiva y la inteligencia emocional, son esenciales para el éxito laboral. Estas competencias interpersonales permiten a los profesionales interactuar eficazmente, adaptarse a cambios y generar un ambiente de trabajo positivo.')
    
    p.mb-5(data-aos="fade-left") Las habilidades blandas permiten a los funcionarios de una oficina de turismo territorial interactuar eficazmente con los turistas. Estas incluyen la empatía, la capacidad para trabajar en equipo, la resolución de conflictos, la adaptabilidad y la comunicación asertiva.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Según Goleman (1995), las habilidades blandas están estrechamente relacionadas con la inteligencia emocional, lo que permite a los empleados comprender y gestionar no solo sus propias emociones, sino también las de los turistas, creando un ambiente de servicio más amable y receptivo. En el contexto del turismo, estas habilidades son fundamentales para manejar situaciones de estrés o insatisfacción, así como para generar una experiencia positiva y memorable para el turista.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Comunicación verbal',
        texto:
          'Se realiza mediante palabras, ya sea de manera oral o escrita. Ejemplos incluyen conversaciones, discursos, correos electrónicos y mensajes de texto.',
        imagen: require('@/assets/curso/temas/tema2/img05.png'),
      },
      {
        titulo: 'Comunicación no verbal',
        texto:
          'Implica el uso de gestos, expresiones faciales, posturas, tono de voz y otros elementos no verbales para transmitir mensajes. Tiene un gran impacto en la percepción del mensaje.',
        imagen: require('@/assets/curso/temas/tema2/img06.png'),
      },
      {
        titulo: 'Comunicación visual',
        texto:
          'Se refiere al uso de imágenes, gráficos, videos y otros recursos visuales para comunicar ideas o información. Es común en medios digitales y publicidad.',
        imagen: require('@/assets/curso/temas/tema2/img07.png'),
      },
      {
        titulo: 'Comunicación formal',
        texto:
          'Sigue estructuras y protocolos específicos, como informes, cartas oficiales y reuniones de negocios. Generalmente ocurre en entornos organizacionales.',
        imagen: require('@/assets/curso/temas/tema2/img08.png'),
      },
      {
        titulo: 'Comunicación informal',
        texto:
          'Es más espontánea y menos estructurada, como las charlas cotidianas entre colegas o amigos. No sigue reglas formales y suele ocurrir en contextos sociales.',
        imagen: require('@/assets/curso/temas/tema2/img09.png'),
      },
      {
        titulo: 'Comunicación interna',
        texto:
          'Se da dentro de una organización entre sus miembros. Es fundamental para la coordinación de tareas y el buen funcionamiento de la entidad.',
        imagen: require('@/assets/curso/temas/tema2/img10.png'),
      },
      {
        titulo: 'Comunicación externa',
        texto:
          'Se dirige hacia personas o entidades ajenas a la organización, como clientes, proveedores o el público en general. Es clave para la imagen y las relaciones públicas de la entidad.',
        imagen: require('@/assets/curso/temas/tema2/img11.png'),
      },
    ],
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
