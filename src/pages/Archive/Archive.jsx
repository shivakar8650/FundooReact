import React, { Component } from 'react'
import Displaynote from '../../component/displayNote/Displaynote';
import NoteServices from '../../services/NoteServices';
import Takenote from '../../component/takeNote/Takenote';
const service = new NoteServices();
export class Archive extends Component {
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
           // let data=filter data
           let filterData= res.data.notesdata.filter(data=>data.isArchive===true)
           console.log(res.data);
           console.log(filterData);
           this.setState({
            //    notesArr:res.data.notesdata
               notesArr:filterData
               
           });
        }).catch((err) => {
          console.log(err);
        });
        
    }

  render() {
    return (
    
            <div display={"flex"}>
                {/* <Takenote getAllNotes={this.getAllNotes}/> */}
                <Displaynote notesArr={this.state.notesArr} getAllNotes={this.getAllNotes} />
            </div>
        
    )
  }
}

export default Archive
