<template>
  <div>
    <Navbar></Navbar>
    <BuscarProducto></BuscarProducto>
    <Productos
      v-for="(producto, index) in $store.state.producto.TodosLosProductos"
      :key="index"
      :producto="producto"
    ></Productos>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Productos from "../components/Productos.vue";
import BuscarProducto from "../components/BuscarProducto.vue";

export default {
  components: { Navbar, Productos, BuscarProducto },
};
</script>
<style scoped></style>
