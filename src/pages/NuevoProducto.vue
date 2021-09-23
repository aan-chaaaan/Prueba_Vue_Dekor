<template>
  <div>
    <Navbar></Navbar>
    <h3 class="text-center mb-4">CREAR NUEVO PRODUCTO</h3>
    <form @submit.prevent="CrearNuevoProducto" class="container">
      <div class="form group ms-3">
        <label>Nombre producto</label>
        <input
          type="text"
          class="form-control input_normal"
          required
          name="nombre"
          maxlength="50"
          minlength="8"
          v-model="producto.nombre"
        />
      </div>
      <div class="form group ms-3">
        <label>Foto URL</label>
        <input
          type="text"
          class="form-control input_normal"
          name="URL"
          required
          v-model="producto.imagen"
        />
      </div>
      <div class="form group ms-3">
        <label>Precio</label>
        <input
          type="number"
          min="100"
          max="100000"
          class="form-control input_normal"
          name="URL"
          required
          v-model="producto.precio"
        />
      </div>
      <div class="input-group mb-3 container mt-4">
        <label class="input-group-text" for="inputGroupSelect01"
          >Categoria</label
        >
        <select class="form-select" id="categoria" v-model="producto.categoria">
          <option selected>Elige..</option>
          <option value="1">Cuadros</option>
          <option value="2">Sillas</option>
          <option value="3">Plantas</option>
        </select>
      </div>
      <div class="input-group mb-3 container mt-5">
        <label class="input-group-text" for="inputGroupSelect01">Tamaño</label>
        <select
          class="form-select"
          id="inputGroupSelect01"
          v-model="producto.tamaño"
        >
          <option selected>Elige..</option>
          <option value="1">30x30</option>
          <option value="2">50x75</option>
          <option value="3">85x70</option>
        </select>
      </div>
      <div class="form-check mt-5 ms-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          v-model="producto.oferta"
          
        />
        <label class="form-check-label" for="flexCheckDefault" >
          Producto tiene oferta
        </label>
      </div>
      <div  class="input-group mb-3 container mt-3">
        <label  class="input-group-text" for="inputGroupSelect01"
          >Descuento</label
        >
        <select
          class="form-select"
          id="inputGroupSelect01"
          v-model="producto.descuento"
          
        >
          <option selected>Elige..</option>
          <option value="1">10%</option>
          <option value="2">20%</option>
          <option value="3">50%</option>
        </select>
      </div>
      <button type="submit" class="btn btn-info m-4 btn-lg">
        Crear producto
      </button>
    </form>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Productos",
  components: { Navbar },
  data: () => ({
    producto: {
      nombre: '',
      imagen: '',
      precio: '',
      categoria: null,
      tamaño: null,
      oferta: null,
    },
  }),
  methods: {
    CrearNuevoProducto() {
      this.$store.dispatch('producto/nuevoProducto', {...this.producto});
    },
  },
};
</script>
<style scoped>
.container {
  width: 700px;
}
.input_normal {
  width: 670px;
  margin-bottom: 20px;
}
button{
  height: 50px;
}
</style>
