
var checkProductList = new Array();

productService.fetchProducts()
.then(function (response) {

 checkProductList = response.data;

})
.catch(function (error) {
  console.log("Error", error);
});


function createProduct() {
  if (!validationForm("nameProduct", "priceProduct", "screenProduct",
    "backCamera", "frontCamera", "imgProduct", "descProduct", "typeProduct"))
    {
     
      return
    };
  var id;
  var name = document.getElementById("nameProduct").value.trim();
  var price = document.getElementById("priceProduct").value.trim();
  var screen = "screen " + document.getElementById("screenProduct").value.trim();
  var backCamera = document.getElementById("backCamera").value.trim();
  var frontCamera = document.getElementById("frontCamera").value.trim();
  var img = document.getElementById("imgProduct").value.trim();
  var desc = document.getElementById("descProduct").value.trim();
  var type = document.getElementById("typeProduct").value.trim();





  for (var i = 0; i < checkProductList.length; i++) {
    var checkName = checkProductList[i].name;
    if (checkName.toLowerCase() === name.toLowerCase()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tên sản phẩm này đã tồn tại',
        
      })
      return;
    }

  }


  var product = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );

  let promise = productService.createProduct(product);
  promise
    .then(function (response) {
      Swal.fire({
        title: 'Thêm sản phẩm thành công',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok!!!'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = '../../admin.html';
        }
      })

    })
    .catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
    .finally(function () {

    })


}

document.getElementById('addBtn').onclick = createProduct;
//dcgdgcgdscgsdg