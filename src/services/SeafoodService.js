import axios from "axios";

const SEAFOOD_BASE_REST_API_URL = 'http://localhost:8080/api/seafoods';
class SeafoodService {
    getAllSeafoods() {
        return axios.get(SEAFOOD_BASE_REST_API_URL)
    }
    createSeafood(seafood) {
        return axios.post(SEAFOOD_BASE_REST_API_URL, seafood)
    }
}

export default new SeafoodService();