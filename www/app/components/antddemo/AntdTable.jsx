import React from "react";
import {Table,Button,Modal} from "antd";
import $ from "jquery";
import CustomModal from "./CustomModal.jsx";
import AntdUserinfoActions from "./actions/AntdUserinfoActions.jsx";
import AntdUserinfoStores from "./stores/AntdUserinfoStores.jsx";
import CustomForm from "./CustomForm.jsx";

class AntdTable extends React.Component{

    constructor(...args){
        super(...args);
        this.state={
            data:[],
            visible:false
        };

        this.initialArgus();
    }


    initialArgus(){

        //分页初始化设置参数
        this.pagesizes = ['5','15','25'];
        this.pagination = {
            pageSizeOptions:this.pagesizes,
            total:this.state.data.length === 0 ? 0 : this.state.data.length,
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
            {title:"ID",dataIndex:"usrId",key:"usrId"},
            {title:"姓名",dataIndex:"usrName",key:"usrName"},
            {title:"备注",dataIndex:"usrRemark",key:"usrRemark"},
            {title:"邮箱",dataIndex:"usrEmail",key:"usrEmail"},
            {title:"状态",dataIndex:"usrDisableTag",key:"usrDisableTag"},
            {title:"操作",dataIndex:"",key:"del",render:(text,record,index)=> <CustomModal recordprop={record} onDeleteUser={this.handleDeleteUser.bind(this)}></CustomModal>}
        ];

    }

    handleDeleteUser(record){
        AntdUserinfoActions.deleteUserByName(record);
    }


    componentDidMount(){
        this.unsubscrible = AntdUserinfoStores.listen(this.onStatusChange.bind(this));
        AntdUserinfoActions.getAllUser();
    }


    onStatusChange(datas){
        this.setState({
            data:datas
        });
    }

    componentWillUnmount(){
        this.unsubscrible();
    }

    handlerSubmitForm(values){
        this.setState({
            confirmLoading:true
        },function(){
            AntdUserinfoActions.addUser(values);
            this.setState({
                visible:false
            })
        });
        
    }

    handlerCancelModal(){
        this.setState({
            visible:false
        })
    }

    openAddUserModal(){      
        this.setState({
            visible:true
        });
    }

    render(){

        return(
            <div>
                <Button type="primary" size="small" onClick={this.openAddUserModal.bind(this)}>添加</Button>
                <Table dataSource={this.state.data} columns={this.columns} rowSelection={this.rowSelection} pagination={this.pagination}></Table>
                <Modal title="添加用户" 
                       visible={this.state.visible} 
                       onOk={this.handlerSubmitForm.bind(this)} 
                       onCancel={this.handlerCancelModal.bind(this)}
                       confirmLoading={this.state.confirmLoading}
                       >
                       <CustomForm onSubmitForm={this.handlerSubmitForm.bind(this)} onDeleteUser={this.handleDeleteUser.bind(this)} formdata="" ref="test"></CustomForm>
                </Modal>
            </div>
        );
    }
}

export default AntdTable;