import HttpService from "./HttpService";

const AdminApis = new HttpService("/")

AdminApis.authentication = function(){
    return this.instance.get(`${this.baseUrl}whoami`)
}
AdminApis.getCtegory = function(params){
    return this.instance.get(`${this.baseUrl}products${params}`)
}
AdminApis.getProducts = function(url) {
    return this.instance.get(`${this.baseUrl}${url}`)
}

AdminApis.login = function (body){
    return this.instance.post(`${this.baseUrl}auth/login`,body)
}

export {AdminApis}