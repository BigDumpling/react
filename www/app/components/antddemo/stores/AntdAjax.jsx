import $ from "jquery";

const url = "http://localhost:7070"
class AntdAjax {
    doGet(datas,path){
        $.ajax({
           type:'GET',
           url:url + path,
           datatype:'jsonp',
           jsonp:"callback",       //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
           jsonpCallback:"jsonpCallback",       //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
           data:datas,
           
           success:function(data){
               data.map( dat=>that.datas.push(dat));
               return data;
           },
           error:function(XMLReq,status,data){
               alert("----you are wrong,noob!----");
               return data
           }
       }) 
    }
}

export default AntdAjax;