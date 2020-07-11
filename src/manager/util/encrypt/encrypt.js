
import JsEncrypt from 'jsencrypt'

let Base64 = require('js-base64').Base64

let publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqiy3Dq8+T2e005/KNeU0YNV9k+e3BqBb4d0Xkm8I7i4GITwJC096HRZiPBNMFxUZ5U8hkFglVY0TBLUu80QWsgCrM+Q5XrSWBQHQY0E5iDcAdxfLeRxBBoPcaZzXeyr92PqyXWlTxcnnxFUcXWYkpdb+pKd456VRTpPMSBML1kG0jJH6zSBBqxUAmB8vkyl5s1pwNGzTao+SyM51cvCzacJ2HI32gIdIQXOPYST49jrP1hE6UdcWOpCqeBOEwZ5pby0FKV+fvWZPsBmTP99Z70Te7Sbquc/MJXYa6qkHR5jZxR54w0pBrizDMC2dN/yR5B1iNmcQk59yyJvjtncW7wIDAQAB"
let privateKey = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqLLcOrz5PZ7TTn8o15TRg1X2T57cGoFvh3ReSbwjuLgYhPAkLT3odFmI8E0wXFRnlTyGQWCVVjRMEtS7zRBayAKsz5DletJYFAdBjQTmINwB3F8t5HEEGg9xpnNd7Kv3Y+rJdaVPFyefEVRxdZiSl1v6kp3jnpVFOk8xIEwvWQbSMkfrNIEGrFQCYHy+TKXmzWnA0bNNqj5LIznVy8LNpwnYcjfaAh0hBc49hJPj2Os/WETpR1xY6kKp4E4TBnmlvLQUpX5+9Zk+wGZM/31nvRN7tJuq5z8wldhrqqQdHmNnFHnjDSkGuLMMwLZ03/JHkHWI2ZxCTn3LIm+O2dxbvAgMBAAECggEALjBMz1OJWgwP7JCmVdKMUOwhVY/DAa1swvU7fKdeiSc8yrB80/ESd+qnZx7lvC4iBTdhKMiD+aB81P5IbAbDEjVUQpVjbO0e+uTvJsGBWBN1sN1ogMrGa3pGzPOhGPEmTUpeNzRrZHfUzFk9haw/rjOYkiBSlK0uUGGVRMrGn7RqHqaQ7odGM3woPzUbrDLvLRcqyXhZ3qWSxkICJ/KJZzOnbCmHqmjRs1nBJibrFCNSYEWxQ80iGATC5wmRz7DwaTmOwyvWAIw78qmXjh9lsgaYhL+j4u5QyzS0QGziKKhrufBOnD56ZXDsYCorG22QH4GzTLuk4BVfre+gEAx2QQKBgQD/58KitgFZlZKaNpqQfTYnwTKKukIUjK8g5wElj07tXhxOx+IEPKOd9yyV/zCJboquiGsCoKQAoHzHOw2jq+tBN39ktnACXeYuzCspwJ8+lUagO3XrFeqX+XtcmPqfP/QpW6n6JYEInPXRjnSWXd5A+JFuc/sWdtjbILSiYs6d1wKBgQCqPNWRPQ3p8as3/bwwidpJmS5nOU0uGbJe8ejStenxbQl58R/yNWAfjS2Fu2muhZS/5+12l2AEULJFDCRR5dJ41mteEFgU7xkE3wQVOSYlk/V1RucLdkVJcxxQD+xtIZGhAfMEy/8gBtzEmUgIjlnKBoTyOkqQp11OU1j6hjG8qQKBgQD5j2LYmvYmDx+xFJ8XWYR+sIJBl/LpZ2lChQUxQ9iM08J3caaQyzIk0u/AN+V1oT/NhWwWW+KUWe5VvNlITFhYeW7bIK+LH1djO+i8BwVFWv5NNK+CWxU0sDAF1YpT02KhEqtpLznu1GNFwc8g9NnSMpZhSOoMtko1KGgAFKu6cQKBgGuDjCXz90ues1HjT+0fwtrkgWfzyoio9fv8r9wTw7IT+P4oiNKBXznOAcgJ+s6b0rv4kAJry9ot1MjCyFVo3iou0RRRIi/maVioOH3m3+6vqT/uDZExmsSujF0MEXdC0iRrhL2s0G27p8YKQHIW5SIwR9prchg1ezoybWmbQuIxAoGABeLiPcIbGvqt035vxkqs/v43UAT2bGM1xwcshiexiq38ZIF7SBXTcr+zp4k0vfkkSDr5/XcGWmxQ9s+bbRBWytlHjtLmiJUKAijJfd1Fc1DNEHbbiYCVm9wh6N6TEmIbAxnupbPfak1ZQnIoA/ZkuC6dQOi2ZZx7RP92vm52AE4="


export const Base64Encode =param=>{

    console.log("=========Base64Encode===========")
    return Base64.encode(param)
}
export const Base64Decode =param=>{

    console.log("=========Base64Decode===========")
    return Base64.decode(param) 
}

export const encrypt  =(param,publicKey)=>{
    console.log("正在加密.........")
    let encrypt = new JsEncrypt();
    encrypt.setPublicKey(publicKey);
    return Base64.encode(encrypt.encrypt(param));
}

export const dencrypt  =(param,privateKey)=>{

    console.log("正在解码.........")
    let _decryp = new JsEncrypt();
    _decryp.setPrivateKey(privateKey)
    // console.log(obj)
    var data = _decryp.decrypt(param)
    // console.log(data)
    return data
}


export default {
    Base64Encode,
    Base64Decode,
    encrypt,
    dencrypt,
}