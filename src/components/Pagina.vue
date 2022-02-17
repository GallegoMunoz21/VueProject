<template>
  <div class="general">
    <Slider texto="Domotica"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de prueba</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="redirigirAlBlog()">Redirigir</button>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script lang="es">
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Pagina",
  components: {
    Slider,
    Sidebar
   
  },
  mounted(){
    this.id_desde_url = this.$route.params.id;
  },
  data(){
    return{
      id_desde_url: null
    }
    
  },

  methods: {
redirigirAlBlog(){
  this.$router.push('/blog');
}
  }
}
</script>