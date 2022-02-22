import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import './displaynote.scss'
import Icons from '../icons/Icon';
import NoteServices from '../../services/NoteServices';



const services = new NoteServices();


function Displaynote(props) {
    const [open, setopen] = useState(false)
    const [dialog, setdialog] = useState({
        title: "",
        description: "",
        noteId: "",
      });
    const [notes, setNotes] = useState({
        title: "",
        description: "",
        noteId: "",
        color: "#fff",
        isArchive: false,
        isTrash: false,
    })
   

    const handleOpen = (item) => {
        setopen(true)
        setNotes({
            noteId:item.noteId,
            title: item.title,
            description: item.message,
            noteId: item.noteId,
            color: item.color,
            isArchive: item.isArchive,
            isTrash: item.isTrash,
        })
    }

    const handleClose = (notes) => {
        setopen(false)
        let data = {
            "noteId": notes.noteId,
            "title": notes.title,
            "message": notes.description,
            "color":notes.color,
            "isArchive": notes.isArchive,
            "isTrash": notes.isTrash,
         
          };
          services. updatenotes(data)
            .then((result) => {
                props.getAllNotes();
            })
            .catch((err) => {});
     
    }

    const changeColor = () => {
        console.log("in changecolor")
        props.getAllNotes();
    };


    const archieveChange = (id) => {
        let data = {
            noteId: id,
        };
        services.archivenotes(data)
            .then((res) => {
                console.log(res.data);
                console.log(" innnnn  archive",props );
                
                props.getAllNotes();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const isdeleteChange = (id) => {
        let data = {
            noteId: id,
        };
        services.deletenotes(data)
            .then((res) => {
                console.log(res.data);
                props.getAllNotes();
            })
            .catch((err) => {
                console.log(err);
            });
    }


    
  const   changenotesInput = (e, id) => {
    setNotes((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value, noteId: id };
    });
    console.log(notes);
  };
    console.log("ooooooo",props)

    return (
        <div className='displaynote-container'>
            {props.notesArr.map((note, index) => {
                // if (!note.isArchive && !note.isTrash) {
                    return (<div className='close-container'  style={{ backgroundColor: note.color }}>
                        <div className='note-title' onClick={() => handleOpen(note)}>

                            <input type="text" placeholder='Title' name="title" className='title' value={note.title}
                                style={{ backgroundColor: 'transparent' }} />
                            <PushPinOutlinedIcon className="pin-icon" />
                        </div>
                        <div className='note-desc' onClick={() => handleOpen(note)}>
                            <input type="text" placeholder='Take a note...' name="desc" className='desc1' value={note.message}
                                style={{ backgroundColor: 'transparent' }} />
                        </div>

                        <div className="note-icons">
                            <div className="note-icon">
                                <Icons mode="update"
                                    changeColor={() =>changeColor}
                                    notes={note}
                                    delete={() => isdeleteChange(note.noteId)}
                                    archieve={() => archieveChange(note.noteId)} />
                            </div>

                        </div>
                    </div>
                    )
                // }

            })
            }
            <div >
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{ backgroundColor: notes.color }}>
                        <Typography gutterBottom >
                            <input type="text" style={{ border: "none", outline: "none", backgroundColor: notes.color }}  name="title"
                              onChange={(e) => {
                                changenotesInput(e, notes.noteId);
                              }}
                              defaultValue={notes.title} />
                        </Typography>

                    </BootstrapDialogTitle>
                    <DialogContent style={{ backgroundColor: notes.color }} >
                        <input type="text" style={{ border: "none", outline: "none", backgroundColor: notes.color }} name="description"
                               onChange={(e) => {
                                changenotesInput(e, notes.noteId);
                              }}
                              defaultValue={notes.description} />
                    </DialogContent>
                    <DialogActions style={{ backgroundColor: notes.color }}>
                        <Icons mode="update" 
                            changeColor={() =>changeColor}
                            notes={notes}
                            delete={() => isdeleteChange(notes.noteId)}
                            archieve={() => archieveChange(notes.noteId)}
                        />
                        <Button autoFocus 
                            onClick={() => handleClose(notes)}> Close </Button>
                     
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </div>


    )
}

export default Displaynote



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: theme.spacing(70)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        width: theme.spacing(72)
    },
}));


const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};


