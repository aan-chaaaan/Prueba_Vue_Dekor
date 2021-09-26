<template>
  <div class="row g-4 mt-2 justify-content-center">
    <div class="col-lg-6">
      <div class="card">
        <img :src="producto.imagen" class="card-img-top" alt="image" />
        <div class="card-body">
          <h5 class="card-text text-center">{{ producto.nombre }}</h5>
          <p class="card-text">Categoria: {{ producto.categoria }}</p>
          <p class="card-text">Tamaño: {{ producto.tamaño }}</p>
          <p class="card-text">
            Descuento:
            {{
              producto.oferta
                ? `${producto.descuento}%`
                : "Este producto no tiene descuento"
            }}
          </p>
          <p class="card-text">Precio: ${{ producto.precio }}</p>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            tenetur iure, nihil qui repudiandae.
          </p>
        </div>
        <button type="button" class="btn btn-dark" @click="AgregarProductoCarrito">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Productos",
  props: {
    producto: { type: Object, required: true },
  },
  methods:{
    AgregarProductoCarrito(){
      this.$store.dispatch("carrito/NuevoProductoAlCarrito")
    }
  }
};
</script>
<style scoped>
.container {
  width: 2500px;
  margin-left: 1000px;
}
</style>
