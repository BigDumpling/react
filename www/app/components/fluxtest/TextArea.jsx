import React from "react";
import ReactDOM from "react-dom";
import NoteStores from "./stores/NoteStores.jsx";

export default class TextArea extends React.Component{

    constructor(...args){
        super(...args);
        this.state = {
            noteText:"I am noteText"
        }
    }


    handleSave(){
        alert("I am TextArea.handleSave()!--------------");
        let noteText = this.state.noteText;
        let id = this.props.id;
        this.props.onSave(noteText,id);
        if(!id){
            ReactDOM.findDOMNode(this.refs.textArea).value = "";
            this.setState({
                noteText:"I am noteText too!"
            });
        }
    }
 
    handleChange(e){
        e.preventDefault();
        this.setState({
            noteText:e.target.value
        });
    }

    render(){
        return(
            <div>
                <textarea className="form-control" ref="textArea" cols="100" rows="10" defaultValue={this.state.noteText} onChange={this.handleChange.bind(this)}></textarea>
                <br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave.bind(this)} />
            </div>
        );
    }
}