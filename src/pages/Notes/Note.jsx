import React, { Component } from 'react';
import Displaynote from '../../component/displayNote/Displaynote';
import Takenote from '../../component/takeNote/Takenote';
import NoteServices from '../../services/NoteServices';

const service = new NoteServices();
export class Notes extends Component {
    constructor(props){
        super(props);
        this.state={
            notesArr:[]
        }
    }
    
    componentDidMount=()=>{
        this.getAllNotes();
    }
    getAllNotes=()=>{
        // let data = {
        //     "title":  this.state.title,
        //     "discription": this.state.discription
        //   };
        service.getnotes()
        .then((res)=>{
           this.setState({
               notesArr:res.data
           });
           console.log(res.data);
        }).catch((err) => {
          console.log(err);
        });
        
    }

    render() {
     
        return (
            <div>
                <Takenote getAllNotes={this.getAllNotes}/>
                <Displaynote notesArr={this.state.notesArr} />
            </div>
        )
    }
}

export default Notes