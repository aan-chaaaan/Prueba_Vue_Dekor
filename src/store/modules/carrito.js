export const carritoModulo = {
  namespaced: true,
  state: {
    TodosLosProductos: []
  },
  mutations:{
    PRODUCTO_AL_CARRITO(state, unProductoAlCarrito){
      state.TodosLosProductos.push(unProductoAlCarrito)
    }
  },
  actions:{
     NuevoProductoAlCarrito(context, producto){
       /* eslint-disable */
      const { stock,...unProductoAlCarrito } = producto
      context.commit("PRODUCTO_AL_CARRITO", {...unProductoAlCarrito, cantidad: 1});
    }
    
  }
};
