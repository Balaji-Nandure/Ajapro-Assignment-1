/** @format */
/* ---------------------------------- Modal --------------------------------- */
const products = [
    {
        productId: 0,
        image: "https://rukminim1.flixcart.com/image/612/612/l27wtjk0/shirt/j/u/b/m-wnsh0015-wrogn-original-imagdmfjaeauzuzg.jpeg?q=70",
        title: "Shirt 1",
        price: 1281,
    },
    {
        productId: 1,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/8/8/g/m-wnsh2492-wrogn-original-imaghucpgzwdqzt7.jpeg?q=70",
        title: "Shirt 2",
        price: 1314,
    },
    {
        productId: 2,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/c/n/i/xxl-st10-vebnor-original-imagmtfju8vttgzf.jpeg?q=70",
        title: "Shirt 3",
        price: 914,
    },
    {
        productId: 3,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/f/n/r/m-wmsh0043-wrogn-original-imagg9xm5jnxygwf.jpeg?q=70",
        title: "Shirt 4",
        price: 814,
    },
];

/* ------------------------- render data dynamically ------------------------ */

// Element Selector
const cardsInIndex = document.querySelectorAll(".cardInIndex");
const cartBtn = document.getElementById("cart-btn");
const totalCartItems = document.getElementById("total-cart-items");

const renderTotalItems = function () {
    if (localStorage.getItem("cart")) {
        totalCartItems.innerText = JSON.parse(
            localStorage.getItem("cart")
        ).length;
    }
};

renderTotalItems();

let cart;
const locallyStoredCart = localStorage.getItem("cart");
if (locallyStoredCart) {
    cart = JSON.parse(locallyStoredCart);
    console.log(cart);
} else {
    cart = [];
}

cartBtn.addEventListener("click", () => {
    window.location.href = "./cart.html";
    if (cart.length == 0) {
        placeOrderButton.style.display = "none";
        cartTable.style.display = "none";
    }
});

// console.log(cartBtn);

const renderNavbat = function () {
    cardsInIndex.forEach((cardInIndex) => {
        cardInIndex.addEventListener("click", () => {
            const clickedCardId = cardInIndex.id;
            products.map((product) => {
                if (product.productId == clickedCardId) {
                    console.log(product);
                    localStorage.setItem("product", JSON.stringify(product));
                    window.location.href = "./productDetail.html";
                }
            });
        });
    });
};

renderNavbat();
