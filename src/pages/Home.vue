<template>
  <div>
    <Navbar></Navbar>
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

export default {
  components: { Navbar, Productos },
};
</script>
<style scoped></style>
