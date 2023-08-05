var productService = {
    fetchProducts: function () {
      return axios({
        url: "https://643a191490cd4ba563f30d26.mockapi.io/products/profucts",
        method: "GET",
      });
    },
    createProduct: function (product) {
      return axios({
        url: "https://643a191490cd4ba563f30d26.mockapi.io/products/profucts",
        method: "POST",
        data:product
      });
    },

    deleteProduct: function (id) {
      return axios({
        url: "https://643a191490cd4ba563f30d26.mockapi.io/products/profucts/" + id,
        method: "DELETE", 
      });
    },

    fetchProductDetail: function (id) {
      return axios({
        url: "https://643a191490cd4ba563f30d26.mockapi.io/products/profucts/" + id,
        method: "GET",
      });
    },
    updateProduct: function (product) {
      return axios({
        url:
          "https://643a191490cd4ba563f30d26.mockapi.io/products/profucts/" +
          product.id,
          method: "PUT",
        // request body => POST, PUT, PATCH
        data: product,
      });
    },
  };
  