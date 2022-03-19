import React, { Component } from 'react'
import Displaynote from '../../component/displayNote/Displaynote';
import Takenote from '../../component/takeNote/Takenote';
import NoteServices from '../../services/NoteServices';

const service = new NoteServices();
export class Trash extends Component {
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
           let filterData= res.data.notesdata.filter(data=> data.isTrash===true)
           console.log(res.data);
           console.log(filterData);
           this.setState({
               notesArr:filterData
               
           });
        }).catch((err) => {
          console.log(err);
        });
        
    }

    render() {
        return (
            <div display={"flex"}>
                <Displaynote notesArr={this.state.notesArr} getAllNotes={this.getAllNotes} />
            </div>
        )
    }
}

export default Trash
