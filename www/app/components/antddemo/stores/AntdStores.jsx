import AntdActions from "./../actions/AntdActions.jsx";
import $ from "jquery";
var Reflux = require("reflux");

var AntdStores = Reflux.createStore({
    datas:[],
    listenables:[AntdActions],

    onGetAllUser:function () {
       var that = this;
       $.ajax({
           type:'GET',
           url:"http://localhost:7070/userManagement/query_all_user",
           datatype:'jsonp',
           jsonp:"callback",       //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
           jsonpCallback:"jsonpCallback",       //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
           data:{},
           
           success:function(data){
               data.map( dat=>that.datas.push(dat));
               alert("JSON datas------" + JSON.stringify(that.datas) );
               that.trigger(that.datas);
           },
           error:function(data,status,errorThrown){
               alert("----you are wrong,noob!----");
           }
       }) 
    },

    onModifyUser:function(){

    },

    onAddUser:function(){

    },

    onGetUserByName:function(){

    },

    onDeleteUserByName:function(record){
        alert("删除方法--------------"+record.name);
        for(let i=0;i<this.datas.length;i++){
            if(this.datas[i].name === record.name){
                alert("删除的用户：" + record.name + " 是第" + i + "个");
                this.datas.splice(i,1);
                this.trigger(this.datas);
            }
        }
    }
})

module.exports = AntdStores;