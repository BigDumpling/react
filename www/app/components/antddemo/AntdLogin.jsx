import React from "react";

class AntdLogin extends React.Component{

    constructor(...args){
        super(...args);
        console.log("I am AntdLogin Demo!");
    }

    render(){

        return(
            <div>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" value="submit" />
            </div>
        );
    }
}

export default AntdLogin