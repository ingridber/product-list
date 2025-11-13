
let url = 'https://fakestoreapi.com/products'

export async function getProducts() {

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error (console.log('getProducts Try Error: ', response.status));
        return await response.json();
    } catch (error) {

        console.log('getProducts catch Error: ', error.message);
    }
}
