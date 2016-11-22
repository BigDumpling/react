import React from "react";
import {Table} from "antd";

const columns = [
    {title:"姓名",dataIndex:"name",key:"name"},
    {title:"年龄",dataIndex:"age",key:"age"},
    {title:"性别",dataIndex:"sex",key:"sex"}
];
class AntdTable extends React.Component{

    constructor(...args){
        super(...args);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        // this.setState({
        //     username:"Ligq222"
        // });
        alert("Hi! I am here !");
        $.get({
            url:'AntdDemo.json',
            datatype:'json',
            success:function(data){
                alert("hahaha");
                alert(data);
                alert(JSON.stringify(data));
                data.map( dat=> {
                    this.state.data.push(data);
                });

                this.setState({
                    data:this.state.data
                });
            }
        });
    }

    render(){

        return(
            <Table datasource={this.state.data} columns={columns}></Table>
        );
    }
}

export default AntdTable;