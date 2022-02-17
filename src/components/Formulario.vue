<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
        <form class="mid-form" @submit.prevent="mostrarUsuario">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            
              <input type="text" name="nombre" v-model="state.nombre" required />
                
            
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="state.apellidos" required/>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="state.bio" required></textarea>
          </div>
          <div class="form-group radibuttons">
            <input
              type="radio"
              name="genero"
              value="hombre"
              checked
              v-model="state.genero"
            />
            Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="state.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="state.genero"
            />
            Otro
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
        <div class="datos" v-if="state.nombre && state.apellidos">
          <h3>{{ state.nombre + " " + state.apellidos }}</h3>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script lang="es">
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from '@vuelidate/core'
import { required} from '@vuelidate/validators'
import Sidebar from "./Sidebar.vue";

export default {

  name: "Formulario",
  components: {
    
    Sidebar,
   
  },
  setup () {
   
     const state = reactive({
      nombre: '',
      apellidos: '',
      bio:'',
      genero:''
    })
    const rules = {
      nombre: { required }, 
      apellidos: { required }, 
        bio: { required} 
      
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },

  
  data(){
    return{
     
      user:{
        nombre: '',
        apellidos:'',
        bio:'',
        genero:''
      },
     
    }
  },
   
  methods:{
    mostrarUsuario(){
      console.log(this.state);
     
     
      
    }
  }
   }
  


</script>