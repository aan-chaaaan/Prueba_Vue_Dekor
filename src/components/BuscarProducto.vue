<template>
  <form class="d-flex m-5 form_search justify-content-center">
    <input
      class="form-control me-2 form_search"
      type="text"
      placeholder="Busca un producto"
      aria-label="Search"
      :value="$store.state.busqueda"
      @input="
      $store.dispatch('busquedaProducto', $event.target.value)
      "
    />
    <button
      class="btn btn-outline-success"
      type="button"
    >
      Buscar
    </button>
    <!-- <Productos
      v-if="$store.getters.ProductosBusqueda.length > 0"
      :producto="$store.getters.ProductosBusqueda"
    />
    <ul v-else>
      <li>Escribe algo para buscar</li>
    </ul> -->
  </form>
</template>
<script>
// import Productos from "../components/Productos.vue";
export default {
  name: "BuscarProducto",
  // components: {Productos},
  methods: {
    // buscarProducto() {
    //   this.$store.dispatch("producto/nuevaBusqueda", { ...this.producto });
    // },
  },
  
};
</script>
<style scoped>
.form_search {
  width: 500px;
}
</style>
