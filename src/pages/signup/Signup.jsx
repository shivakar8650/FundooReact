import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import './signup.css';
import Button from '@mui/material/Button';
export class Signup extends Component {
    render() {
        return (
            <div class="main-container">
                <div class="l-main-container">
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
                    <div > <h1 class="heading">Create Your Account </h1></div>
                    <div class="row-Container name"  >

                        <div className='small'> <TextField id="outlined-basic" size="small" label="First name" variant="outlined" /></div>
                        <div className='small'>  <TextField id="outlined-basic" size="small" label="Last name" variant="outlined" /> </div>
                    </div>
                    <div class="row-Container" >
                        <TextField id="outlined-basic" size="small" fullWidth label="Username" helperText="You can use letters numbers & periods" variant="outlined" />
                    </div>
                    <div class="email-option">Use my current email address instead </div>
                    <br />
                    <div class="row-Container name" >
                        <div className='small'> <TextField id="outlined-basic" size="small" label="Password" variant="outlined" />  </div>
                        <div className='small'> <TextField id="outlined-basic" size="small" label="Confirm" variant="outlined" />  </div>
                    </div>
                    <div class="bellow">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div class="row-Container password">
                        <input class="check" type="checkbox" />
                        <p class="showbox">Show Password</p>
                    </div>
                    <div class="row-Container bottum">
                        <div class="email-option">Sign in instead</div>
                        <div class="">
                            {/* <button  class="btn btn-primary">Next</button> */}
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div class="r-main-container">
                    <div class="image-container">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                    </div>
                    <div className="image-discription">
                        One account. All of Google working for you.
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
