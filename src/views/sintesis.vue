<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo Implementación de la campaña publicitaria digital, se centra en proporcionar conocimientos sobre la planificación de la campaña publicitaria, la creación del boceto publicitario y la presentación efectiva de la campaña en entornos digitales. Estos conocimientos son aplicables en diversos sectores y tipos de organizaciones que buscan construir valor de marca mediante estrategias de #[i marketing] digital.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente implementación de la campaña publicitaria digital, encontramos tres temas principales que son la planificación, la bocetación y la presentación de la campaña.")
      .col-auto
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
