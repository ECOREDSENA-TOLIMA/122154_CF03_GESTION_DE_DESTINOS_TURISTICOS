<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 PQRSF

    .col.mb-5(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") PQRSF es el acrónimo de Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones, un sistema ampliamente utilizado en organizaciones públicas y privadas para gestionar de manera estructurada la interacción con los usuarios o clientes en relación con la prestación de servicios. Este enfoque permite a las organizaciones recoger y analizar de manera sistemática las opiniones, solicitudes, quejas y otros tipos de comentarios de los usuarios, con el objetivo de identificar áreas de mejora y optimizar la calidad de los productos o servicios ofrecidos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')
          .col-lg-8.col-12
            .cajon.cajon.color-secundario.p-4.mb-3
              p La implementación de un sistema PQRSF bien gestionado no solo facilita una comunicación eficiente entre la organización y los usuarios, sino que también fomenta la transparencia, la confianza y la satisfacción del cliente. Este sistema proporciona a los usuarios un medio formal y accesible para expresar sus inquietudes y expectativas, lo cual permite a las organizaciones responder de manera oportuna y eficaz.
            p Además, las respuestas adecuadas a las peticiones y quejas pueden mejorar la imagen de la organización y fortalecer la relación con los clientes, mientras que las sugerencias y felicitaciones ofrecen valiosa retroalimentación sobre aspectos positivos y áreas de oportunidad. En resumen, el sistema PQRSF es una herramienta fundamental para la gestión de la calidad y la mejora continua, asegurando que los servicios o productos ofrecidos se ajusten mejor a las necesidades y expectativas de los usuarios.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Solicitudes y requerimientos

    p.mb-5(data-aos="fade-left") Las solicitudes y requerimientos son peticiones formales de los usuarios que pueden estar relacionadas con la obtención de información, la solicitud de un servicio o el ejercicio de algún derecho. Las diferencias entre ambos son las siguientes:

    .row.mb-5(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img03.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h2 Solicitud
              p Un pedido formal que puede incluir la solicitud de información sobre el estado de un servicio, la petición de un nuevo servicio o la actualización de algún dato o condición.
      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img04.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h2 Requerimiento
              p Se refiere a una demanda específica que exige una acción por parte de la organización para cumplir con una obligación establecida o resolver un problema planteado por el usuario.

    p.mb-5(data-aos="fade-left") En el contexto de PQRSF, las solicitudes y requerimientos son cruciales para garantizar respuestas claras y oportunas a los usuarios, lo cual mejora la percepción y satisfacción del cliente con la organización. Existen diferentes formatos para registrar las solicitudes, a continuación, se presenta un ejemplo:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <i>Ejemplo clasificación de PQRSF.</i>
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h4.mb-0 CLASIFICACIÓN DE PQRSF
          table
            tr(style="background-color: #F6F6F6")
              th.text-center TIPO DE PQRS
              th.text-center CLASE DE DOCUMENTO
              th.text-center FECHA DE REMISIÓN
              th.text-center FECHA DE RADICACIÓN
              th.text-center CANAL DE RECEPCIÓN
              th.text-center FOLIO
              th.text-center DEPENDENCIA / RESPONSABLE
              th.text-center OBSERVACIÓN
            //- tr(style="background-color: #fff")
            //-   td
            //-   td
            //-   td
            //-   td
            //-   td
            //-   td
            //-   td
            //-   td

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Trámite

    p.mb-5(data-aos="fade-left") El trámite es el proceso que sigue una solicitud, queja, reclamo o sugerencia desde que es recibida hasta que se le da una respuesta o resolución. En el contexto de PQRSF, el trámite involucra varias etapas clave para asegurar una atención adecuada y eficiente:

    .tarjeta.tarjeta--BG10.p-4.p-md-5.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Recepción
              p La organización recibe la solicitud, queja, reclamo o sugerencia de manera formal a través del canal correspondiente.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Registro
              p El caso se documenta en un sistema para su seguimiento y control, asegurando que quede debidamente registrado y no se pierda en el proceso.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Evaluación
              p Se analiza el contenido y la naturaleza de la solicitud para determinar las acciones a seguir, la prioridad del caso y los recursos necesarios.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img07.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              h4 Respuesta
              p Se comunica al cliente la resolución o información solicitada, dentro de los plazos establecidos por la normativa interna y de acuerdo con los estándares de calidad y servicio de la organización.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img08.png', alt='Imagen decorativa')

    p(data-aos="fade-left") El manejo adecuado de los trámites es esencial para garantizar que los usuarios obtengan respuestas efectivas y oportunas, cumpliendo con los plazos establecidos y manteniendo altos estándares de calidad en el servicio. Un proceso de trámite bien gestionado mejora la satisfacción del cliente y contribuye a la eficiencia organizacional.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Normativa en tratamiento de datos

    p(data-aos="fade-left") La normativa en tratamiento de datos regula cómo las organizaciones manejan los datos personales de los usuarios. En el contexto de las PQRSF, es fundamental que la organización cumpla con las leyes de protección de datos para garantizar la privacidad y seguridad de la información proporcionada por los usuarios.
    p.mb-5(data-aos="fade-left") En muchos países, la normativa está regulada por leyes como el Reglamento General de Protección de Datos (RGPD) en Europa o por leyes nacionales de protección de datos personales. Estas normativas establecen principios clave que las organizaciones deben seguir:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Consentimiento")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p La organización debe obtener el consentimiento explícito de los usuarios para el tratamiento de sus datos personales, asegurando que la recolección y uso de información esté basada en la autorización del titular de los datos.

      .py-3.py-md-4(titulo="Finalidad")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Los datos recolectados deben ser utilizados exclusivamente para los fines comunicados al usuario, tales como la resolución de una solicitud o reclamo, sin fines adicionales no informados.

      .py-3.py-md-4(titulo="Transparencia")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Las organizaciones deben ser claras sobre cómo se usan los datos personales, permitiendo a los usuarios acceder, rectificar o eliminar sus datos cuando lo deseen, conforme a los derechos que les otorgan las leyes de protección de datos.

      .py-3.py-md-4(titulo="Seguridad")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p La información debe ser almacenada y procesada bajo altos estándares de seguridad, con medidas adecuadas para prevenir accesos no autorizados, pérdidas o violaciones de la privacidad de los usuarios.

    p(data-aos="fade-left") Es crucial que cualquier proceso de solicitud, queja o reclamación respete estos principios, lo que no solo garantiza el cumplimiento legal, sino también la confianza de los usuarios en el sistema de PQRSF, contribuyendo a una gestión transparente y responsable de sus datos personales.
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
