import React from "react";
import {Form, Input, Icon, Cascader, Select, Button, DatePicker, TimePicker} from "antd";

const FormItem = Form.Item;
const Opition = Select.Option;
const RangeTime = DatePicker.RangePicker;

class CustomForm extends React.Component{

    constructor(...args){
        super(...args);
    }



    handlerSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll( (err,values)=>{
            alert("values-------" + values);
            alert("err----------" + err);
        })
    }

    componentDidMount(){
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
            <Form vertical onSubmit={this.handlerSubmit.bind(this)}>
                <FormItem {...formItemLayout} label="E-mail" hasFeedback>
                    {getFieldDecorator('email',{
                        rules:[{
                            type:'email',message:"你输入的邮箱格式不对!"
                        },{
                            required:true,message:"请输入邮箱!"
                        }]
                    })(<Input />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Password" hasFeedback>
                    {getFieldDecorator('password',{
                        rules:[{
                            required:true,message:"请输入密码!"
                        }]
                    })(<Input type="password" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Confirm-Password" hasFeedback>
                    {getFieldDecorator('confirm',{
                        rules:[{
                            required:true,message:"请确认输入密码!"
                        }]
                    })(<Input type="password" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Name" hasFeedback>
                    {getFieldDecorator('name',{
                        rules:[{
                            required:true,message:"请输入用户名!"
                        }],
                        initialValue:this.props.formdata.name
                    })(<Input type="text" />)}
                </FormItem> 

                <FormItem {...formItemLayout} label="Age" hasFeedback>
                    {getFieldDecorator('age',{
                        rules:[{
                            required:true,message:"请输入年龄!"
                        }],
                        initialValue:this.props.formdata.age
                    })(<Input type="text" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Datepicker" hasFeedback>
                    {getFieldDecorator('date',{
                        rules:[{
                            type:"array",required:true,message:"请选择时间"
                        }]
                    })(
                        <RangeTime showTime format="YYYY-MM-DD hh:mm:ss"></RangeTime>
                    )}
                </FormItem>
            </Form>
        );
    }
}

CustomForm = Form.create()(CustomForm)
export default CustomForm;



// import React from "react";

// class CustomForm extends React.Component{

//     render(){
//         return (
//             <p>hello bitch! {this.props.CustomForm.username}</p>
//         );
//     }
// }

// export default CustomForm;