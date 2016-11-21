import React from "react";
import {Button} from "antd";

class AntdIntroduce extends React.Component{

    render(){

        return(
            <div>
                Designed as Ant Design,提炼和服务企业级中后台产品的交互语言和视觉风格。
                <div>
                    <Button type="primary" shape="circle" icon="search"/>
                    <Button type="primary" icon="search" >Search</Button>
                    <br/>
                    <Button type="ghost" shape="circle-outline" icon="search"></Button>
                </div>
            </div>
        );
    }
}

export default AntdIntroduce;