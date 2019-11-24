// import api from './api'
import axios from 'axios'

const debtAPI = axios.create({
    baseURL: window._env_.API_DEBT || 'http://localhost:7001/',
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE"
    }
})

class Debt {
    static async create(username_creditor, username_debtor, name, cost) {
        let message = ''
        try {
            const res = await debtAPI.post('create', {
                'username_creditor': username_creditor,
                'username_debtor': username_debtor,
                'name': name,
                'cost': cost
            })
            message = 'Add debt task success'
        } catch (e) {
            console.error(e)
            message = 'Failed to add debt task'
        } finally {
            return message
        }
    }

    static async getList(username = null) {
        // id, from, to, name, cost, time
        let debtList = []
        try {
            let res
            if (!username) {
                res = await debtAPI.get('list/all')
            } else {
                res = await debtAPI.get('list/' + username)
            }
            debtList = res.data
        } catch (e) {
            console.error(e)
        } finally {
            return debtList
        }
    }
}

export default Debt;