/**
 * @Author RuiXin 
 * @Description 动态加载js
 */
"use strict";
$(()=>{
        //默认属性
        var deaultConfig={
                version:'1.0',   //版本号
                base:'../js',   //基本目录
                modules:{'rx':'/RXUI.js','axios':'/util/axiosUtils.js','cache':'/util/cacheUtils.js','table':'/util/tableUtils.js','msg':'/util/msgUtils.js'}
        };

        $.each(deaultConfig.modules,(key,value)=>{
                $(document.createElement('script')).attr('src',deaultConfig.base+value+"?v="+deaultConfig.version).appendTo("body");
        });
});