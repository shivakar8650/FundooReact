import React, { Component } from 'react';
import './takenote.scss';
import { Button } from '@material-ui/core';
import { IconButton } from "@material-ui/core";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushSharpIcon from '@material-ui/icons/BrushSharp';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
//component
import NoteServices from '../../services/NoteServices';
import Icons from '../icons/Icon';
const services = new NoteServices();
export class Takenote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: true,
            title: "",
            desc: "",
            color: "#fff",
            noteId: "",
            isArchieve: false,
            isTrash: false,
        }
    }

    handleOpen = () => {
        this.setState({
            openNote: false,
        })
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    close = () => {
        this.setState({
            openNote: true,
        })
        let data = {
            "title": this.state.title,
            "message": this.state.desc,
            "color":this.state.color,
            "isArchive": this.state.isArchive,
            "isTrash": this.state.isTrash,
        }
        console.log(data);
        if(data.title!=="")
        {services.addnote(data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    title: '',
                    desc: '',
                    color:"#fff"
                })
                this.props.getAllNotes();
                console.log("in take a note");
            })
        }
        else{
            console.log("note not create");
        }

    }

    changeColor = (value) => {
        this.setState({
            color: value
        })
    }


    render() {
        return (
            <div className='takenote-container' >
             {/* <div className='takenote-container' > */}

                    {this.state.openNote ?
                        <div className='open-container' onClick={this.handleOpen}  style={{ backgroundColor: this.state.color }}>
                            <input type="text" placeholder='Take a note...' name="desc" className='desc' onChange={(event) => this.handleInput(event)}  style={{ backgroundColor: this.state.color }} />
                            <div className="icons">
                                <CheckBoxOutlinedIcon className='icon' />
                                <BrushSharpIcon className='icon' />
                                <CropOriginalIcon className='icon' />

                            </div>
                        </div>
                        :
                        <div className='close-container'  style={{ backgroundColor: this.state.color }}>
                            <div className='note-title'>
                                <input type="text" placeholder='Title' name="title" className='title' onChange={(event) => this.handleInput(event)} />
                                <PushPinOutlinedIcon className="pin-icon" />
                            </div>
                            <div className='note-desc'>
                                <input type="text" placeholder='Take a note...' name="desc" className='desc1' onChange={(event) => this.handleInput(event)} />
                            </div>
                            <div className="note-icons">
                                <div className="note-icon">
                                    < Icons mode="create" changeColor={this.changeColor} />
                                    {/* < Icons   /> */}

                                </div>
                                <div className="close-btn">
                                    <Button className="close-btn" onClick={this.close}>Close</Button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                )
    }
}

 export default Takenote