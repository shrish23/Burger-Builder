import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-56231.firebaseio.com/'
});

export default instance