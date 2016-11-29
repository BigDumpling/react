import React from "react";
import ReactDOM from "react-dom";
import {Link,browserHistory} from "react-router"
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import AntdLoginActions from "./actions/AntdLoginActions.jsx";
import AntdLoginStores from "./stores/AntdLoginStores.jsx";

const FormItem = Form.Item;

const AntdLogin = Form.create()(
    React.createClass({

        getInitialState(){
            return{
                data:"noob bitch!"
            }
        },
        
        componentDidMount(){
            this.unsubscrible = AntdLoginStores.listen(this.onStatusChange.bind(this));
            AntdLoginActions.login();
        },

        onStatusChange(result){
            this.setState({
                data:result
            })
        },

        componentWillUnmount(){
            this.unsubscrible();
        },

    componentDidUpdate(){
        if(this.state.data.statusCode && this.state.data.statusCode === "200" && this.state.data.sessionid !== null){
            browserHistory.push("/antdDemo");
        }else{
            if(this.state.data.statusCode && this.state.data.statusCode === "300"){
                //message.error(this.state.data.message,3);
            }
        }

    },

        handlerSubmit(e){
            e.preventDefault();
            this.props.form.validateFields( (err,values)=> {
                if(!err){
                    AntdLoginActions.login(values);
                }
            } );
        },

       
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form onSubmit={this.handlerSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username',{
                        rules:[{required:true,message:"Please input you username"}],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                    )
                    }
                    
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:"Please input you password"}],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                    )
                    }
                    
                </FormItem>
                <FormItem>
                    {getFieldDecorator('captcha',{
                        rules:[{required:true,message:"Please input you captcha"}],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="Captcha" />
                    )
                    }
                    
                </FormItem>
                <FormItem>
                    {getFieldDecorator('isRemember',{
                        // valuePropName:'checked',
                        initialValue:true
                    })(
                        <Checkbox>Remember Me</Checkbox>
                    )
                }
                    <Link to="/antdForgetPassword" className="login-form-forgot" >Forgot password?</Link>
                    <Button htmlType="submit" type="primary" className="login-form-button">Login </Button>
                    or <Link to="/antdRegist" >Regist now</Link>

                </FormItem>
            </Form>
        );
    }
    })
)

export default AntdLogin