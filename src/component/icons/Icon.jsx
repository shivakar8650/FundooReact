import React from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from '@mui/material/IconButton';
import './icon.scss'
import { Typography } from '@mui/material';
import { Popover } from '@mui/material';
import NoteServices from '../../services/NoteServices';


const services = new NoteServices();

function Icons(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [anchor, setAnchor] = React.useState(null);



  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen1 = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchor(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchor);
  const id = open ? 'simple-popover' : undefined;
  const id1 = open1 ? 'simple-popover' : "";

  const colrs = ["#f28b82", '#fbbc04', '#fff475', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#ccff90', '#a7ffeb', '#e6c9a8']

  const handlecolor = (value) => {
    if (props.mode === "create") {
      props.changeColor(value)
    }
    else if (props.mode == "update") {
      let data = {
        "noteId": props.notes.noteId,
        "color": value
      }
      console.log(data.noteId);
      console.log(value);
      // props.changeColor(value)
      services.updatecolor(data).then((res) => {
        console.log(res.data);
        props.changeColor();
      }).catch((err) => {
        console.log(err);
        // props.changeColor();
      })
    }
  }
 
  const Archievenote=()=>{
    if(props.mode==="create"){
      props.archieveChange()
      }
      else if(props.mode==="update"){
        props.archieve()
      }
  }

  const deletenote=()=>{
    if(props.mode==="update"){
      props.delete()
      }
  }

    return (
      <div className='icons'>
        <IconButton><AddAlertOutlinedIcon htmlColor="grey" /></IconButton>
        <IconButton><PersonAddAlt1OutlinedIcon htmlColor="grey" /></IconButton>
        {/* <IconButton><ColorLensOutlinedIcon htmlColor="grey" variant="contained" aria-describedby={id} /></IconButton> */}
        <IconButton><ColorLensOutlinedIcon htmlColor="grey" onClick={handleOpen} variant="contained" aria-describedby={id} /></IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >

          <Typography sx={{ p: 1 }}>
            <div className='icon-popover'>
              {
                colrs.map((colorcode) => {
                  return <div className='icon-pop' style={{ backgroundColor: colorcode }} onClick={() => handlecolor(colorcode)}></div>
                  // return (<div className='icon-pop' style={{ backgroundColor: colorcode }} ></div>)

                }
                )}
            </div>
          </Typography>
        </Popover>


        <IconButton><PhotoOutlinedIcon htmlColor="grey" /> </IconButton>
        <IconButton><ArchiveOutlinedIcon htmlColor="grey" onClick={()=>Archievenote()} /></IconButton>
        <IconButton className='moreoption'><MoreVertOutlinedIcon htmlColor="grey" onClick={handleOpen1} variant="contained" aria-describedby={id1}/></IconButton>
       {/* <IconButton className='moreoption'><MoreVertOutlinedIcon htmlColor="grey" variant="contained" aria-describedby={id1} /></IconButton> */}

       <Popover
          id={id1}
          open={open1}
          anchorEl={anchor}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >

          <Typography sx={{ p: 1 }}>
            <div className='iconpopover'  onClick={deletenote} >

              Delete Note
            </div>
          </Typography>
        </Popover> 
      </div>
      )
  }

export default Icons;




