/**
 * @Author RuiXin 
 * @Description Table工具类
 */
"use strict";
class Table{
        //默认属性
        defaults={
                id:'',  //表格ID
                element:'#table',  //表格绑定div
                url:'',  //数据地址
                title:'',  //标题
                toolbar:true, //是否显示工具栏
                totalRow:true, //是否显示总条数
                page:true,//是否显示分页
                limit:10,//每页显示条数
                limits:[10,20,30],//切换显示条数
                method:'post',//提交方式
                /*
                field 服务器返回的数据的key
                title 列标题
                sort 排序
                type 控件类型
                enable 是否可编辑
                formatter: 格式化
                */
                cols:[
                        {field:'', title:'',enable:true,width:100, fixed: '',  sort: true},
                ]
        }

        //表格渲染
        render=(config)=>{
                new Axios().post(config.url).then(()=>{
                        
                });
        }
}