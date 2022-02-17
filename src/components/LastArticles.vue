<template>
<div class="general">
<Slider 
texto="Casa Inteligente"
home="true"
></Slider>
    <div class="center">
  <section id="content">
    <h2 class="subheader">Ùltimos articulos</h2>

    <!--Listado de Articulos-->

    <div id="articles">
      <Articles v-bind:articles="articles"></Articles>
      
    </div>
  
  </section>
  <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Global from '../Global';
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue"

export default {
  name: 'LastArticles',
   components: {
    Slider,
    Sidebar,
    Articles
   
  },
  mounted(){
    
    this.getLastArticles();
  },
  data(){
    return{
      url: Global.url,
      articles: [ ]
    }
  },
  methods:{
    getLastArticles(){
      axios.get(this.url+'articles/tru')
      .then(res=>{
        if(res.data.status == 'success'){
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      })
    }
   
  },
}
</script>
