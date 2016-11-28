//  import Reflux from "reflux";alert(Reflux);  奇葩，reflux模块不能用import引入，不知道为什么

import NoteActions from "./../actions/NoteActions.jsx";
var Reflux = require("reflux");

 var _notes = ["I am notes-------------ligq"];
 var NoteStores = Reflux.createStore({
     init:function() {

        //  //作死写法，累死煞笔
        //  this.listenTo(NoteActions.createNote,this.onCreate);
        //  this.listenTo(NoteActions.editNote,this.onEdit);

        this.listenToMany(NoteActions);
     },

    //  onCreate(note){
    //      _notes.push(note);
    //      this.trigger(_notes);
    //  },

    //  onEdit(note){
    //      for(let i=0;i<_notes.length;i++){
    //          if( _notes[i].id === note.id ){
    //              _notes[i].text = note.text;
    //              this.trigger(_notes);
    //              break;
    //          }
    //      }
    //  },

    OnCreateNote(note){
        alert("I am NoteStores.OnCreateNote()!----------------------");
        _notes.push(note);
        this.trigger(_notes);
    },

    OnEditNote:function(id){
        alert("I am NoteStores.OnEditNote()!------------------------");
        for(let i=0;i<_notes.length;i++){
            if( _notes[i].id === note.id ){
                _notes[i].text = note.text;
                alert("I am going to trigger _notes!----------------");
                this.trigger(_notes);
                break;
            }
        }
    },

     getNotes(){
         return _notes;
     },

     getNote(id){
         for(let i=0;i<_notes.length;i++){
             if(_notes[i].id === id){
                 return _notes[i];
             }
         }
     }
 });

module.exports = NoteStores;