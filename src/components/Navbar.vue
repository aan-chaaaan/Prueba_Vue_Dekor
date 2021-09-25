<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top"
      style="background-color: #e3f2fd"
    >
      <img src="icon.png" alt="icon" class="ms-2" />
      <a class="navbar-brand p-2" href="#">Dekor</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/carrito-de-compras" class="nav-link"
              >Carrito</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/nuevoProducto" class="nav-link"
              >Nuevo producto</router-link
            >
          </li>
          <router-view></router-view>
        </ul>
        <form
          class="d-flex justify-content-end"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Busca un producto"
            aria-label="Search"
            :value="$store.state.busqueda"
            @input="
            $store.dispatch('busquedaProducto', $event.target.value)"
          />
          <button class="btn btn-outline-success" type="button" @click="buscarProducto">Buscar</button>
          
        </form>
        <Productos
            v-if="$store.getters.ProductosBusqueda.length > 0"
            :producto="$store.getters.ProductosBusqueda"
          />
          <ul v-else>
            <li>Escribe algo para buscar</li>
          </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    buscarProducto() {
      this.$store.dispatch("producto/nuevaBusqueda", { ...this.producto });
    },
  },
};
</script>
