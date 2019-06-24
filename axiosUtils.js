/**
 * @Author RuiXin 
 * @Description http请求工具类
 */
"use strict";
class Axios{
    //默认属性
    defaults ={
        type: "post",  
        url: "/",  
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',  
        data: {},  
        async:true,
        dataType: "json",  
        beforeSend:(xhr)=>{   //发送请求前事件

        },
        success:(data)=>{   //请求成功事件

        },  
        error:(e)=>{   //请求失败事件
                
        },
        complete:(xhr,status)=>{  //请求完成事件，不管成功与否都可以执行

        }
    };

    //发送请求
    send=(config)=>{
        var promise=new Promise(function(resolve, reject){
            config.success=resolve;
            config.error=reject;
            $.ajax(config);
        });
        return promise;
    }

    //config 转换
    parseConfig=(url,data,dataType)=>{
        var config=$.extend({},this.defaults);
        if(url){
            config.url=url;
        }
        if(data){
            config.data=data;
        }
       if(dataType){
            config.dataType=dataType;
       }
       return config;
    }

    //post 请求
    post=(url,data,dataType)=>{
        var config=this.parseConfig(url,data,dataType);
        return this.send(config);
    }

    //get 请求
    get=(url,data,dataType)=>{
        var config=this.parseConfig(url,data,dataType);
        config.type="get";
        return  this.send(config);
    }

    //put 请求
    put=(url,data,dataType)=>{
        var config=this.parseConfig(url,data,dataType);
        config.type="put";
        return this.send(config);
    }

     //delete 请求
     delete=(url,data,dataType)=>{
        var config=this.parseConfig(url,data,dataType);
        config.type="delete";
        return this.send(config);
    }
};