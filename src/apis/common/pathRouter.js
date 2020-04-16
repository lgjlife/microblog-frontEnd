


/**
 * 登录提交
 * @param params
 */
export const openUserPage =(that,userId)=>{that.$router.push({path: ("/user/u/"+userId+ "/home")})}
export const openOtherUserPage =(that,userId)=>{that.$router.push({path: ("/user/o/"+userId+ "/home")})}