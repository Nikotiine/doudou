<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/creations">Creations</router-link> |
    <router-link to="/prestations">Prestations</router-link> |
    <router-link to="/atelier">L'atelier</router-link> |
    <router-link to="/commander"><panier /></router-link> |
    <span></span>
  </div>
  <router-view />
</template>
<script>
import panier from "../src/components/panier.vue";
export default {
  components: { panier },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
