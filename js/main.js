import { extractProduct, searchProducts } from "./components/productCard.js";

extractProduct()

const searchInput = document.querySelector(".search");
searchInput.addEventListener('change', () => {
    searchProducts(searchInput.value);
    searchInput.value = "";
})
