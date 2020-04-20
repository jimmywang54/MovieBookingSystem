
import axios from 'axios';
import authHeader from './Auth_header';

const API_URL = 'http://localhost:8080/';

class UserService {
    
    getProfile() {
        console.log("In getProfile")
        return axios.get(API_URL + 'profile', {headers: {'Authorization': 'Bearer ' + authHeader()}});
    }

    saveProfile(fname, lname) {
        console.log("in saveProfil")
        return axios.post(API_URL + 'profile', {
            firstName: fname,
            lastName: lname
        }, { headers: { 'Authorization': 'Bearer ' + authHeader()}})
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
            
    }
    
    addPayment(cardNumber, eMonth, eYear, c) {
        

        console.log({creditCardNumber: cardNumber,
            expiryMonth: eMonth,
            expiryYear: eYear,
            cvc: c});
        
        return axios.post(API_URL + 'addPayment', {
            creditCardNumber: cardNumber,
            expiryMonth: eMonth,
            expiryYear: eYear,
            cvc: c
        }, {
            headers: { 'Authorization': 'Bearer ' + authHeader() }
        }).then(res => {
            localStorage.setItem("isCC", true);
            return res.data;
        });
    }

    getHistory() {
        return axios.get(API_URL + 'history', { headers: { 'Authorization': 'Bearer ' + authHeader() } })
            .then(res => {
                return res.data
            })
    }
}


export default new UserService();