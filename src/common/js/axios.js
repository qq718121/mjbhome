import axios from 'axios'

export default function(url='',data={},params={},headers={},method='get'){
    console.log(localStorage.token);
    let token=localStorage.token,baseURL='';
    if(token==undefined||token==''){
        baseURL=''
    }else{
        baseURL=''
        data.user_token=token;
    }
    return axios({
        url:url,
        baseURL:baseURL,
        responseType:'json',
        data:data,
        params:params,
        headers: headers,
        method:method,
        withCredentials:false
    })
}
