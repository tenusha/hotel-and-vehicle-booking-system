const baseUrl = "http://localhost:3001"

export function login(url, body) {
    return callPost(baseUrl + url, body);
}

// const callGet = (url) => {
//     return fetch(url).then(handleres);
// }

const callPost = (url, body) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json"}
    }).then(handleres);
}

const handleres = (res) => {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject(new Error("res fail"));
        //console.log("res failed");
    }
}