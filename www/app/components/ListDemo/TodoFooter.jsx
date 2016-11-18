import React from "react";

class TodoFooter extends React.Component{

    // handlerDeleteAll(){
    //     this.props.clearAll();       //onClick={this.handlerDeleteAll.bind(this)}
    // }

    handlerSelectAll(e){
        this.props.changeTodoState(null,e.target.checked,true);
    }

    render(){

        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerSelectAll.bind(this)} />全选
                </label>
                <span className="text-success">已完成{this.props.todoDoneCount}个任务 / 全部{this.props.todoCount}个任务</span>
                <button className="btn btn-danger" onClick={this.props.clearAll.bind(this)} >清除全部任务</button>
            </div>
        );
    }
}

export default TodoFooter;