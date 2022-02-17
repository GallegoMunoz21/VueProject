<template>
     <article class="article-item" >
        <div class="image-wrap">
          <img
            :src="asistente.image"
            :alt="asistente.title"
            :title="asistente.title"
          />
        </div>
        <h2>{{ asistente.title }}</h2>
        <span class="date" v-bind:class="'yearblue'">{{ asistente.year }}</span>
        <a href="#">Leer mas</a>
        <input type="button" value="Marcar como Favorita"
        @click="pasarFavoritaAlPadre(asistente)"
        />
        <div class="clearfix"></div>
      </article>
</template>

<script>


export default {
  name: 'Asistente',
  props:['asistente'],
  methods:{
    pasarFavoritaAlPadre(asistente){
      this.$emit('favorita', asistente);
     
    }
  }
        
    }

</script>
