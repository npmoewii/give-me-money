// import api from './api'
import axios from 'axios'

const transactionAPI = axios.create({
    baseURL: process.env.REACT_APP_API_TRANSACTION || 'http://localhost:7002/',
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE"
    }
})

class Transaction {
    static async create(username_to, username_from, money, key) {
        let message = ''
        try {
            const res = await transactionAPI.post('create', {
                'username_to': username_to,
                'username_from': username_from,
                'money': money,
                'key': key
            })
            message = 'Create transaction successful'
        } catch (e) {
            console.error(e)
            message = 'Add transaction fail'
        } finally {
            return message
        }
    }

    static async getList(username = null) {
        // id, from, to, money, time
        let transactionList = []
        try {
            let res
            if (username) {
                res = await transactionAPI.get('list/' + username)
            } else {
                res = await transactionAPI.get('list/all')
            }
            transactionList = res.data
        } catch (e) {
            console.error(e)
        } finally {
            return transactionList
        }
    }
}

export default Transaction;