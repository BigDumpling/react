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
           headers:{
               "Access-Control-Allow-Origin":"*"
           },
           success:function(data){
               data.map( (dat)=>{
                    let da = {usrId,usrName,usrPwd,usrDisableTag,usrRemark,pass,usrType} = dat;
                    alert("-------------da------------" + json.stringify(da));
                    datas.push(da);
                    alert("---------------datas---------------" + datas);
               })
            //    data.map( (dat)=> {
            //        that.datas.push(dat);
            //        that.trigger(that.datas);
            //    })
           },
           error:function(data,status,errorThrown){
               alert("xmlrequest.status-----------" + data.status);
               alert("xmlrequest.readystate---------" + data.readyState);
               alert("I am error Ajax ----------" + status);
               alert(errorThrown);
           }
       }) 


    // $.ajax({
    //        type:'GET',
    //        url:"./../AntdDemo.json",
    //        datatype:'json',
    //        data:{},
    //        success:function(data){
    //            alert(data);
    //            data.map( (dat)=>{
    //                 let da = {usrId,usrName,usrPwd,usrDisableTag,usrRemark,pass,usrType};
    //                 da = dat;
    //                 alert("-------------da------------" + json.stringify(da));
    //                 datas.push(da);
    //                 alert("---------------datas---------------" + datas);
    //            })
    //         //    data.map( (dat)=> {
    //         //        that.datas.push(dat);
    //         //        that.trigger(that.datas);
    //         //    })
    //        },
    //        error:function(data,status,errorThrown){
    //            alert("xmlrequest.status-----------" + data.status);
    //            alert("xmlrequest.readystate---------" + data.readyState);
    //            alert("I am error Ajax ----------" + status);
    //            alert(errorThrown);
    //        }
    //    }) 


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