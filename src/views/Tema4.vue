<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ética del servicio

    p.mb-5(data-aos="fade-left") La ética del servicio hace referencia al conjunto de principios y valores que deben guiar el comportamiento y las decisiones de aquellos que prestan servicios a los demás, particularmente en el ámbito empresarial y profesional. Según Adela Cortina, la ética es un "saber de lo práctico" que se ocupa de las acciones humanas que pueden ser de otra manera, y está orientada a la acción moral, entendida como aquella que debe ser realizada por la bondad intrínseca de la acción misma (Cortina, 2000). La ética, entonces, no solo trata de lo que es, sino también de lo que debe ser, y se expresa a través de juicios morales que orientan el comportamiento hacia el bien.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-5.col-8.col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')
          .col-lg-7.col-12
            p En el ámbito del servicio al cliente, especialmente en el sector turístico, la ética del servicio implica actuar con integridad, respeto, transparencia y responsabilidad. Los prestadores de servicios deben generar confianza, garantizar un trato justo y cumplir con los compromisos adquiridos, más allá de simplemente seguir las normativas. El trato humano y considerado es esencial para asegurar una experiencia positiva para el usuario, promoviendo una relación de confianza y satisfacción que trasciende la mera transacción comercial. 
            p En este sentido, la ética del servicio no solo se enfoca en la satisfacción inmediata de las necesidades del cliente, sino también en la creación de un ambiente de servicio que valore y respete a cada persona de manera integral, promoviendo la equidad y el bienestar. 

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Generalidades

    p(data-aos="fade-left") Las generalidades de la ética del servicio comprenden los principios esenciales que deben orientar cada interacción entre una organización y sus clientes o visitantes. Estos principios son universales, aplicables a todas las industrias y sectores, aunque adquieren una relevancia particular en áreas como el turismo, donde la interacción directa con las personas es clave para la experiencia del cliente.
    
    p(data-aos="fade-left") Los aspectos fundamentales incluyen: 
    
    .row.justify-content-center.p-md-5.p-4(data-aos="flip-up")
      .col-12
        .tarjeta.tarjeta--BG08.p-4
          SlyderB.p-4(:datos="datosSlyder")
    
    p(data-aos="fade-left") Estos principios son la base sobre la cual se toman las decisiones y se realizan las acciones dentro del servicio, garantizando que el comportamiento organizacional esté alineado con altos estándares éticos y morales, y asegurando una relación de confianza con los clientes.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Manual

    p(data-aos="fade-left") Un manual de ética del servicio es un documento que recopila los principios, políticas y directrices que los empleados deben seguir en sus interacciones con los clientes y otros grupos de interés. Este manual actúa como una guía para orientar el comportamiento de los empleados y asegurar que se mantenga un estándar ético uniforme en la prestación de servicios. 
    
    p.mb-5(data-aos="fade-left") Algunos de los contenidos típicos de un manual de ética del servicio incluyen:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-3.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img08.png' alt="Imagen decorativa")
          .tarjetas-upper_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Código de conducta
            p.text-center.mb-0.px-0 Define las conductas aceptables e inaceptables en las relaciones con los clientes, proporcionando un marco claro de comportamiento ético.

      .col-xl-3.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img09.png' alt="Imagen decorativa")
          .tarjetas-upper_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Normas de comportamiento
            p.text-center.mb-0.px-2 Establece cómo deben actuar los empleados ante diversas situaciones, como la resolución de conflictos, manejo de quejas y atención a clientes en situaciones difíciles.

      .col-xl-3.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img10.png' alt="Imagen decorativa")
          .tarjetas-upper_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Políticas de atención
            p.text-center.mb-0.px-2 Proporciona lineamientos para asegurar que el trato con los clientes sea consistente, ético y satisfactorio, favoreciendo una experiencia positiva para los usuarios.

      .col-xl-3.col-lg-4.col-sm-10.col-md-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-upper(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img07.png' alt="Imagen decorativa")
          .tarjetas-upper_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Procedimientos en caso de violaciones éticas
            p.text-center.mb-0.px-2 Expone cómo manejar incidentes en los que se hayan vulnerado los principios éticos, detallando los pasos para investigar y resolver los casos de manera justa y transparente.
    
    p(data-aos="fade-left") Un manual de ética del servicio es fundamental para reforzar la cultura ética en una organización y garantizar que las acciones de todos los empleados reflejen los valores y principios de la empresa, promoviendo un ambiente de confianza y responsabilidad en el trato con los clientes.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Código y cartas del turismo

    p.mb-5(data-aos="fade-left") El código ético del turismo y las cartas del turismo son instrumentos internacionales diseñados para fomentar un turismo responsable y ético, que respete a las comunidades locales, el medio ambiente y los derechos de los turistas. Uno de los más destacados es el Código Ético Mundial para el Turismo, promovido por la Organización Mundial del Turismo (OMT).

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Código ético mundial para el turismo

    p.mb-5(data-aos="fade-left") Este documento establece principios que impulsan un turismo sostenible, responsable y accesible para todos, basado en valores como el respeto mutuo, la equidad, la sostenibilidad ambiental y el desarrollo económico responsable. Entre los puntos clave se incluyen:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Respeto por los derechos humanos") Asegurar que el turismo no vulnera los derechos humanos, laborales o culturales de las comunidades locales.
              
              p(numero="2" titulo="Protección del medio ambiente") Promover prácticas turísticas que minimicen el impacto ambiental, como el manejo adecuado de residuos y el uso sostenible de los recursos naturales.
              
              p(numero="3" titulo="Beneficios compartidos") Fomentar que las comunidades locales obtengan beneficios económicos y sociales justos del turismo.
              
              p(numero="4" titulo="Accesibilidad") Promover un turismo accesible para personas con discapacidades y otros grupos marginados.
          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img11.svg', alt='Imagen decorativa')

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 Cartas del turismo

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.col-md-10
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-1.order-2
            p.mb-3 Son documentos internacionales o regionales que, al igual que los códigos, buscan guiar el desarrollo del turismo de manera sostenible y responsable. Un ejemplo de ello es la Carta Mundial del Turismo Sostenible, que promueve un equilibrio entre el crecimiento económico y la protección del medio ambiente y las culturas locales.
            .cajon.cajon2.color-secundario.p-4
             p.mb-0 Estos códigos y cartas proporcionan un marco ético global que debe guiar tanto a las empresas turísticas como a los turistas, asegurando que el turismo sea una actividad respetuosa y beneficiosa para todas las partes involucradas.
          .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img12.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Respeto',
        texto:
          'Tratar a todos los clientes con cortesía, dignidad y sin discriminación, reconociendo su individualidad y necesidades.',
        imagen: require('@/assets/curso/temas/tema4/img02.png'),
      },
      {
        titulo: 'Responsabilidad',
        texto:
          'Cumplir con los compromisos adquiridos, garantizando la entrega del servicio prometido y atendiendo cualquier solicitud  o queja de manera eficaz. ',
        imagen: require('@/assets/curso/temas/tema4/img03.png'),
      },
      {
        titulo: 'Transparencia',
        texto:
          'Informar de manera clara y honesta sobre todos los aspectos del servicio, como tarifas, políticas de cancelación  y cualquier otra condición relevante.',
        imagen: require('@/assets/curso/temas/tema4/img04.png'),
      },
      {
        titulo: 'Equidad',
        texto:
          'Asegurar un trato justo para todos los cliente, independientemente de su origen, nivel económico o preferencias, evitando sesgos o favoritismos.',
        imagen: require('@/assets/curso/temas/tema4/img05.png'),
      },
      {
        titulo: 'Confidencialidad',
        texto:
          'Respetar la privacidad de los clientes, protegiendo su información personal de acuerdo con las normativas de protección  de datos vigentes.',
        imagen: require('@/assets/curso/temas/tema4/img06.png'),
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
