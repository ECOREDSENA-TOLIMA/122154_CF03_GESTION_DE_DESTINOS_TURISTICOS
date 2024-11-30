<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") La Gestión de solicitudes de servicio en las oficinas de turismo de los municipios, entidades privadas y organizaciones no gubernamentales dedicadas a actividades turísticas se describen a continuación, partiendo desde el servicio al cliente, como eje articulador en las solicitudes de servicio; las peticiones, quejas, reclamos, sugerencias y felicitaciones y la ética en la atención al público. Se incluye, además, la gestión de la información en los diferentes procesos y los canales de comunicación empleados en las organizaciones turísticas para con sus clientes, visitantes, personal interno y externo. Finalmente, se aborda la trazabilidad a la comunicación, con sus tiempos de respuesta y reportes, como se presenta a continuación:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Gestión de solicitudes de servicio, se describen los temas clave relacionados con la comunicación, los canales utilizados, la redacción, las relaciones públicas, la política de calidad comunicativa, la trazabilidad y los tiempos de respuesta en las oficinas de turismo. Este mapa conceptual permite visualizar cómo se interrelacionan estos elementos para ofrecer una atención eficiente y alineada con los estándares de calidad y satisfacción del usuario.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
