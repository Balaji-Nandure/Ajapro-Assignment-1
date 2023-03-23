/** @format */

const cartTbody = document.getElementById("cart-tbody");

// Render the cart
function renderCart() {
    cartTbody.innerHTML = "";
    cart.forEach((product, index) => {
        const trToRender = `<tr>
      <th class="text-center align-middle" scope="row">
        <a id="remove-button-${index}" href="#"><i class="bi bi-x-circle"></i></a>
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

        // Add event listener to remove button
        const removeButton = document.getElementById(`remove-button-${index}`);
        removeButton.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });
    });
}

renderCart();
