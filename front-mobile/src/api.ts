import {REACT_APP_API_URL} from '../.env.json'

import axios from "axios";

export function fetchOrders(){
    return axios(`${REACT_APP_API_URL}/orders`)
}

export function confirmDelivery(orderId:number){
    return axios.put(`${REACT_APP_API_URL}/orders/${orderId}/delivered`)
}