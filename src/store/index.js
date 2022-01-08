import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    setShoppingCart(state, newCart) {
      state.cart = newCart;
      console.log(state.cart);
    },
  },
  actions: {},
  modules: {},
});
