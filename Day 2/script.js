const frenchFries = {
    name: 'French Fries with Ketchup',
    price: '2.23',
    image: 'images/plate__french-fries.png'
};

const cartItems = document.getElementById("cart-items")
const menuFries = document.getElementById("menu-fries")
menuFries.addEventListener("click", AddItem(frenchFries))


function AddItem(menuItem) {
    cartItems.innerHTML += GetCartItemHTML(menuItem)
}

function GetCartItemHTML(menuItem) {
    // <div class="cart-item">
    //     <img class="cart-item-image" src="images/plate__french-fries.png" />
    //     <div class="cart-item-qty">2</div>
    //     <div class="cart-item-data">
    //         <div class="cart-item-name">French Fries with Ketchup</div>
    //         <div class="cart-item-price">$2.23</div>
    //         <div class="cart-item-menu">
    //             <button class="cart-item-btn">
    //                 <img src="images/chevron.svg" />
    //             </button>
    //             <div class="cart-item-menu-qty">2</div>
    //             <button class="cart-item-btn">
    //                 <img class="flip" src="images/chevron.svg" />
    //             </button>
    //             <div class="cart-item-total">$4.46</div>
    //         </div>
    //     </div>
    // </div>
    return `<div class="cart-item">
                <img class="cart-item-image" src="${menuItem.image}" />
                <div class="cart-item-qty">1</div>
                <div class="cart-item-data">
                    <div class="cart-item-name">${menuItem.name}</div>
                    <div class="cart-item-price">$${menuItem.price}</div>
                    <div class="cart-item-menu">
                        <button class="cart-item-btn">
                            <img src="images/chevron.svg" />
                        </button>
                        <div class="cart-item-menu-qty">1</div>
                        <button class="cart-item-btn">
                            <img class="flip" src="images/chevron.svg" />
                        </button>
                        <div class="cart-item-total">$4.46</div>
                    </div>
                </div>
            </div>`
}