<template>
  <div class="container">
    <Navbar></Navbar>
    <h3>Carrito de compras</h3>
      <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="producto.imagen"
            class="img-fluid rounded-start"
            alt="image"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>  
            <p class="card-text">{{ producto.precio }}</p>
          </div>
        </div>
      </div>
    </div>
    <label>Cantidad del Producto:</label>
    <button type="button" class="btn btn-outline-info">+</button>
    <label>1</label>
    <button type="button" class="btn btn-outline-info">-</button>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "ProductoCarrito",
  components: { Navbar},
  props: {
    producto: { type: Object, required: true },
  },
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