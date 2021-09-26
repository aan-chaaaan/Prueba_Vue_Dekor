export const productosModulo = {
  namespaced: true,
  state: {
    busqueda: "",
    TodosLosProductos: [
      {
        nombre: "Cuadro foto",
        categoria: "Cuadros",
        tamaño: "Mediano",
        stock: 20,
        oferta: false,
        descuento: 0,
        imagen:
          "https://images.unsplash.com/photo-1631927703420-38db43ca496c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
        precio: 15000,
      },
      {
        nombre: "Cuadro arte abstracto",
        categoria: "Cuadros",
        tamaño: "Grande ",
        stock: 20,
        oferta: true,
        descuento: 20,
        imagen:
          "https://images.unsplash.com/photo-1632059412213-ccb49c4b0d01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        precio: 10000,
      },
      {
        nombre: "Plantas interior",
        categoria: "Plantas interior",
        tamaño: "Pequeño",
        stock: 20,
        oferta: false,
        descuento: 0,
        imagen:
          "https://images.unsplash.com/photo-1615050348898-5de3114abce0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80++",
        precio: 4200,
      },
      {
        nombre: "Silla oficina",
        categoria: "Sillas",
        tamaño: "Mediano",
        stock: 20,
        oferta: false,
        descuento: 0,
        imagen:
          "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        precio: 60000,
      },
    ],
  },
  getters: {
    // ProductosBusqueda(state) {
    //   if (state.busqueda === "") {
    //     return {};
    //   } else {
    //     return state.TodosLosProductos.filter(
    //       (producto) =>
    //         producto.nombre
    //           .toLowerCase()
    //           .includes(state.busqueda.toLowerCase()) ||
    //         producto.categoria
    //           .toLowerCase()
    //           .includes(state.busqueda.toLowerCase()) ||
    //         producto.tamaño
    //           .toLowerCase()
    //           .includes(state.busqueda.toLowerCase()) ||
    //         producto.oferta.toLowerCase().includes(state.busqueda.toLowerCase())
    //     );
    //   }
    // },
  },
  mutations: {
    NUEVO_PRODUCTO(state, nuevoProducto) {
      state.TodosLosProductos.push(nuevoProducto);
    },
    // BUSQUEDA_PRODUCTO(state, nuevaBusqueda) {
    //   state.busqueda = nuevaBusqueda;
    // },
    

  },
  actions: {
    nuevoProducto(context, nuevoProducto) {
      context.commit("NUEVO_PRODUCTO", nuevoProducto);
    },
    // busquedaProducto(context, nuevaBusqueda) {
    //   if (typeof nuevaBusqueda === "string") {
    //     context.commit("BUSQUEDA_PRODUCTO", nuevaBusqueda);
    //     // } else {
    //     //   console.warn(
    //     //     `nueva busqueda debiese de ser de tipo string y recibir un tipo ${typeof nuevaBusqueda}`
    //     //   );
    //   }
    // },
    
  },
};
