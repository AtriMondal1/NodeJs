let products=[
    { id:1,name:"laptop",price:78900,stock:10},
    { id:2,name:"watch",price:2900,stock:12}
];
let cart = [];

const getAllProducts=()=>products;

const addProduct=(newp) => {
    products=[...products, newp];
    return products;
};

const searchProduct=(keyword)=>{
    const k=keyword.toLowerCase();
    return products.filter(p=>p.name.toLowerCase().includes(k)
    );
};

const updateProduct=(id,data={})=>{
    products=products.map(p=>p.id===id?{...p,...data}:p
    );
    return products;
};

const deleteProduct=(id)=>{
    products=products.filter(p=>p.id!==id);
    return products;
};

const addToCart=(id,qty=1)=>{
    const product=products.find(p=>p.id===id);
    if (!product) return "Product not found";
    if (product.stock<qty) return "Not enough stock";
    cart.push({...product,qty});
    product.stock-=qty;
    return cart;
};

const getCart=()=>cart;

const totalPrice=()=>{
    return cart.reduce((sum,item)=>
        sum + item.price * item.qty,0
    );
};

const applyDiscount=(discount=10)=> {
    const total=totalPrice();
    return total-(total*discount)/100;
};

const clearCart=()=>{
    cart=[];
};

module.exports = {
    getAllProducts,
    addProduct,
    searchProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    getCart,
    totalPrice,
    applyDiscount,
    clearCart
};
