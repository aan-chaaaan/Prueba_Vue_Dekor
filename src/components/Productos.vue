<template>
  <div class="row row-cols-2 row-cols-md-2 g-4 mt-4">
    <div class="col">
      <div class="card">
        <img :src="producto.imagen" class="card-img-top" alt="image" />
        <div class="card-body">
          <h5 class="card-text text-center">{{ producto.nombre }}</h5>
          <p class="card-text">Categoria: {{ producto.categoria }}</p>
          <p class="card-text">Tamaño: {{ producto.tamaño }}</p>
          <p
            class="card-text"
            v-if="
              producto.oferta
                ? `${producto.descuento}%`
                : 'Este producto no tiene descuento'
            "
          >
            Descuento:
          </p>
          <p class="card-text">Precio: ${{ producto.precio }}</p>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            tenetur iure, nihil qui repudiandae.
          </p>
        </div>
      </div>
      <label>Cantidad del Producto:</label>
      <button type="button" class="btn btn-outline-info">+</button>
      <label>1</label>
      <button type="button" class="btn btn-outline-info">-</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Productos",
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
