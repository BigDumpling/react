import React from "react";
import TextArea from "./TextArea.jsx";

export default class NoteCreationBox extends React.Component{

    constructor(...args){
        super(...args);

    }

    handleSave(){
        alert("I am NoteCreationBox.handleSave()!---------------------");
    }

    render(){
        return(
            <div className="col-md-12">
                <TextArea onSave={this.handleSave.bind(this)}></TextArea>
            </div>
        );
    }
}