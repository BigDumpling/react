import AntdUserinfoActions from "./../actions/AntdUserinfoActions.jsx";
import AntdAjax from "./AntdAjax.jsx";
import {message} from "antd";
import $ from "jquery";
var Reflux = require("reflux");

var AntdUserinfoStores = Reflux.createStore({
    datas:[],
    listenables:[AntdUserinfoActions],

    onGetAllUser:function () {
       var that = this;
       $.ajax({
           type:'GET',
           url:"http://localhost:7070/userManagement/query_all_user",
           datatype:'jsonp',
           jsonp:"callback",       //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
           jsonpCallback:"UserinfoCallback",       //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
           data:{},
           
           success:function(data){
               that.datas.splice(0,that.datas.length);
               data.map( dat=>that.datas.push(dat));
               that.trigger(that.datas);
           },
           error:function(data,status,errorThrown){
               message.error("查询用户列表失败！");
               that.trigger(that.datas);
           }
       }) 
    },

    onModifyUser:function(){

    },

    onAddUser:function(values){
        var that = this;
        $.ajax({
           type:'GET',
           url:"http://localhost:7070/userManagement/addUser",
           datatype:'jsonp',
           jsonp:"callback",       //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
           jsonpCallback:"AddUserCallback",       //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
           data:JSON.stringify(values),
           
           success:function(data){
               message.success(data.message);
               that.onGetAllUser();
           },
           error:function(XMLReq,status,data){
               message.error("新增用户失败！");
               that.trigger(that.datas);
           }
       }) 
        
    },

    onGetUserByName:function(){

    },

    onDeleteUserByName:function(record){
        var that = this;
        $.ajax({
           type:'GET',
           url:"http://localhost:7070/userManagement/deleteUserByUserId?usrId="+record.usrId,
           datatype:'jsonp',
           jsonp:"callback",       //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
           jsonpCallback:"deleteUser",       //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
           
           success:function(data){
               message.success(data.message);
               that.onGetAllUser();
           },
           error:function(XMLReq,status,data){
               message.error("删除用户失败！");
               that.trigger(that.datas);
           }
       }) 
    }
})

module.exports = AntdUserinfoStores;