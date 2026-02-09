//import variables from "./module/basic";
const basic=require("./module/basic");
const es6=require("./module/es6");

/*console.log(basic.variables())
console.log(basic.x(89));
console.log(basic.arr());
console.log(es6.d({name:"helo",city:"ee"}))
console.log(es6.spread());
console.log(es6.rest());
console.log(es6.de(100,12));*/

const pro = require("./module/productMini");

console.log("All Products:", pro.getAllProducts());
pro.addProduct({ id: 3, name: "phone", price: 25000, stock: 5 });
console.log("After Add:", pro.getAllProducts());
console.log("Search", pro.searchProduct("lap"));
pro.updateProduct(2, { price: 3200 });
console.log("After Update:", pro.getAllProducts());
pro.deleteProduct(1);
console.log("After Delete:", pro.getAllProducts());
pro.addToCart(2, 2);
pro.addToCart(3, 1);
console.log("Cart Items:", pro.getCart());
console.log("Total Price:", pro.totalPrice());
console.log("After Discount:", pro.applyDiscount(10));