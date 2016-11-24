import React from "react";
import NoteCreationBox from "./NoteCreationBox.jsx";
import NoteListBox from "./NoteListBox.jsx";

export default class NoteApp extends React.Component{

    constructor(...args){
        super(...args);
        this.state = {
            id : "ligq"
        }
    }

    onEdit(){
        alert("I am NoteApp.onEdit()!------------------------");
        
    }

    onAdd(){
        alert("I am NoteApp.onAdd()!-------------------------");
    }

    render(){

        return(
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h3>React Comments List</h3>
                    </div>
                </div>
                <div className="row">
                    <NoteCreationBox id={this.state.id} ref="noteBox" />
                    <NoteListBox onEdit={this.onEdit.bind(this)} onAdd={this.onAdd.bind(this)} />
                </div>
            </div>
        );
    }
}