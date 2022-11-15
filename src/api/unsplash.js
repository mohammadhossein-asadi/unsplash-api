import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID VLe7uEfye9gsWxAtGrnqoBP3NywoDlj2b2yiVNzvML8 '
    }
})