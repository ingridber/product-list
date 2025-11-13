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