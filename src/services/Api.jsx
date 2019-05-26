export class Api {
    constructor(url) {
        this.url = url;
    }
    getData = () => {
        return fetch(`${this.url}/list`)
            .then(res => res.json())
            .then(res => res)
    }
}