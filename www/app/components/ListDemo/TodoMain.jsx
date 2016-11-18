import React from "react";
import TodoItem from "./TodoItem.jsx";

class TodoMain extends React.Component{

    render(){
        if(this.props.todos.length === 0){
            return(
                <div className="todo-empty">恭喜你，你目前没有代办任务！</div>
            );
        }
        return(
            <ul className="todo-main">
                {this.props.todos.map((todo,index) => {
                    //{...this.props}是用来传递TodoMain的todos属性和delete ， change方法的
                    return <TodoItem key={index} index={index} {...this.props} {...todo}></TodoItem>
                })}
            </ul>
        );
    }
}

export default TodoMain;