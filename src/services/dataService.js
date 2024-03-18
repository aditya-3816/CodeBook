function getSessionData() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const id = JSON.parse(sessionStorage.getItem("cbid"));

    return { token, id };
}

export async function getUser() {

    const user_credentials = getSessionData();

    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user_credentials.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${user_credentials.id}`, requestOptions);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();
    return data;
}

export async function getOrders() {

    const user_credentials = getSessionData();

    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user_credentials.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${user_credentials.id}`, requestOptions);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();
    return data;
}


export async function createOrder(cartList, total, user) {

    const user_credentials = getSessionData();

    const order = {
        user_Cart: cartList,
        user_bill: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }

    }

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user_credentials.token}` },
        body: JSON.stringify(order)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, requestOptions);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();
    console.log(data);
    return data;
}