import React from "react";

export default class TextArea extends React.Component{

    constructor(...args){
        super(...args);
        this.state = {
            noteText:"I am noteText"
        }
    }


    handleSave(){
        alert("I am TextArea.handleSave()!--------------");
    }


    render(){
        return(
            <div>
                <textarea className="form-control" ref="textArea" cols="100" rows="10" defaultValue={this.state.noteText}></textarea>
                <br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave.bind(this)} />
            </div>
        );
    }
}