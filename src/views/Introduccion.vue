<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p El #[i marketing] digital, permite a las organizaciones crear campañas publicitarias que se encuentren relacionadas con las nuevas tendencias del mercado, es por eso que, demandan personal idóneo, con habilidades en conocimiento en la planeación diseño y presentación de las campañas publicitarias, así como en la medición de los resultados y la creación de planes de mejora, permitiendo a las organizaciones diseñar estrategias, planes y campañas publicitarias que creen comunicación y fidelización con los consumidores.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
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
