import React from "react";
import TextArea from "./TextArea.jsx";
import NoteActions from "./actions/NoteActions.jsx";
import NoteStores from "./stores/NoteStores.jsx";

export default class NoteCreationBox extends React.Component{

    constructor(...args){
        super(...args);

    }

    handleSave(noteText,id){
        if(id){
            NoteActions.editNote({_id:id,text:noteText});
        }else{
            NoteActions.createNote({_id:"bitch",text:noteText});
           
        }
    }

    render(){

        return(
            <div className="col-md-12">
                <TextArea id={this.props.id} onSave={this.handleSave.bind(this)}></TextArea>
            </div>
        );
    }
}