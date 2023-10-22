let html = '';

products.forEach((product) => {
    html += `
    <div class="product-container">
        <div class="product">
        <div class="product-img">
        <img class="img" src="${product.image}" alt="">
        <div class="product-price">RS ${product.price}</div>
        <div class="add-to-wishlist">
            <button>
                <img class="wishlist-img" src="heart.svg" alt="">
            </button>
        </div>
    </div>

            
            <div class="button">
                <button class="cart-button
                js-button" data-product-name="${product.name}">Add to cart</button>
                
            </div>
        </div>
    </div>
     
    `

})
document.querySelector('.product-grid')
    .innerHTML = html;

document.querySelectorAll('.js-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;

        let matchingItem;

        cart.forEach((item) => {
            if (productName === item.productName) {
                matchingItem = item;
            }
        })
        if (matchingItem) {
            matchingItem.quantity += 1
        } else {
            cart.push({
                productName: productName,
                quantity: 1
            })
        }
        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity
        })
        console.log(cart);

        document.querySelector(`.js-muid`)
            .innerHTML = cartQuantity;
    })
})
let darktheme = document.querySelector(`.dark-theme`);
let nightmode = document.querySelector(`.night-mode-button`);
let sasBlack = document.querySelector('.sas-logo2');
let sasWhite = document.querySelector('.sas-logo');

nightmode.addEventListener(`click`, () => {
    if (darktheme.disabled) {
        darktheme.disabled = false
        sasBlack.style.display = 'block'
        sasWhite.style.display = 'none'
    }
    else {
        darktheme.disabled = true;
        sasWhite.style.display = 'block'
        sasBlack.style.display = 'none'
    }

})

