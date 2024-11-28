<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Servicio al cliente

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El servicio al cliente se define como la atención que las organizaciones ofrecen a los ciudadanos para asegurar el acceso efectivo a servicios y derechos. Su propósito central es facilitar la interacción entre el usuario y la entidad, proporcionando información clara, orientación precisa y resolución de solicitudes de manera eficiente y transparente. Este servicio debe cumplir con estándares de calidad y normativas vigentes, garantizando trato justo y equitativo sin discriminación.
          br
          br
          | 
    p(data-aos="fade-left") Destacándose por su transparencia y responsabilidad, el servicio al cliente busca fortalecer la confianza en la gestión organizacional. Las políticas y protocolos implementados promueven una experiencia ciudadana mejorada mediante tiempos de respuesta optimizados, accesibilidad a canales de comunicación y cumplimiento de normativas de protección de datos. En el ámbito público, ONG y entidades mixtas, el servicio al cliente debe asegurar que los ciudadanos se sientan escuchados y respaldados, cumpliendo con el compromiso de ofrecer soluciones efectivas y ágiles para el beneficio de la comunidad.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Usuario

    p(data-aos="fade-left") El usuario es la persona que interactúa con un servicio, producto o sistema, sea de origen público o privado, con el fin de satisfacer una necesidad específica. En una organización o entidad, el usuario es quien recibe la atención o utiliza los recursos ofrecidos, por lo que desempeña un papel fundamental en la calidad del servicio.
    p.mb-5(data-aos="fade-left") Los usuarios se clasifican en:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img02.svg' alt='AvatarTop')
          h4.text-center Usuario interno
          p.text-center Personas dentro de la organización, como empleados o colaboradores, que utilizan recursos y servicios internos para sus funciones.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img03.svg' alt='AvatarTop')
          h4.text-center Usuario externo
          p.text-center Individuos que no forman parte de la organización, pero que interactúan con ella para obtener productos o servicios, como ciudadanos en entidades públicas o clientes en empresas privadas.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop')
          h4.text-center Usuario potencial
          p.text-center Personas que aún no han usado los servicios o productos de la organización, pero que podrían hacerlo en el futuro.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Usuario final
          p.text-center El destinatario último que utiliza el producto o servicio, quien recibe el beneficio directo de estos.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Usuario primario
          p.text-center Quien hace uso frecuente del servicio o producto, siendo el foco principal de las acciones de la organización.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Usuario secundario
          p.text-center Personas que interactúan con el servicio de forma ocasional o indirecta, aunque no son el público principal.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Servicio

    p(data-aos="fade-left") El servicio es un conjunto de actividades, procesos o tareas que una entidad pública, privada o una ONG ofrece para satisfacer las necesidades y expectativas de sus usuarios o beneficiarios. A diferencia de un producto tangible, un servicio implica la provisión de asistencia, orientación, información o soluciones, creando valor a través de la interacción y atención personalizada.
    
    p.mb-5(data-aos="fade-left") Los tipos de servicio en diversas organizaciones incluyen:
    
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.mb-md-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Servicios en entidades públicas")
            .col-12.mb-4.mb-md-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul(style="color: #FFCE73")
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios administrativos</b>: trámites para acceso a derechos ciudadanos, como emisión de documentos y permisos.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios sociales</b>: programas de bienestar, como educación, salud pública y subsidios.
                  li.mb-3 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios de infraestructura</b>: provisión de servicios básicos como agua, electricidad y transporte público.
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen decorativa')

          .row(numero="2" titulo="Servicios en entidades privadas")
            .col-12.mb-4.mb-md-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul(style="color: #FFCE73")
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios comerciales</b>: enfocados en satisfacer necesidades a cambio de compensación económica, como ventas y asesoría financiera.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios profesionales</b>: ofrecidos por expertos en áreas como medicina, derecho y consultoría.
                  li.mb-3 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios postventa</b>: asistencia después de una compra, incluyendo mantenimiento y soporte técnico.
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen decorativa')

          .row(numero="3" titulo="Servicios en ONG's")
            .col-12.mb-4.mb-md-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul(style="color: #FFCE73")
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios humanitarios</b>: asistencia en emergencias, proporcionando alimentos y atención médica.
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios comunitarios</b>: programas de desarrollo social y ambiental en comunidades desfavorecidas.
                  li.mb-3 
                    i.lista-ul__vineta
                    p.mb-0 <b>Servicios de sensibilización y defensa</b>: actividades de educación y concientización sobre problemas sociales para promover cambios en políticas públicas.
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')
    
    p(data-aos="fade-left") Cada tipo de servicio está diseñado para satisfacer demandas específicas, promoviendo el bienestar y desarrollo de la sociedad según el rol de cada organización.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Política y protocolo de servicio al cliente

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12.col-md-10
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.order-lg-1.order-2
            p.mb-3 La política y el protocolo de servicio al cliente para atender al público y organizaciones comunitarias desde entidades estatales, ONG y entidades mixtas establecen directrices y procedimientos que aseguran una atención adecuada, equitativa y eficiente a estos grupos. Su objetivo es proporcionar un trato respetuoso y transparente, adaptado a las necesidades de personas, grupos o colectivos locales, facilitando la interacción y el acceso a los servicios institucionales.
            .cajon.cajon1.color-primario.p-4
             p.mb-3 Implementar una política y protocolo de servicio garantiza que el público y las organizaciones comunitarias, esenciales para el desarrollo social y local, reciban atención adecuada, fortaleciendo así su relación con la entidad prestadora del servicio.
          .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") La política de servicio al cliente establece los principios que guían la atención al público y a las organizaciones comunitarias, incluyendo algunas estrategias claves:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Accesibilidad") Asegurar que las organizaciones accedan fácilmente a los servicios, eliminando barreras burocráticas.
              
              p(numero="2" titulo="Transparencia") Aplicaciones que permiten la recolección de datos en campo, facilitando el acceso y la gestión de la información.
              
              p(numero="3" titulo="Igualdad de trato") Herramientas que permiten analizar datos espaciales, ayudando en la planificación y desarrollo de destinos turísticos.
              
              p(numero="4" titulo="Colaboración") Repositorios de información que contienen datos sobre infraestructura turística, alojamiento, y atracciones.
          .col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')

        p.mb-5(data-aos="fade-left") El protocolo de servicio al cliente define los pasos que el personal debe seguir al atender al público y a organizaciones comunitarias, asegurando que el proceso sea ordenado y consistente:

        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imagen decorativa')

          .tarjeta.tarjeta--blanca.p-3(x="15.3%" y="12.5%" numero="01")
            p Contar con un canal específico para recibir solicitudes de organizaciones.

          .tarjeta.tarjeta--blanca.p-3(x="15.3%" y="60%" numero="02")
            p Designar un encargado que brinde atención personalizada y seguimiento a cada caso.

          .tarjeta.tarjeta--blanca.p-3(x="50%" y="77%" numero="03")
            p Mantener una comunicación adaptada y comprensible para las organizaciones.

          .tarjeta.tarjeta--blanca.p-3(x="85.5%" y="60%" numero="04")
            p Definir plazos claros en cada etapa e informar a las organizaciones sobre el tiempo estimado.

          .tarjeta.tarjeta--blanca.p-3(x="85.5%" y="12.5%" numero="05")
            p Monitorear el avance de cada solicitud y solicitar retroalimentación para mejorar el servicio.

        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-sm-9.col-md-8.col-10.movil
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen decorativa')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
