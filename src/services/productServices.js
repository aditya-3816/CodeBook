export async function getProductList(searchQuery) {

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchQuery ? searchQuery : ""}`);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    }
    const data = await response.json();
    return data;
}

export async function getProduct(id) {

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();
    return data;
}

export async function getFeaturedList() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();
    return data;
}