/** @format */

const cartTbody = document.getElementById("cart-tbody");
cartTbody.innerHTML = "";
// console.log(cart);

cart.forEach((product) => {
    // console.log(product);
    const trToRender = `<tr>
    <th class="text-center align-middle" scope="row">
        <a id="remove-button" href="#"><i class="bi bi-x-circle"></i></a>
    </th>
    <td class="align-middle">
        <img
            class="cart-img"
            src="${product.image}"
            alt="Shirt Photo" />
    </td>
    <td class="align-middle">${product.title}</td>
    <td class="align-middle">₹${product.price}</td>
    <td class="align-middle">${product.quantity}</td>
    <td class="align-middle">₹${product.quantity * product.price}</td>
    </tr>`;

    cartTbody.innerHTML += trToRender;
});

/* --------------------- Remove from cart functionality --------------------- */
const removeButton = document.getElementById("remove-button");
console.log(removeButton);

removeButton.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const removeIndex = cart.findIndex(
        (item) => item.productId === "product-1"
    );

    if (removeIndex !== -1) {
        cart.splice(removeIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
});
