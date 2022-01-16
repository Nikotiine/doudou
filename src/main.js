import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueperSlides, VueperSlide } from "vueperslides";
//createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
library.add(fas);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(VueperSlide, VueperSlides)
  .use(router)
  .mount("#app");
