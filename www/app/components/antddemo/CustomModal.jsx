import React from "react";
import {Button, Modal} from "antd";
import CustomForm from "./CustomForm.jsx";

class CustomModal extends React.Component{

    constructor(...args){
        super(...args);
        this.state={
            visible:false
        }
    }

    componentDidMount(){
       
    }

    showModal(){
        this.setState({
            visible:true
        })
    }

    handlerOk(){
        this.setState({
            confirmLoading:true
        },function(){
            this.props.onSubmitForm();
        })

    }

    handlerCancelModal(){
        this.setState({
            visible:false,
        })
    }

    handleDelete(){
        this.props.onDeleteUser(this.props.recordprop);
    }

    render(){
        return(
            <div>
                <Button type="primary" className="custom-modal-delbutton" onClick={this.handleDelete.bind(this)}>删除</Button>
                <Button type="primary" onClick={this.showModal.bind(this)}>
                    修改
                </Button>
                <Modal title="修改信息" 
                       visible={this.state.visible} 
                       onOk={this.handlerOk.bind(this)} 
                       onCancel={this.handlerCancelModal.bind(this)}
                       confirmLoading={this.state.confirmLoading}
                       >
                       <CustomForm onSubmitForm={this.props.onSubmitForm} formdata={this.props.recordprop}></CustomForm>
                </Modal>
            </div>
        );
    }
}

export default CustomModal;