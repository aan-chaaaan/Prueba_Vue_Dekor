import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { carritoModulo } from "./modules/carrito";
import { productosModulo } from "./modules/producto";

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    carrito: carritoModulo,
    producto: productosModulo,
  },
});

export default store;
