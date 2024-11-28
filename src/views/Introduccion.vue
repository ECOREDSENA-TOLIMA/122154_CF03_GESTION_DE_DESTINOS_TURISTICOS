<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-left") El componente formativo <b>Gestión de solicitudes de servicio</b> se centra en desarrollar competencias para ofrecer un servicio al cliente de calidad, gestionar adecuadamente las solicitudes y cumplir con los protocolos organizacionales y normativos. Mediante el estudio de conceptos como servicio al cliente, solicitudes, peticiones, quejas, reclamos, sugerencias y felicitaciones, se busca fortalecer las competencias necesarias para cumplir con los protocolos en la gestión de servicios.
    p.mb-5(data-aos="fade-left") Asimismo, el componente fomenta una interacción efectiva con el cliente, con un enfoque ético que mantenga la integridad y confianza en la comunicación para una resolución eficiente de solicitudes. Los aprendices adquirirán herramientas prácticas para gestionar solicitudes siguiendo las políticas organizacionales y normativas vigentes, promoviendo una atención al cliente de alta calidad. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
