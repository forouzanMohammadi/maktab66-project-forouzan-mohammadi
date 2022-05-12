import axios from "axios"; 
import { Navigate } from "react-router-dom";


class HttpService {
    constructor(entity) {
        this.instance = axios.create();
        this.entity = entity;
        this.baseUrl = `http://localhost:3002${this.entity}`
        this.instance.interceptors.request.use((config) => {
            //TODO: Add request interceptor here (onFulfilled)
            const token = localStorage.getItem("token")
            if(token){
                config.headers['token'] = token;
            }
            return config
        }, (error) => {
            //TODO: Add request interceptor here (onRejected)

            return Promise.reject(error)
        })
        axios.interceptors.response.use((response) => {
            //TODO: Add response interceptor here (onFulfilled)

            return response
        }, (error) => {
            //TODO: Add response interceptor here (onRejected)

            if(error.response.status === 401 ){
                <Navigate to="/panelLogin"/>
            }
            return Promise.reject(error)

        })
    }

    get(url, config) {
        return axios.get(url, config)
    }

    post(url, data, config) {
        return axios.post(url, data, config)
    }

    put(url, data, config) {
        return axios.put(url, data, config)
    }

    patch(url, data, config) {
        return axios.patch(url, data, config)
    }

    delete(url, config) {
        return axios.delete(url, config)
    }
}

export default HttpService;