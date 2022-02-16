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
        console.log("data find");
        this.getAllNotes();

    }
    getAllNotes=()=>{
        service.getnotes()
        .then((res)=>{
           this.setState({
               notesArr:res.data.notesdata
           });
           console.log(res.data);
        //    console.log(res.data.message);
        //    console.log(this.state.notesArr);
        }).catch((err) => {
          console.log(err);
        });
        
    }

    render() {
        return (
            <div display={"flex"}>
                <Takenote getAllNotes={this.getAllNotes}/>
                <Displaynote notesArr={this.state.notesArr} />
            </div>
        )
    }
}

export default Notes