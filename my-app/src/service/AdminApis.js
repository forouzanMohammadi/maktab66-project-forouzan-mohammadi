import HttpService from "./HttpService";

const AdminApis = new HttpService("/")

AdminApis.authentication = function(){
    return this.instance.get(`${this.baseUrl}whoami`)
}

AdminApis.login = function (body){
    return this.instance.post(`${this.baseUrl}auth/login`,body)
}

export {AdminApis}