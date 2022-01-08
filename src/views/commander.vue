<template>
  <div>
    <h1>Resumé de votre commande</h1>
  </div>
  <shopping />
</template>

<script>
import shopping from "../components/shopping-cart.vue";

export default {
  name: "commmander",
  components: { shopping },
};
</script>

<style scoped></style>
