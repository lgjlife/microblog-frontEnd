/**
 * 缓存
 */

export default {

    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },

    setTimeout(key,value,ms){

        localStorage.setItem(key+"start",new Date().getTime());
        localStorage.setItem(key+"time",new Date().getTime());
        localStorage.setItem(key,JSON.stringify(value));
    },


    get(key){
        var value = localStorage.getItem(key)
        var start = localStorage.getItem(key+"start");
        var time = localStorage.getItem(key+"time");
        var now = new Date().getTime();

        if((start + time) <= now){
            return JSON.parse(value);
        }
        else return null;

    },

    delete(key){
        localStorage.removeItem(key);
        localStorage.removeItem(key+"time");
    }
}