<template>
  <img src="@/assets/Sewing-icon.svg.png" alt="" class="logo" />
  <span v-if="costumerCart.length > 0" class="txt-red">{{
    totalQuantity
  }}</span>
</template>

<script>
export default {
  name: "panier",
  computed: {
    totalQuantity() {
      return this.$store.state.cart.reduce((a, b) => a + b.quantity, 0);
    },
    costumerCart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.logo {
  max-width: 100px;
  max-height: 50px;
}
.txt-red {
  color: red;
}
</style>
