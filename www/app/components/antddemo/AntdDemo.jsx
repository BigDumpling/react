import React from "react";
import {Menu,Icon} from "antd";
import { Router, Route, Link, browserHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

const SubMenu = Menu.SubMenu;
class AntdDemo extends React.Component{

    constructor(...args){
        super(...args);
        this.state={
            current:"0",
            username:""
        };

        this.props.router.setRouteLeaveHook(this.props.route,this.routeWillLeave.bind(this));
    }

    routeWillLeave(nextLocation){
        if(!this.state.isSaved){
            return "确定要离开？";
        }
    }

    handlerClick(e){
        alert("333333333");
        //console.log("---------handlerClick---------");
        this.setState({
            current:e.key 
        });
    }


    componentDidMount(){
        this.setState({
            username:"Ligq222"
        });
    }

    render(){
        return(
            <div>
                <div className="leftMenu">
                    <img src="./img/logo.png" className="logo" />
                    <Menu theme="dark"             //主题，默认为light
                          onClick={this.handlerClick.bind(this)}  
                          className="menu"
                          defaultOpenKeys={['sub1','sub2']}   //初始展开的SubMenu菜单项 key 数组
                          defaultSelectedKeys={[this.state.current]}
                          mode="inline"                       //菜单类型，现在支持垂直 水平和内嵌模式三种
                          >   
                          <Menu.Item key="0"><Link to="/antdIntroduce"><Icon type="mail"/>我没有子菜单</Link></Menu.Item>
                          <SubMenu key="sub1" title={<span><Icon type="bars" />主导航</span>}>
                            <Menu.Item key="1"><Link to="/antdTable">表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/antdForm">表单</Link></Menu.Item>
                          </SubMenu>
                    </Menu>
                </div>

                <div className="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user"/>{this.state.username}</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                        <SubMenu title="登录" key="001">
                            <Menu.Item key="seeting:2"><Link to="/antdLogin">注册</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">{this.props.children}</div>
                </div>
            </div>
        );
    }
}





export default AntdDemo;