import React from "react";
import {Table,Button} from "antd";
import $ from "jquery";
import CustomModal from "./CustomModal.jsx";

class AntdTable extends React.Component{

    constructor(...args){
        super(...args);
        this.state={
            data:[]
        };

        this.initialArgus();
    }


    initialArgus(){

        //分页初始化设置参数
        this.pagesizes = ['5','15','25'];
        this.pagination = {
            pageSizeOptions:this.pagesizes,
            total:this.state.data.length,
            showQuickJumper :true,
            showSizeChanger :true,
            onShowSizeChange(current,pageSize){
                // alert("I am in pagination----current + "+current+",pageSize + "+pageSize);
            }
        };

        //列表级连初始化参数设置
        this.rowSelection = {
            onChange(selectedRowKeys,selectedRows){
                // alert("I am rowSelection onChange---selectedRowKeys + " + selectedRowKeys + ",---selectedRows + " + selectedRows);
            },

            onSelect(record,selected,selectedRows){
                // alert("I am onSelect---record + "+record+",selected + "+selected+",selectedRows + "+selectedRows);
            },

            onSelectAll(selected,selectedRows,changeRows){
                // alert("I am onSelectAll---selected + "+selected+",selectedRows + "+selectedRows+",changeRows + "+changeRows);
            }

        }

        //table参数初始化设置
        this.columns = [
            {title:"姓名",dataIndex:"name",key:"name"},
            {title:"年龄",dataIndex:"age",key:"age"},
            {title:"性别",dataIndex:"sex",key:"sex"},
            {title:"操作",dataIndex:"",key:"del",render:(text,record,index)=> <CustomModal recordprop={record}></CustomModal>}
        ];

    }

    componentDidMount(){
        //作用域改变了，在componentDidMount里可以用this,但是在ajax里面不能用this
        var that = this;
        $.ajax({
            url:'./../AntdDemo.json',
            datatype:'json',
            success:function(data){                
                data.map( dat=> {
                    that.state.data.push(dat);
                });

                that.setState({
                    data:that.state.data
                });
            }
        });    
    }

    render(){

        return(
            <Table dataSource={this.state.data} columns={this.columns} rowSelection={this.rowSelection} pagination={this.pagination}></Table>
        );
    }








}

export default AntdTable;