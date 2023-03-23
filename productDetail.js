/** @format */
let product = localStorage.getItem("product");
product = JSON.parse(product);

const productDetailRoot = document.querySelector("#productDetailRoot");

console.log(product);

const htmlToRoot = `<div class="row">
<!-- Shirt image -->
<div class="col-6 col-md-5 img-div">
    <img
        id="image-src"
        src="${product.image}" />
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
    <input
        type="number"
        class="quantity form-control"
        value="1"
        min="1"
        max="5" />

    <a href="#" id="add-to-cart" class="btn btn-primary">Add to Cart</a>

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

const addToCart = document.getElementById("add-to-cart");