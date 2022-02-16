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




function Displaynote(props) {
    const [open, setopen] = useState(false)

    // const [dialognotes, setDialognotes] = useState({
    //     title: "",
    //     description: "",
    //     _id: "",
    //   });
    //   const [notes, setNotes] = useState({
    //     _id: "",
    //     title: "",
    //     description: "",
    //     isArchieved: "",
    //     isDeleted: "",
    //     color: "#ffffff",
    //   });
    //   const changeColor = () => {
    //     props.getnotes();
    //   };
    //   const archieveChange = (id) => {
    //     let data = {
    //       _id: id,
    //       isArchieved: true,
    //     };
    //     Noteservice.updatenotes(data)
    //       .then((result) => {
    //         props.getnotes();
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    //   const isdeleteChange = (id) => {
    //     let data = {
    //       _id: id,
    //       isDeleted: true,
    //     };
    //     Noteservice.updatenotes(data)
    //       .then((result) => {
    //         console.log("hi");
    //         props.getnote();
    //       })
    //       .catch((err) => {});
    //   };

    //   const handleOpen = (data) => {
    //     setNotes(data);

    //     setOpen(true);
    //     setDialognotes({
    //       title: data.title,
    //       description: data.description,
    //     });

    //     // console.log(notes);
    //   };
    //   const handleClose = (id) => {
    //     console.log(id, dialognotes._id, "inside closeeee");
    //     setOpen(false);
    //     let data = {
    //       // '_id':dialognotes._id,
    //       _id: id,
    //       title: dialognotes.title,
    //       description: dialognotes.description,
    //     };
    //     Noteservice.updatenotes(data)
    //       .then((result) => {
    //         props.getnote();
    //       })
    //       .catch((err) => {});
    //   };

    //   const style = {
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     width: 600,
    //     bgcolor: "#ffffff",
    //     border: "1px solid #000",
    //     boxShadow: 24,
    //     p: 4,
    //   };

    //   const changeField = (e, id) => {
    //     setDialognotes((previousvalues) => {
    //       return { ...previousvalues, [e.target.name]: e.target.value, _id: id };
    //     });
    //     console.log(dialognotes);
    //   };





















    const [notes, setNotes] = useState({
        title: "",
        description: "",
        noteId: "",
        color: "#fff"
    })

    const handleOpen = (item) => {
        setopen(true)
        setNotes({
            title: item.title,
            description: item.message,
            noteId: item.noteId,
            color: item.color
        })
    }

    const handleClose = () => {
        setopen(false)
    }
    const changeColor = () => {
        props.getAllNotes();
    };
    return (
        <div className='displaynote-container'>
            {props.notesArr.map((note, index) => {
                return (<div className='close-container' onClick={() => handleOpen(note)} style={{ backgroundColor: note.color }}>
                    <div className='note-title'>

                        <input type="text" placeholder='Title' name="title" className='title' value={note.title}
                            style={{ backgroundColor: 'transparent' }} />
                        <PushPinOutlinedIcon className="pin-icon" />
                    </div>
                    <div className='note-desc'>
                        <input type="text" placeholder='Take a note...' name="desc" className='desc1' value={note.message}
                            style={{ backgroundColor: 'transparent' }} />
                    </div>

                    <div className="note-icons">
                        <div className="note-icon">
                            <Icons mode="update" changeColor={changeColor} notes={notes} />
                        </div>

                    </div>
                </div>
                )

            })
            }
            <div >
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{ backgroundColor: notes.color }}>
                        <Typography gutterBottom >
                            <input type="text" style={{ border: "none", outline: "none", backgroundColor: notes.color }} value={notes.title} name="title" />
                        </Typography>

                    </BootstrapDialogTitle>
                    <DialogContent style={{ backgroundColor: notes.color }} >
                        <input type="text" style={{ border: "none", outline: "none", backgroundColor: notes.color }} value={notes.description} name="description" />

                    </DialogContent>
                    <DialogActions style={{ backgroundColor: notes.color }}>
                        <Icons mode="update" changeColor={changeColor} notes={notes} />

                        <Button autoFocus onClick={() => setopen(false)}> Close </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </div>


    )
}

export default Displaynote

