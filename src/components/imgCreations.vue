<template>
  <div
    v-if="pictureFull"
    class="raw justifCenter itemsCenter b-s-0052green bd-s-1 fit-content ma-auto bg-black"
  >
    <img class="photo" :src="pictureFull.scr" alt="" />
    <div class="ma-10 txt-white">
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
  <div class="wi-68 ma-auto ma-top-20">
    <vueper-slides
      class="no-shadow"
      :visible-slides="4"
      :gap="3"
      slide-multiple="true"
      :slide-ratio="1 / 2"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide
        v-for="picture in pictures"
        :key="picture"
        :image="picture.scr"
        v-on:click="fullImg(picture)"
        class="bd-s-1"
      />
    </vueper-slides>
  </div>
</template>

<script>
//import { createApp } from "@vue/runtime-dom";
//import panier from "../components/panier.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "imgCreations",
  components: { VueperSlides, VueperSlide },
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
        {
          id: 3,
          scr: require("@/assets/grenouille.jpg"),
          name: "grenouille",
          price: 20,
          matExt: "cuir",
          matIn: "moustache",
          size: "25x20",
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
.thumbnails {
  margin: 15px auto;
  max-width: 200px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
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
.itemLeft {
  align-items: flex-start;
}
.ma-10 {
  margin: 10px;
}
.ma-auto {
  margin: auto;
}
.ma-top-20 {
  margin-top: 20px;
}
.bg-black {
  background: rgb(0, 0, 0);
}
.txt-white {
  color: white;
}
.b-s-0052green {
  box-shadow: 0 0 5px 2px #42b983;
}
.bd-s-1 {
  border: 1px solid black;
}
.fit-content {
  width: fit-content;
}
.wi-68 {
  width: 68%;
}
.fa-angle-double-right {
  height: 5em;
  font-size: 35px;
}
.fa-angle-double-left {
  height: 5em;
  font-size: 35px;
}
</style>
