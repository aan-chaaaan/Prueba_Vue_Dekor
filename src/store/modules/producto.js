export const productosModulo = {
  namespaced: true,
  state: {
    TodosLosProductos: [
      {
        nombre: "Cuadro foto",
        categoria: "Cuadros",
        tamaño: "30 x 30",
        oferta: false,
        descuento: 0,
        imagen:
          "https://images.unsplash.com/photo-1631927703420-38db43ca496c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
        precio: 15000,
      },
      {
        nombre: "Cuadro arte abstracto",
        categoria: "Cuadros",
        tamaño: "80 x 75",
        oferta: true,
        descuento: 20,
        imagen:
          "https://images.unsplash.com/photo-1632059412213-ccb49c4b0d01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        precio: 10000,
      },
      {
        nombre: "Plantas interior",
        categoria: "Plantas interior",
        tamaño: "60cm largo",
        oferta: false,
        descuento: 0,
        imagen:
          "https://images.unsplash.com/photo-1615050348898-5de3114abce0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80++",
        precio: 4200,
      },
      {
        nombre: "Silla oficina",
        categoria: "Sillas",
        tamaño: "90cm largo",
        oferta: false,
        descuento: 0,
        imagen:
          "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        precio: 60000,
      },
    ],
  },
  mutations:{
    NUEVO_PRODUCTO(state, nuevoProducto){
      state.push(nuevoProducto)
    }
  },
  // actions: {
  //   nuevoProducto(context, ){
  //     context.dispatch
  //   }
  // }
};
