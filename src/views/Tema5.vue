<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Gestión de la información

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de la información es el proceso mediante el cual una organización recolecta, organiza, almacena, protege, analiza y distribuye la información de manera eficiente y efectiva. Este proceso es fundamental para tomar decisiones informadas, optimizar la operatividad y asegurar la seguridad y confidencialidad de los datos. La gestión adecuada de la información permite transformar datos en conocimiento valioso, lo que facilita no solo la planificación estratégica, sino también la toma de decisiones diarias, el cumplimiento de normativas y la mejora continua de los procesos internos. Una buena gestión de la información contribuye al desarrollo de una cultura organizacional basada en el uso eficiente de los recursos informáticos y tecnológicos, favoreciendo la innovación y la competitividad.
          br
          br
          | 
    
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Generalidades

    p(data-aos="fade-left") Las generalidades de la gestión de la información se refieren a los principios fundamentales que guían el manejo adecuado de la información dentro de una organización. Estos principios son esenciales para asegurar la efectividad de los procesos y la toma de decisiones, al mismo tiempo que se garantiza el cumplimiento de las normativas y la protección de los datos.
    p.mb-5(data-aos="fade-left") Entre los principios más destacados se incluyen:

    PasosA.color-acento-contenido.mb-5(tipo="l")(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-9.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-1.order-2
          h3 Relevancia y exactitud
          p La información debe ser precisa, actual y pertinente para las necesidades de la organización, de modo que pueda ser utilizada para tomar decisiones informadas y eficientes.
        .col-lg-2.col-md-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4.order-md-2.order
          figure
            img(src='@/assets/curso/temas/tema5/img02.svg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-4.col-8.mb-3.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1
          figure
            img(src='@/assets/curso/temas/tema5/img03.svg', alt='Imagen decorativa')
        .col-lg-9.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2
          h3 Accesibilidad
          p Los datos deben estar disponibles de manera oportuna y accesible para las personas que los necesiten, asegurando que no existan barreras innecesarias ni tiempos de espera prolongados que puedan retrasar procesos clave.
        
      .row.justify-content-center.align-items-center
        .col-lg-9.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-1.order-2
          h3 Seguridad
          p La protección de la información es crucial para evitar el acceso no autorizado, la pérdida o el daño de los datos. Esto incluye no solo la implementación de medidas de seguridad digitales, sino también el cumplimiento de regulaciones de privacidad como la Ley de Protección de Datos, que resguarda la confidencialidad y el uso adecuado de la información personal.
        .col-lg-2.col-md-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4.order-md-2.order-1
          figure
            img(src='@/assets/curso/temas/tema5/img04.svg', alt='Imagen decorativa')
        
        
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-4.col-8.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1
          figure
            img(src='@/assets/curso/temas/tema5/img05.svg', alt='Imagen decorativa')
        .col-lg-9.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2.order-md-2.order-2
          h3 Calidad
          p La información debe ser completa, consistente, precisa y comprensible. La calidad de la información influye directamente en la efectividad de la toma de decisiones, por lo que es esencial contar con datos confiables y bien estructurados.
        

      .row.justify-content-center.align-items-center
        .col-lg-9.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-1.order-2
          h3 Almacenamiento eficiente
          p Las organizaciones deben contar con sistemas de almacenamiento que garanticen la conservación segura de la información y faciliten su recuperación rápida cuando sea necesario. Esto puede incluir soluciones tecnológicas como bases de datos y sistemas de gestión documental que optimicen el acceso y la organización de los datos.
        .col-lg-2.col-md-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4.order-md-2.order-1
          figure
            img(src='@/assets/curso/temas/tema5/img06.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.col-md-10
        .row.justify-content-center.align-items-center
          .cajon.cajon.color-secundario.p-4
            p.mb-0 <b>Ejemplo</b>: en una empresa de turismo, la gestión de la información implica la administración de datos sobre reservas, preferencias de clientes, y estadísticas de destinos turísticos. Esto asegura que los agentes de viaje tengan acceso rápido y preciso a la información necesaria para hacer recomendaciones personalizadas y mejorar los servicios ofrecidos a los clientes.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Proceso de gestión

    p.mb-5(data-aos="fade-left") El proceso de gestión de la información incluye una serie de etapas que permiten asegurar un flujo de datos eficiente y seguro dentro de la organización. Estas etapas, al aplicarse correctamente, optimizan el manejo de la información y permiten su uso estratégico.

    .tarjeta.tarjeta--BG12.p-4.p-md-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="a.")
          .col-lg-6.order-lg-1.order-2
            h4 Recolección
            p La primera etapa consiste en captar datos desde diversas fuentes, tanto internas como externas, asegurando que la información recolectada sea precisa y relevante para los objetivos de la organización. Fuentes comunes incluyen formularios, encuestas, registros y bases de datos.
            p <b>Ejemplo</b>: en una agencia de eventos, la recolección podría incluir obtener información sobre los asistentes, sus preferencias alimenticias y restricciones de movilidad. 
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img07.png', alt='Imagen decorativa')

        .row.justify-content-center(titulo="b.")
          .col-lg-6.order-lg-1.order-2
            h4 Organización y clasificación
            p Tras la recolección, los datos deben organizarse y clasificarse de forma lógica y coherente, lo que facilita su acceso y uso cuando se necesiten. Este paso asegura que la información esté lista para consultas y análisis posteriores.
            p <b>Ejemplo</b>: una empresa hotelera organiza los datos de sus huéspedes por categorías como fechas de estancia, preferencias de habitación y servicios adicionales.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img08.png', alt='Imagen decorativa')

        .row.justify-content-center(titulo="c.")
          .col-lg-6.order-lg-1.order-2
            h4 Almacenamiento
            p Los datos se guardan en sistemas de almacenamiento, ya sean digitales o físicos. El almacenamiento adecuado permite acceso rápido y seguro a la información, incluyendo medidas como copias de respaldo y protección contra ciberataques.
            p <b>Ejemplo</b>: un restaurante con servicios de eventos almacena los contratos y pedidos de clientes en una base de datos digital, protegida mediante sistemas de seguridad. 
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img09.png', alt='Imagen decorativa')

        .row.justify-content-center(titulo="d.")
          .col-lg-6.order-lg-1.order-2
            h4 Distribución y acceso
            p Los datos almacenados se distribuyen a las personas que los necesitan, con un control de acceso para garantizar que solo el personal autorizado pueda consultarlos o modificarlos, protegiendo así la confidencialidad.
            p <b>Ejemplo</b>: en una empresa de transporte turístico, los conductores consultan los itinerarios y detalles de los clientes mediante una aplicación móvil segura.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img10.png', alt='Imagen decorativa')

        .row.justify-content-center(titulo="e.")
          .col-lg-6.order-lg-1.order-2
            h4 Uso y análisis
            p Los datos son empleados para tomar decisiones, generar informes y realizar análisis que permitan mejorar procesos, prever tendencias y evaluar el rendimiento organizacional.
            p <b>Ejemplo</b>: una agencia de viajes analiza las tendencias de reservas para ajustar su oferta de paquetes turísticos a las preferencias actuales de los clientes.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')

        .row.justify-content-center(titulo="f.")
          .col-lg-6.order-lg-1.order-2
            h4 Eliminación o conservación
            p Los datos que ya no son necesarios pueden eliminarse de forma segura o archivarse si es posible que se necesiten en el futuro. Para ello, se deben seguir normativas de eliminación segura, especialmente en el caso de datos sensibles.
            p <b>Ejemplo</b>: tras un evento, una empresa organizadora decide eliminar de manera segura los datos personales de los asistentes que ya no se requieren, siguiendo protocolos de privacidad.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img12.png', alt='Imagen decorativa')

    p(data-aos="fade-left") Este proceso garantiza que la información se gestione de forma estratégica, segura y en conformidad con las normativas de protección de datos, maximizando su utilidad y minimizando riesgos de seguridad.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Proceso de comunicación

    p.mb-5(data-aos="fade-left") El proceso de comunicación en la gestión de la información comprende las prácticas y medios a través de los cuales se transmite la información dentro y fuera de una organización. La gestión eficaz de la comunicación garantiza que la información correcta llegue a las personas adecuadas en el momento oportuno, promoviendo la transparencia, la colaboración y la toma de decisiones informadas. Los principales aspectos de este proceso incluyen:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Canales de comunicación")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p Las organizaciones disponen de diversos canales para compartir información, como correos electrónicos, reuniones, plataformas de gestión de proyectos, sistemas de mensajería interna y redes sociales corporativas. La elección del canal adecuado depende de la urgencia y el tipo de información que se debe transmitir.

              p <b>Ejemplo</b>: en una agencia de eventos, las actualizaciones sobre cambios en el cronograma se comunican mediante correos electrónicos y una plataforma colaborativa accesible para todos los empleados.
          
            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img13.png', alt='Imagen decorativa')

          .row(numero="2" titulo="Claridad y precisión")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p La información debe transmitirse de forma clara, precisa y sin ambigüedades para evitar malentendidos que puedan llevar a errores, retrasos o decisiones incorrectas.

              p <b>Ejemplo</b>: un hotel proporciona a sus empleados un protocolo claro para gestionar las solicitudes de servicio de los huéspedes, asegurando que todos conozcan los pasos a seguir. 
          
            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img14.png', alt='Imagen decorativa')

          .row(numero="3" titulo="Retroalimentación")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p Es esencial que el proceso de comunicación permita la retroalimentación, permitiendo a los receptores hacer preguntas, expresar inquietudes o confirmar su comprensión de la información recibida.

              p <b>Ejemplo</b>: después de presentar un plan de acción en una reunión de equipo, el gerente de una agencia de viajes solicita retroalimentación para verificar que todos comprendan los detalles y puedan aclarar dudas.
          
            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img15.png', alt='Imagen decorativa')

          .row(numero="4" titulo="Comunicación interna y externa")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p La comunicación interna se refiere al flujo de información entre empleados y departamentos, mientras que la comunicación externa se enfoca en las interacciones de la organización con clientes, proveedores y otros actores externos.

              p <b>Ejemplo</b>: en una empresa de turismo, la comunicación interna podría incluir la distribución de informes de ventas entre los departamentos, mientras que la comunicación externa abarcaría las promociones enviadas a los clientes.
          
            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img16.png', alt='Imagen decorativa')

          .row(numero="5" titulo="Tecnologías de la información")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p Las herramientas digitales, como los sistemas de gestión de relaciones con los clientes (CRM), aplicaciones de colaboración y plataformas de mensajería, son esenciales para facilitar la comunicación y asegurar un flujo de información eficiente.

              p <b>Ejemplo</b>: una agencia de organización de eventos utiliza un sistema de gestión en línea para coordinar información entre empleados y proveedores, mejorando tanto la comunicación como la eficiencia.
          
            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img17.png', alt='Imagen decorativa')

    p(data-aos="fade-left") Estos componentes aseguran que el proceso de comunicación respalde los objetivos organizacionales, permitiendo una gestión de la información ágil y efectiva en todos los niveles de la organización.

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
