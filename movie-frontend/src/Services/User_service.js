
import axios from 'axios';
import authHeader from './Auth_header';

const API_URL = 'http://localhost:8080/';

class UserService {
    
    getProfile() {
        return axios.get(API_URL + 'profile', {headers: authHeader()});
    }
    
    addPayment(creditCardDetail) {
        return axios.post(API_URL + 'addPayment', {creditCardDetail});
    }

    getHistory() {
        return axios.get(API_URL + 'history', { headers: authHeader() });
    }
}


export default new UserService();