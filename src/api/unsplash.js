import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID NNu52Q7aAoxjYWWkENYOsE_hgXJ5mFuwCjf7IyqY_oA"
    }
})