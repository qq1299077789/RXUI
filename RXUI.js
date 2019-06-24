/**
 * @Author RuiXin 
 * @Description 模块管理
 */
"use strict";
class  RXUI{
        deaultModules=['cache','axios','table','msg'];
        modules={'cache':"new Cache()","axios":'new Axios()','table':'new Table()','msg':'new Msg()'};
        //模块调用
        use=(args,func)=>{
             if(!args){
                     args=deaultModules;
             }
             var rx={};
             $.each(args,(index,val)=>{
                         rx[val]=eval(this.modules[val]);
            });
            func(rx);
        }
}