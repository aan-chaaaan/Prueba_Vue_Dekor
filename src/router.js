import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./pages/Home");
const Carrito = () => import("./pages/Carrito");
const NuevoPoducto = () => import("./pages/NuevoProducto");
const notFound = () => import("./pages/notFound");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/nuevoProducto",
      name: "nuevoProducto",
      component: NuevoPoducto,
    },
    {
      path: "/carrito-de-compras",
      name: "carrito",
      component: Carrito,
    },
    {
      path: "/*",
      name: "notFound",
      component: notFound,
    },
  ],
});
