//const API_URL = process.env.REACT_APP_API_URL_FRONTWEB

const API_URL='' // http://localhost:8080

import axios from "axios";

export function fetchOrders(){
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId:number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}