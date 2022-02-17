<template>
  <div class="general">
   
    <div class="center">
      <section id="content">
        <h2 class="subheader">Asistentes de voz</h2>
         
      
        <div class="favorita" v-if="favorita">
          El Asistente marcado es:
          <h3>{{favorita.title}}</h3>
         
        </div>

        <!--Listado de Articulos-->

        <div id="articles">
          <div v-for="asistente in asistentesMayusculas" v-bind:key="asistente.title">
            <Asistente
             :asistente="asistente"
            @favorita="haLlegadoLaFavorita"
             ></Asistente>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Asistente from "./Asistente.vue";
export default {
  name: "Asistentes",
  components: {
    Asistente,
    Sidebar
  },
    methods:{
      haLlegadoLaFavorita(favorita){
      this.favorita=favorita;
      
    }
  
    },
   
      computed:{
      asistentesMayusculas(){
        var asistentedmod = this.asistentes;
        for(var i=0; i< this.asistentes.length; i++){
          asistentedmod[i].title =  asistentedmod[i].title.toUpperCase();
        }
        return asistentedmod;
      }
    },
  
  data() {
    return {
      nombre: 'Andres',
      favorita: null,
      asistentes: [
        {
          title: "Alexa",
          year: 2014,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Amazon-alexa-logo-vector.jpg/1024px-Amazon-alexa-logo-vector.jpg",
        },
        {
          title: "Google Home",
          year: 2016,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Assistant_logo.svg",
        },
        {
          title: "Siri",
          year: 2011,
          image:
            "https://image.shutterstock.com/image-vector/personal-assistant-voice-recognition-concept-260nw-1239950182.jpg",
        },
        {
          title: "Cortana",
          year: 2014,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Cortana_logo.png",
        },
      ],
    };
  },
};


</script>
