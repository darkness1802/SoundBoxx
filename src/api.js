import axios from "axios"

const BASE_URL = "https://royalsoft.netlify.app"

class HTTP {
    constructor(url) {
        this.url = url
    }
    async Get(routes="", headers={}) {
        return (await axios.get(this.url+routes))
    }
    async Post(routes="", data, headers={}) {
        return (await axios.post(this.url+routes, data))
    }
}

const SEARCH = '/audio/search' // { keyword: "lac troi", quantity: 12 }
const STREAM = '/audio/stream' // { id }

export { SEARCH, STREAM }
export default Request = new HTTP(BASE_URL)