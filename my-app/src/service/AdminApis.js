import HttpService from "./HttpService";

const AdminApis = new HttpService("/")


AdminApis.login = function (body){
    return this.instance.post(`${this.baseUrl}auth/login`,body)
}

export {AdminApis}