<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presentación de la campaña publicitaria digital
    
    Separador
    .row
      .col-xl-12
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.1 Herramientas de presentación
    
    Separador
    .row
      .col-xl-12
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.2 Presentación de indicadores de desempeño
    
    Separador
    .row
      .col-xl-12
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.3 Plan de mejoramiento
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
