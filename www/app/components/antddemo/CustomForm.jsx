import React from "react";
import {Form, Input, Icon, Cascader, Select, Button, DatePicker, TimePicker} from "antd";

const FormItem = Form.Item;
const Opition = Select.Option;
const RangeTime = DatePicker.RangePicker;

class CustomForm extends React.Component{

    constructor(...args){
        super(...args);
        this.state = {
            passwordDirty:false
        }
    }

    handlerOnClick(){
        this.refs.customForm.onSubmit();
    }

    handlerSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll( (err,values)=>{
            if(!err){
                delete(values["confirm"]);
                this.props.onSubmitForm(values);
            }
        })
        //this.props.onSubmitForm(e);
    }

    handlePasswordBlur(e){
        const value = e.target.value;
        this.setState({
            passwordDirty:this.state.passwordDirty || !!value
        })
    }

    checkConfirm(rule,value,callback){
        const form = this.props.form;
        if(value && value !== form.getFieldValue('usrPwd')){
            callback("两次输入的密码不一致！");
        }else{
            callback();
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol:{span:6},
            wrapperCol:{span:14},
        };
        const tailFormItemLayout = {
            wrapper:{
                span:14,
                offset:6,
            }
        }

        return(
            <Form vertical onSubmit={this.handlerSubmit.bind(this)} ref="customForm">

                <FormItem {...formItemLayout} label="UsrName" hasFeedback>
                    {getFieldDecorator('usrName',{
                        rules:[{
                            required:true,message:"请输入用户名!"
                        }],
                        initialValue:(this.props.formdata === "" ? "" : this.props.formdata.usrName)
                    })(<Input type="text" />)}
                </FormItem> 

                <FormItem {...formItemLayout} label="E-mail" hasFeedback>
                    {getFieldDecorator('usrEmail',{
                        rules:[{
                            type:'email',message:"你输入的邮箱格式不对!"
                        },{
                            required:true,message:"请输入邮箱!"
                        }],
                        initialValue:(this.props.formdata === "" ? "": this.props.formdata.usrEmail)
                    })(<Input />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Password" hasFeedback>
                    {getFieldDecorator('usrPwd',{
                        rules:[{
                            required:true,message:"请输入密码!"
                        }]
                    })(<Input type="password" onBlur={this.handlePasswordBlur.bind(this)} />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Confirm-Password" hasFeedback>
                    {getFieldDecorator('confirm',{
                        rules:[{
                            required:true,message:"请确认输入密码!"
                        },{
                            validator:this.checkConfirm.bind(this)
                        }]
                    })(<Input type="password" />)}
                </FormItem>
                <FormItem {...formItemLayout}>
                    <Button htmlType="submit">添加</Button>
                </FormItem>
            </Form>
        );
    }
}

CustomForm = Form.create()(CustomForm)
export default CustomForm;


//  <FormItem {...formItemLayout} label="Datepicker" hasFeedback>
//                     {getFieldDecorator('date',{
//                         rules:[{
//                             type:"array",required:true,message:"请选择时间"
//                         }]
//                     })(
//                         <RangeTime showTime format="YYYY-MM-DD hh:mm:ss"></RangeTime>
//                     )}
//                 </FormItem>