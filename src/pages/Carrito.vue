<template>
  <div class="container">
    <Navbar></Navbar>
    <h3 class="text-center">Carrito de compras</h3>
    <h5>Producto:</h5>
    <h5>Total:</h5>
    <label>Cantidad del Producto:</label>
    <button type="button" class="btn btn-outline-info">+</button>
    <label>1</label>
    <button type="button" class="btn btn-outline-info">-</button>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
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
