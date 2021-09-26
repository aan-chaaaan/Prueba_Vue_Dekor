export const busquedaModulo = {
  namespaced: true,
  state: {
    TodosLosProductos: [],
  },
  getters: {
    ProductosBusqueda(state) {
      if (state.busqueda === "") {
        return [];
      } else {
        return state.TodosLosProductos.filter(
          (producto) =>
            producto.nombre
              .toLowerCase()
              .includes(state.busqueda.toLowerCase()) ||
            producto.categoria
              .toLowerCase()
              .includes(state.busqueda.toLowerCase()) ||
            producto.tamaño
              .toLowerCase()
              .includes(state.busqueda.toLowerCase()) ||
            producto.oferta.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
  },
  mutations: {
    BUSQUEDA_PRODUCTO(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
    },
  },
  busquedaProducto(context, nuevaBusqueda) {
    if (typeof nuevaBusqueda === "string") {
      context.commit("BUSQUEDA_PRODUCTO", nuevaBusqueda);
      // } else {
      //   console.warn(
      //     `nueva busqueda debiese de ser de tipo string y recibir un tipo ${typeof nuevaBusqueda}`
      //   );
    }
  },
};
