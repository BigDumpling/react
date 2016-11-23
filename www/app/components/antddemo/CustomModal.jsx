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
            visible:true,
            loading:false,
        })
    }


    handlerOk(){
        this.setState({loading:true,})

    }

    handlerCancel(){
        this.setState({
            visible:false,
        })
    }

    render(){
        return(
            <div>
                <Button type="primary" className="custom-modal-delbutton">删除{this.props.recordprop.name}</Button>
                <Button type="primary" onClick={this.showModal.bind(this)}>
                    修改
                </Button>
                <Modal title="修改信息" 
                       visible={this.state.visible} 
                       onOk={this.handlerOk.bind(this)} 
                       onCancel={this.handlerCancel.bind(this)}
                       footer={[
                           <Button type="ghost" key="back" onClick={this.handlerCancel.bind(this)}>返回</Button>,
                           <Button type="primary" key="submit" onClick={this.handlerOk.bind(this)} loading={this.state.loading}>确认</Button>
                       ]}
                       >
                       <CustomForm formdata={this.props.recordprop}></CustomForm>
                </Modal>
            </div>
        );
    }
}

export default CustomModal;