const apiKey = '3ce49910263044c7bdc24d588f0cec1e';
export const BASE_URL_APPLE = `https://newsapi.org/v2/everything?q=apple&apiKey=${apiKey}`;
export const BASE_URL_BITCOIN = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
export const BASE_URL_TESLA = `https://newsapi.org/v2/everything?q=tesla&apiKey=${apiKey}`;

export const getAnnouncements = (BASE_URL) => {
    return fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw Promise.reject(
                    `${response.status} - ${response.statusText}`
                )
            }

            return response.json();
        })

}

