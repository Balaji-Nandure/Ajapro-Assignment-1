/** @format */
let product = localStorage.getItem("product");
product = JSON.parse(product);

const productDetailRoot = document.querySelector("#productDetailRoot");

console.log(product);

const htmlToRoot = `<div class="row">
    <!-- Shirt image -->
    <div class="col-6 col-md-5 img-div">
        <img id="image-src" src="${product.image}" />
    </div>
    <!-- Shirt description -->
    <div class="pt-4 col-6 col-md-7 shirt-detail-text">
        <h3 id="productName">${product.title}</h3>
        <h2 id="productPrice">Price : ₹${product.price}</h2>
        <select
            class="form-select"
            aria-label="Default select example">
            <option selected>Select size</option>
            <option value="s">Small (S)</option>
            <option value="m">Medium (M)</option>
            <option value="l">Large (L)</option>
            <option value="xl">Extra Large (Xl)</option>
            <option value="xxl">Extra Extra Large (Xl)</option>
        </select>

        <button type="button" class="dec btn btn-outline-secondary">
            -
        </button>       
        <input
            type="number" 
            readonly
            id="quantity"
            class="text-center quantity form-control"
            value="1"
            min="1"
            max="5" />
        <button type="button" class="inc btn btn-outline-secondary">
            +
        </button>

        <br />

        <a  href="#">
            <button id="buy-now" class="mt-2 btn btn-success">Buy Now</button>
        </a>
        <a href="#" id="add-to-cart" class="mt-2 btn btn-primary"
            >Add to Cart</a
        >

        <h5 class="mt-3">
            <b class="d-block">Product Description :-</b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore, amet. Veniam, aliquid eum, itaque minus
            voluptates ipsam harum, quam illum hic quia tenetur
            veritatis. Quae corrupti ipsam esse reiciendis non.
        </h5>
    </div>
    </div>`;
productDetailRoot.innerHTML = htmlToRoot;

/* --------------------------- Cart Functionality --------------------------- */
const quantity = document.getElementById("quantity");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const addToCart = document.getElementById("add-to-cart");
const buyNow = document.querySelector("#buy-now");

const increaseQuantity = function () {
    if (quantity.value < 5) {
        quantity.value++;
    }
};
const decreaseQuantity = function () {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

inc.addEventListener("click", increaseQuantity);
dec.addEventListener("click", decreaseQuantity);
const bootstrapalert = function (classname, msg) {
    // It means product is already in the cart
    const alert = document.createElement("div");
    alert.classList.add(
        "alert",
        `alert-${classname}`,
        "alert-dismissible",
        "fade",
        "show",
        "animate__animated",
        "animate__ease-in-out"
    );

    alert.innerHTML = `
    <div class="container">${msg}</div>
    `;

    document.body.insertBefore(alert, document.body.firstChild);

    // for hiding the alert after some time
    setTimeout(() => {
        alert.classList.remove("show");
        document.body.removeChild(alert);
    }, 1000);
};

const addToCartClick = function () {
    const cartItem = {
        ...product,
        quantity: quantity.value,
    };

    const existingIndex = cart.findIndex(
        (item) => item.productId === cartItem.productId
    );

    if (existingIndex !== -1) {
        bootstrapalert("warning", "Product is already in the cart");
    } else {
        // adding product to the localstorage cart
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
        bootstrapalert("success", "Product Successfully added to the cart");

        // for updating the cart button red badge numver
        totalCartItems.innerText = cart.length;
    }
};
addToCart.addEventListener("click", addToCartClick);

const buyNowBtnClick = function () {
    const cartItem = {
        ...product,
        quantity: quantity.value,
    };

    const existingIndex = cart.findIndex(
        (item) => item.productId === cartItem.productId
    );

    if (existingIndex === -1) {
        // adding product to the localstorage cart
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
        // bootstrapalert("success", "Product Successfully added to the cart");
        // for updating the cart button red badge numver
        totalCartItems.innerText = cart.length;
    }
};
buyNow.addEventListener("click", () => {
    buyNowBtnClick();
    window.location.href = "./cart.html";
});
