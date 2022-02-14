import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushSharpIcon from '@material-ui/icons/BrushSharp';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
// import Icon from '../icons/Icon'
import './displaynote.scss'


export class Displaynote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayNote: true
        }
    }

    render() {
        return (
            <div className='displaynote-container'>
                {/* {this.props.notesArr.map(() => { */}
                        <div className='close-container'>
                            <div className='note-title'>
                                <input type="text" placeholder='Title' name="title" className='title' onChange={(event) => this.handleInput(event)} />
                                <PushPinOutlinedIcon className="pin-icon" onClick={(event) => this.pin(event)} />
                            </div>
                            <div className='note-desc'>
                                <input type="text" placeholder='Display a note...' name="desc" className='desc1' onChange={(event) => this.input(event)} />
                            </div>
                            <div className="note-icons">
                                <div className="note-icon">
                                    <AddAlertOutlinedIcon className="iconlist1" />
                                    <PersonAddOutlinedIcon className="iconlist" />
                                    <ImageOutlinedIcon className="iconlist" />
                                    <ArchiveOutlinedIcon className="iconlist" />
                                    <MoreVertOutlinedIcon className="iconlist" />
                                </div>
                                <div className="close-btn">
                                    <Button className="close-btn" onClick={this.close}>Close</Button>
                                </div>
                            </div>
                        </div>
                    {/* })
                }  */}
            </div>

        )
    }
}

export default Displaynote
