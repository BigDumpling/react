import React from "react";
import {Link,browserHistory} from "react-router"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import AntdLoginActions from "./actions/AntdLoginActions.jsx";
import AntdLoginStores from "./stores/AntdLoginStores.jsx";

const FormItem = Form.Item;

class AntdLogin extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            data:AntdLoginActions.login()
        };

        creatForm();
    }


    handlerSubmit(e){
        e.preventDefault();
        this.props.form.validateFields( (err,values)=>{
            if(!err){
                AntdLoginActions.login(values);
                if(this.state.data.statusCode === "200" && this.state.data.sessionid !== null){
                    browserHistory.push("/antdDemo");
                }else{
                    alert("login fail,noob!");
                }
            }
        } )
    }

    
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form onSubmit={this.handlerSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName',{
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
                    {getFieldDecorator('remember',{
                        valuePropName:'checked',
                        initialValue:true,
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
}
export default AntdLogin