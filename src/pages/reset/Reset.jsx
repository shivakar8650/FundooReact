import React, { Component } from 'react'
import './reset.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Checkbox,FormControlLabel } from '@mui/material';
export class Reset extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          type: "password"
        };
      }
    
      showPassword = (event) => {
        event.target.checked ? this.setState({type:"text"}) : this.setState({type:"password"  })
    }
    
  render() {
    return (
        <div className="main-container">
        <div className ="l-main-container">
               <div className="logo">
                    <p>
                        <span style={{ color: "#4285F4" }}>F</span>
                        <span style={{ color: "#DB4437" }}>u</span>
                        <span style={{ color: "#F4B400" }}>n</span>
                        <span style={{ color: "#4285F4" }}>d</span>
                        <span style={{ color: "#0F9D58" }}>o</span>
                        <span style={{ color: "#DB4437" }}>o</span>
                    </p>
                </div>
            <div > <h1 className="heading">Reset Password </h1></div>
            <div  className="row-Container" >
                <TextField id="outlined-basic" type={this.state.type} fullWidth label="New password"  />
            </div>
            <div  className="row-Container" >
            <TextField id="outlined-basic" type={this.state.type}  fullWidth label="Confirm password"  />
            </div>           
            <div  className="bottum">
            <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
            </div>
                <div >
                    <Button variant="contained">Next</Button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Reset
