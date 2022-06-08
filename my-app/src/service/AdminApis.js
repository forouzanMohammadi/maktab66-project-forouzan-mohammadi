import HttpService from "./HttpService";

const AdminApis = new HttpService("/")


AdminApis.delete = function(id){
    return this.instance.delete(`${this.baseUrl}products/${id}`)
}
AdminApis.upload = function(formData){
    return this.instance.post(`${this.baseUrl}upload`,formData)
}
AdminApis.put = function(id,selectedProduct){
    return this.instance.put(`${this.baseUrl}products/${id}`,selectedProduct)
}
AdminApis.patch = function(id,selectedProduct){
    return this.instance.patch(`${this.baseUrl}products/${id}`,selectedProduct)
}
AdminApis.unitProduct = function(id){
    return this.instance.get(`${this.baseUrl}products/${id}`)
}
AdminApis.product = function(params){
    return this.instance.get(`${this.baseUrl}products/${params}`)
}


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

AdminApis.postOrder=function(url,info) {
    return this.instance.post(`${this.baseURL}${url}`,info)
}
AdminApis.orders = function(url) {
    return this.instance.get(`${this.baseUrl}${url}`)
}

export {AdminApis}