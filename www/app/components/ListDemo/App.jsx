import React from "react";
import LocalDb from "localDb";
import TodoHeader from "./TodoHeader.jsx";
import TodoMain from "./TodoMain.jsx";
import TodoFooter from "./TodoFooter.jsx";

class App extends React.Component{

    //构造方法
    constructor(...args){                           //定义组件，继承父类
        super(...args);
        this.db = new LocalDb("ReactDemo");  
        this.state = {                              //定义组件状态
            todos:this.db.get('todos') || [],
            isAllChecked: false
        };
    }

    // 判断是否所有任务的状态都完成，同步底部的全选框
    allChecked(){
        let isAllChecked = false;

        //对this.state.todos 里的对象做遍历，返回每个todo的isDone属性，当全部为true的时候，为true
        if(this.state.todos.every(todo => todo.isDone)){
            isAllChecked = true;
        }
    }

    //添加任务，是传递给Header组件的方法
    addTodo(todoItem){
        this.state.todos.push(todoItem);
        this.setState({
            todos:this.state.todos
        });
        this.db.set("todos",this.state.todos);
        this.allChecked();
    }
 
    //删除任务
    deleteTodo(index){
        this.state.todos.splice(index,1);                //删除数组中指定index的元素
        this.setState({todos:this.state.todos});        //修改state，重新渲染render
        this.db.set("todos",this.state.todos);          //修改存储的数据
    }

    //清除所有已完成的任务
    clearAll(){

        //过滤掉数组中所有isDone为true的元素
        let todos = this.state.todos.filter(todo => !todo.isDone);
        console.log(todos);
        this.setState({
            todos:todos,
            isAllChecked:false
        });

        this.db.set("todos",this.state.todos);
    }

    //改变元素，修改完this.state后必须通过this.setState()才能重新渲染页面
    changeTodoState(index,isDone,isCheckAll = false){
        
        if(isCheckAll){
            this.setState({
                todos:this.state.todos.map(todo => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked:isDone
            });
        }else{
            this.state.todos[index].isDone = isDone;
            this.setState({
                todos:this.state.todos
            });
        }

        this.allChecked();
        this.db.set("todos",this.state.todos);
    }

    render(){

        let info = {
            isAllChecked:this.state.isDone,
            todoCount:this.state.todos.length || 0,
            todoDoneCount:this.state.todos.filter(todo => todo.isDone).length || 0
        }

        return (
            <div className="todo-wrap">
                <TodoHeader addTodo={this.addTodo.bind(this)}></TodoHeader>
                <TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}></TodoMain>
                <TodoFooter changeTodoState={this.changeTodoState.bind(this)} clearAll={this.clearAll.bind(this)} {...info} {...this.props}></TodoFooter>
            </div>
        );
    }


}

export default App