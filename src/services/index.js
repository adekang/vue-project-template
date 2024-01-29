import request from "@/services/request/index.js";


export const requestLoginApi = (data) => {
    return request.post({
        url: 'login',
        data
    })
}