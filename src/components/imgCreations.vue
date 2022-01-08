<template>
  <div class="mainPicture">
    <div v-if="costumerCart.length > 0">
      <h3>Panier</h3>
      <div v-for="item in costumerCart" :key="item.id">
        <p>
          {{ item.name }} prix:{{ item.price * item.quantity }} quantite:{{
            item.quantity
          }}
        </p>
      </div>
    </div>
  </div>
  <div id="vue-pictures">
    <!--<div class="fullPicture" v-for="picture in pictures" :key="picture.id">-->
    <div v-if="pictureFull" class="raw justifCenter itemsCenter">
      <img class="photo" :src="pictureFull.scr" alt="" />
      <div class="margin-10">
        <h2>{{ pictureFull.name }}</h2>
        <p>
          Dimension:{{ pictureFull.size }}cm <br />Materiaux : <br />
          Exterieur: {{ pictureFull.matExt }} || Fourrage:
          {{ pictureFull.matIn }} <br />Prix: {{ pictureFull.price }}€
        </p>
        <input
          type="button"
          value="Ajouter au panier"
          v-on:click="addToCart(pictureFull)"
        />
      </div>
      <!--</div>-->
    </div>
    <div class="raw containtScroll justifCenter">
      <div class="picture" v-for="picture in pictures" :key="picture.id">
        <img
          class="thumbnail margin-10"
          :src="picture.scr"
          alt=""
          v-on:click="fullImg(picture)"
        />
      </div>
    </div>
  </div>
</template>

<script>
//import { createApp } from "@vue/runtime-dom";

export default {
  name: "imgCreations",
  data() {
    return {
      pictures: [
        {
          id: 0,
          scr: require("@/assets/chats.jpg"),
          name: "chats",
          size: "15x20",
          price: 5,
          matExt: "coton",
          matIn: "duvet",
        },
        {
          id: 1,
          scr: require("@/assets/sac.jpg"),
          name: "sac",
          price: 10,
          matExt: "coton",
          matIn: "polaire",
          size: "30x20",
        },
        {
          id: 2,
          scr: require("@/assets/sapin.jpg"),
          name: "sapin",
          price: 15,
          matExt: "coton",
          matIn: "cellulose",
          size: "15x25",
        },
        {
          id: 3,
          scr: require("@/assets/grenouille.jpg"),
          name: "grenouille",
          price: 20,
          matExt: "cuir",
          matIn: "moustache",
          size: "25x20",
        },
      ],
      cart: null,
      pictureFull: null,
    };
  },
  created() {
    this.pictureFull = this.pictures[0];
    this.cart = this.$store.state.cart;
  },
  computed: {
    costumerCart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    fullImg(picture) {
      //picture.thumb = false;
      //this.pictures.map((p) => (p.full = false));
      //picture.full = true;
      this.pictureFull = picture;
    },
    addToCart(item) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.scr,
        quantity: 1,
      });
      this.$store.commit("setShoppingCart", this.cart);
    },
  },
};
</script>
<style scoped>
.thumbnail {
  max-width: 200px;
}
.photo {
  max-width: 600px;
}
.raw {
  display: flex;
  flex-direction: row;
}
.containtScroll {
  overflow: scroll;
}
.justifCenter {
  justify-items: center;
  justify-content: center;
}
.itemsCenter {
  align-content: center;
  align-items: center;
}
.margin-10 {
  margin: 10px;
}
</style>
