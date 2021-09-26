<template>
  <div class="container">
    <ProductoCarrito v-for="(producto, index) in $store.state.carrito.TodosLosProductos"
      :key="index"
      :producto="producto"></ProductoCarrito>
  </div>
</template>
<script>
// import Navbar from "../components/Navbar.vue";
import ProductoCarrito from "../components/ProductoCarrito.vue";

export default {
  components: { ProductoCarrito },
};
</script>
<style scoped>
button {
  width: 28px;
  height: 28px;
  margin: 10px;
  border-radius: 50%;
  padding: 1px;
}
</style>
