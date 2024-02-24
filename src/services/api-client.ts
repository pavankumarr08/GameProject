import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8fe13856b1fe455a98c71e3c63c0241f'
    }
})