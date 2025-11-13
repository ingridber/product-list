import { getProducts } from "../services/api.js";


export async function extractProduct() {
    let data = await getProducts();

    for (let item of data) {
        productCard(item);
    };

};


export function productCard(product) {

    let productItem = document.createElement('div');
    productItem.classList.add('product-card');


    let img = document.createElement('img');
    img.classList.add('product-img');
    img.src = product.image;

    let title = document.createElement('h2');
    title.classList.add('product-title')
    title.textContent = product.title;

    let price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = product.price;

    productItem.appendChild(img);
    productItem.appendChild(title);
    productItem.appendChild(price);


    let productList = document.getElementById('product-list');
    productList.appendChild(productItem);

};

export function searchProducts(searchInput) {

    const productList = document.getElementById('product-list');
    let cards = productList.querySelectorAll(".product-card");

    for (let card of cards) {
        let title = card.querySelector(".product-title")
        if (!title.textContent.toLowerCase().includes(searchInput.toLowerCase())) {
            card.classList.add("hide-card");
        }
    }

    const clearFilterButton = document.createElement("button");
    clearFilterButton.classList.add("clear-filter-button");
    clearFilterButton.textContent = "Clear Filter";
    clearFilterButton.addEventListener('click', showAllProducts);

    const inputBox = document.querySelector(".input-div");
    inputBox.appendChild(clearFilterButton);
}

function showAllProducts() {

    const productList = document.getElementById('product-list');
    let cards = productList.querySelectorAll(".product-card");

    for (let card of cards) {
        card.classList.remove("hide-card");
    }

    const inputBox = document.querySelector(".input-div");
    const filterButton = inputBox.querySelector("button");
    inputBox.removeChild(filterButton)
}
