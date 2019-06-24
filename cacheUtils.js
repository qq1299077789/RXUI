/**
 * @Author RuiXin 
 * @Description cache工具类
 */
"use strict";
class Cache{
        
        //设置Cache
        setCache=(key,val)=>{
                localStorage.setItem(key,JSON.stringify(val));
        }
        
        //获取Cache
        getCache=(key)=>{
                var val=localStorage.getItem(key);
                if(val){
                        return JSON.parse(val);
                }
                return val;
        }

        //清除Cache
        removeCache=(key)=>{
               localStorage.removeItem(key);
        }

        //清除所有的Cache
        clear=()=>{
                localStorage.clear();
        }

        //判断是否存在Cache
        hasCache=(key)=>{
                var val=getCache(key);
                return val!=null&&val!=undefined;
        }
}