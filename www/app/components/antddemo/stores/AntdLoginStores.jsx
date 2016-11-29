import $ from "jquery";
import AntdLoginActions from "./../actions/AntdLoginActions.jsx";
var Reflux = require("reflux");

var AntdLoginStores = Reflux.createStore({

    listenables:[AntdLoginActions],

    onLogin(loginForm){
        var that = this;
        $.ajax({
            type:'GET',
            url:'http://localhost:7070/login/index',
            dataType:'jsonp',
            jsonpCallback:'loginCallback',
            data:JSON.stringify(loginForm),

            success:function(data){
                that.trigger(data);
            },

            error:function(XMLRequest,state,data){
                that.trigger(data);
            }
        })
    },

    onRegist(){

    },

    onFindPassword(){

    }
})

module.exports = AntdLoginStores;