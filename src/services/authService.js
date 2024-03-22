export async function login(authDetails) {
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data;
}

export async function register(authDetails) {
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data;
}

export async function updateUser(authDetails) {
    const requestOptions = {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/profile`, requestOptions);
    if (!response.ok) {
        const errorDetails = { message: response.statusText, status: response.status }
        throw errorDetails;
    };
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}