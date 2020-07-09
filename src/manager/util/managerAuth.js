/**
 * 
 * http://localhost:8000/oauth/token?grant_type=password&&client_id=test-client&&client_secret=test-secret&&username=my-username&&password=my-password1
 */
let GRANT_TYPE="password";
let CLIENT_ID="test-client";
let CLIENT_SECRET="test-secret";


export const getLoginData  =(username,password)=>{

    return {
        grant_type:GRANT_TYPE,
        client_id:CLIENT_ID,
        client_secret:CLIENT_SECRET,
        username:username,
        password:password,
    }
}

export default {
    getLoginData,
}