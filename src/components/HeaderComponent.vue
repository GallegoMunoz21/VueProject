<template>
  <header id="header">
    <div class="center">
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="logotipo" />
        <span id="brand"> <strong>Home</strong> Smart Home</span>
      </div>

      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" exact="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" exact="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" exact="/formulario" active-class="active">Formulario</router-link>
          </li>
          <li>
            <router-link to="/pagina/Domotica" exact="/pagina/Domotica" active-class="active">Domotica</router-link>
          </li>
          <li>
            <router-link to="/asistentes" exact="/asistentes" active-class="active">Asistentes</router-link>
          </li>
        </ul>
      </nav>

      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
