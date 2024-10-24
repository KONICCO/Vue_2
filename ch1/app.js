// const product = {
//   max: "50",
//   products: [
//     {
//       id: "532",
//       name: "Slicker Jacket",
//       description:
//         "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
//       price: "25",
//       image_title: "slicker-jacket_lynda_29941",
//       image:
//         "https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user-thumbnail.png",
//     },
//     {
//       id: "532",
//       name: "Slicker Jacket",
//       description:
//         "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
//       price: "125",
//       image_title: "slicker-jacket_lynda_29941",
//       image:
//         "https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user-thumbnail.png",
//     },
//   ],
// };

// var app = new Vue({
//   el: "#app",
//   data: product,
// });

// api fetch
var app = new Vue({
  el: "#app",
  data: {
    max: 50,
    products: null,
    cart: [],
  },
  //   fetch
//   mounted: function () {
//     fetch("https://hplussport.com/api/products/order/price")
//       .then((response) => response.json())
//       .then((data) => {
//         this.products = data;
//       });
//   },
  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => (this.products = data));
  },
  methods: {
    addItem: function (produk) {
        this.cart.push(produk)
    }
    
  },
});
