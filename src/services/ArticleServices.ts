import axios from "axios"

const API_KEY = "83a4a86b76844d47834fef4d20b8a083"
const BASE_URL = "https://newsapi.org/v2"

export const fetchArticles = async () => {
    try {
        const response = await axios.get(`${BASE_URL}//everything?q=apple&from=2024-01-31&to=2024-01-31&sortBy=popularity&apiKey=${API_KEY}`);
        return response.data.articles
    } catch (error) {
        console.log(error)
    }
}