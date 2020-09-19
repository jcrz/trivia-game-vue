<template>
  <div id="app" class="container">
    <div id="nav" class="align-bottom">
      <router-link to="/">
        <button class="btn btn-outline-success">Inicio</button>
      </router-link>
      <router-link to="/question">
        <button class="btn btn-outline-success">Añadir pregunta</button>
      </router-link> 
      <div class="float-right">
        <button class="btn btn-outline-primary">Cerrar sesión</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
  border-bottom: 1px solid #e5e5e5;
}
#nav a {
  padding: 0px 15px;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
