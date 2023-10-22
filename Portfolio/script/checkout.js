let checkoutProducts='';
const cart=[{
    img: "images/prime.webp",
    name:"PRIME HYDRATION DRINK",
    quantity: 1
}
];


cart.forEach((cartItem) => {
const productName=cartItem.productName;
let matchingItem;
   
 products.forEach((product)=>{
   

    if(product.name === cartItem.name){
      matchingItem=product;
    }

;

  })
    checkoutProducts+=`
        <div class="cart-product">
            <div class="img">
                <img class="product-img" src="${matchingItem.image}" alt="">
            </div>
            <div class="name">
               ${matchingItem.name}
            </div>
            <div class="quantity">
                <select name="quantity" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>
            </div>
            <div class="price">180.00</div>
        </div>
        `
document.querySelector('.cart-main').innerHTML=checkoutProducts
})