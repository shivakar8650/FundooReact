import React, { Component } from 'react'
import './signin.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export class Signin extends Component {
  render() {
    return (
      <div>
           <div className="s-container">
                <div className ="s-main-container">
                       <div className="s-logo">
                            <p>
                                <span style={{ color: "#4285F4" }}>F</span>
                                <span style={{ color: "#DB4437" }}>u</span>
                                <span style={{ color: "#F4B400" }}>n</span>
                                <span style={{ color: "#4285F4" }}>d</span>
                                <span style={{ color: "#0F9D58" }}>o</span>
                                <span style={{ color: "#DB4437" }}>o</span>
                            </p>
                        </div>
                    <div > <h1 className="s-heading">Sign in </h1></div>
                    <div > <h3  className="s-title">Use your Google Account</h3></div>
                    <div  className="s-Container" >
                        <TextField id="outlined-basic"  fullWidth label="Email or phone"  />
                    </div>
                    <div className="s-Container s-password" >
                    <TextField id="outlined-basic"  fullWidth label="Password"  />
                    </div>
                    <div  className="link">Forget Email? </div>
                    <div className="s-bellow">Not your computer? Use Guest mode to sign in privately</div>                  
                    <div  className="s-Container s-bottum">
                        <div  className="link">Create account</div>
                        <div >
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Signin
