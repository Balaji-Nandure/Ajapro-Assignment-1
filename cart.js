/** @format */

const cartTbody = document.getElementById("cart-tbody");

// Render the cart
function renderCart() {
    cartTbody.innerHTML = "";
    cart.forEach((product, index) => {
        const trToRender = `<tr>
      <th class="text-start align-middle" scope="row">
        <a class="remove-button" id="remove-button-${index}" href="#"><b>Delete</b></a>
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
            calculateTotal();
        });
    });
}

renderCart();

/* ------------------ Calculate and update the total price ------------------ */
const placeOrderButton = document.querySelector(".place-order");
const totalAmount = document.querySelector(".total-amount");

function calculateTotal() {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let subtotal = item.quantity * item.price;
        sum += subtotal;
    }

    console.log("total = " + sum);

    if (cart.length != 0) {
        return (totalAmount.innerHTML = `Total amount: ₹${sum}`);
    } else {
        totalAmount.innerHTML = "No items in your cart.";
        placeOrderButton.style.display = "none";
        renderNavbat();
        return;
    }
}

calculateTotal();

/* --------------- Place the order button click functionality --------------- */
const cartTable = document.querySelector(".cart-table");
placeOrderButton.addEventListener("click", () => {
    alert(
        "Your order has been successfully placed and will be processed shortly. We will send you a confirmation email with your order details."
    );
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    if (cart.length == 0) {
        placeOrderButton.style.display = "none";
        cartTable.style.display = "none";
    }

    calculateTotal();
    renderCart();
    renderNavbat();
    renderTotalItems();
});
