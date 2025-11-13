import { getProducts } from "../services/api.js";


export async function extractProduct() {
    let data = await getProducts();

    for (let item of data) {
        let card = new ProductCard(item);
    };

};

class ProductCard {

    constructor(product) {
        this.productList = document.getElementById('product-list');
        this.productCard = document.createElement('div');
        this.productCard.classList.add('product-card');
        this.productList.appendChild(this.productCard);

        this.img = product.image,
        this.title = product.title,
        this.price = product.price,
        this.category = product.category,
        this.description = product.description,

        this.active = false

        this.productCard.addEventListener('click', () => {
            if (!this.active) {
                this.productCard.replaceChildren("")
                this.showProductCardInfo();
                this.active = true;
            } else {
                this.productCard.replaceChildren("")
                this.showProductCard();
                this.active = false;
            }
        })

        this.showProductCard();
    }

    showProductCard() {
        let img = document.createElement('img');
        img.classList.add('product-img');
        img.src = this.img;
    
        let title = document.createElement('h2');
        title.classList.add('product-title')
        title.textContent = this.title;
    
        let price = document.createElement('p');
        price.classList.add('product-price');
        price.textContent = this.price;
    
        this.productCard.appendChild(img);
        this.productCard.appendChild(title);
        this.productCard.appendChild(price);
    };

    showProductCardInfo() {
        let title = document.createElement('h2');
        title.classList.add('product-title');
        title.textContent = this.title;

        let category = document.createElement('h3');
        category.classList.add('product-category');
        category.textContent = this.category;

        let description = document.createElement('p');
        description.classList.add('product-description');
        description.textContent = this.description;

        this.productCard.appendChild(title);
        this.productCard.appendChild(category);
        this.productCard.appendChild(description);
    }
}


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
