import React from "react";
import ReactDom from "react-dom";

class TodoItem extends React.Component{

    //删除元素，根据每个元素的index来删除数据
    handlerDel(){
        this.props.deleteTodo(this.props.index);
    }

    //鼠标移入事件，显示删除按钮
    handlerMouseOver(){
        ReactDom.findDOMNode(this).style.background = "#eee";
        ReactDom.findDOMNode(this.refs.delButton).style.display = "inline-block";
    }

    //鼠标移出事件    
    handlerMouseOut(){
        ReactDom.findDOMNode(this).style.background = "#fff";
        ReactDom.findDOMNode(this.refs.delButton).style.display = "none";
    }

    //改变元素状态
    handlerChange(e){
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index,isDone);
    }



    render(){
        let className = this.props.isDone ? "task-done" : "";
        return(
            <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
                <label>
                    <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
                    <span></span> 
                </label>
                <span className={className}>{this.props.text}</span>
                <button ref="delButton" className="btn btn-danger" onClick={this.handlerDel.bind(this)}>删除</button>
            </li>
        );
    }
}

export default TodoItem;