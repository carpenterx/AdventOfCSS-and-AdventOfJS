const frenchFries = {
    name: 'French Fries with Ketchup',
    price: '2.23',
    image: 'images/plate__french-fries.png'
};
const salmonVegetables = {
    name: 'Salmon and Vegetables',
    price: '5.12',
    image: 'images/plate__salmon-vegetables.png'
};
const spaghetti = {
    name: 'Spaghetti with Meat Sauce',
    price: '7.82',
    image: 'images/plate__spaghetti-meat-sauce.png'
};

var itemsInCart = {}

const cartItems = document.getElementById("cart-items")
const emptyCart = document.getElementById("empty-cart")
const menuFries = document.getElementById("menu-fries")
const menuSalmon = document.getElementById("menu-salmon")
const menuSpaghetti = document.getElementById("menu-spaghetti")

const totalContainer = document.getElementById("total-container")

menuFries.onclick = function () {
    HideEmptyCart()
    AddItem(frenchFries);
    DisableButton(menuFries)
}

menuSalmon.onclick = function () {
    HideEmptyCart()
    AddItem(salmonVegetables);
    DisableButton(menuSalmon)
}

menuSpaghetti.onclick = function () {
    HideEmptyCart()
    AddItem(spaghetti);
    DisableButton(menuSpaghetti)
}

function AddItem(menuItem) {
    itemsInCart[menuItem] = 1
    cartItems.innerHTML += GetCartItemHTML(menuItem)
}

function GetCartItemHTML(menuItem) {
    return `<div class="cart-item">
                <img class="cart-item-image" src="${menuItem.image}" />
                <div class="cart-item-qty">1</div>
                <div class="cart-item-data">
                    <div class="cart-item-name">${menuItem.name}</div>
                    <div class="cart-item-price">${menuItem.price}</div>
                    <div class="cart-item-menu">
                        <button class="cart-item-btn">
                            <img src="images/chevron.svg" />
                        </button>
                        <div class="cart-item-menu-qty">1</div>
                        <button onclick="" class="cart-item-btn">
                            <img class="flip" src="images/chevron.svg" />
                        </button>
                        <div class="cart-item-total">${menuItem.price}</div>
                    </div>
                </div>
            </div>`
}

function IncreaseQty(menuItem)
{
    UpdateQty(menuItem, itemsInCart[menuItem]+1)
}

function UpdateQty(menuItem, newValue) {
    itemsInCart[menuItem] = newValue
}

function DisableButton(menuButton) {
    menuButton.classList.remove("menu-item-button")
    menuButton.classList.add("in-cart-button")
    menuButton.innerHTML = '<img class="button-icon" src="images/check.svg"></img>In Cart'
}

function EnableButton()
{
    menuButton.classList.add("menu-item-button")
    menuButton.classList.remove("in-cart-button")
    menuButton.innerHTML = "Add to Cart"
}

function ShowEmptyCart()
{
    emptyCart.classList.remove("hide")
    cartItems.classList.add("hide")
    totalContainer.classList.add("hide")
}

function HideEmptyCart()
{
    emptyCart.classList.add("hide")
    cartItems.classList.remove("hide")
    totalContainer.classList.remove("hide")
}