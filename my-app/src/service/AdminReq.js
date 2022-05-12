import HttpService from "./HttpService";

const AdminReq = new HttpService("/")


AdminReq.login = function (body){
    return this.instance.post(`${this.baseUrl}auth/login`,body)
}

export {AdminReq}