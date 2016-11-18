// var config = require("./config.json");

// module.exports = function(){
//     var greet = document.createElement('div');
//     greet.textContent = config.greet;
//     return greet;
// };

import React from 'react';
import style from './greeter.css';

class Greeter extends React.Component{
    

    constructor(...args){
        super(...args);
        this.state = {
            content:''
        }
    }
    
    handleFocus(){
        this.refs.textElDiv.style.borderColor = "#fa7d3c";
        this.refs.hot.style.display = "none";
        this.refs.tips.style.display = "block";
    }

    handleBlur(){
        this.refs.textElDiv.style.borderColor = "#ccc";
        this.refs.hot.style.display = "block";
        this.refs.tips.style.display = "none";
    }

    handleChange(e){
        this.setState({
            content:e.target.value
        });
    }
 
    render(){
        return(
            <div className={style.publisher}>
                <div className={style.title}>
                    <div ref="hot">
                        <a href="#">抽刀断水水更流，举杯消愁愁更愁</a>
                    </div>
                    <div className={style.tips} ref="tips" >
                        <span>{(this.state.content.length > 140) ? ("已超出") : ("还可以输入")}<strong>{(this.state.content.length > 140) ? (this.state.content.length-140) : (140-this.state.content.length) }</strong>字</span>
                    </div>
                </div>
                <div className={style.textElDiv} ref="textElDiv" >
                    <textarea onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea>
                </div>
                <div className={style.btnWrap}>
                    <a href="javascript:void(0)" className={style.publishBtn + ((this.state.content.length > 0) && (this.state.content.length <= 140) ? "" : (" " + style.disabled)) }>发布</a>
                </div>
            </div> 
        );
    }
}

export default Greeter