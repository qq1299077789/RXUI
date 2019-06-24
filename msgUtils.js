/**
 * @Author RuiXin 
 * @Description 弹出窗
 */
"use strict";
class Msg{

        default={
                type:'alert', // alert,error,confirm,msg
                content:'',
                type: 1,
                title: false, //不显示标题
                cancel: ()=>{
                        
                },
                success:()=>{
                }
        }

        alert=(msg)=>{
                alert(msg);
        }

        open=(config)=>{

        }
}
