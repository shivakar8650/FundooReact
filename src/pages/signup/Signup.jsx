import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import './signup.css';
import Button from '@mui/material/Button';
import { Checkbox,FormControlLabel } from '@mui/material';
export class Signup extends Component {
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
                <div className="l-main-container">
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
                    <div > <h1 className="heading">Create Your Account </h1></div>
                    <div className="row-Container name"  >

                        <div className='small'> <TextField id="outlined-basic" fullWidth size="small" label="First name" variant="outlined" /></div>
                        <div className='small'>  <TextField id="outlined-basic" fullWidth size="small" label="Last name" variant="outlined" /> </div>
                    </div>
                    <div className="row-Container" >
                        <TextField id="outlined-basic" size="small" fullWidth label="Username" helperText="You can use letters numbers & periods" variant="outlined" />
                    </div>
                    <div className="email-option">Use my current email address instead </div>
                    <br />
                    <div className="last row-Container name " >
                        <div className='small'> <TextField id="outlined-basic" type={this.state.type}  fullWidth size="small" label="Password" variant="outlined" />  </div>
                        <div className=" last small"> <TextField id="outlined-basic" type={this.state.type}  fullWidth size="small" label="Confirm" variant="outlined" />  </div>
                    </div>
                    <div className="bellow">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div className='checkbox'>
                            <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
                        </div>
                    <div className="bottum">
                              <div> <p>Sign in instead</p> </div>
                        <div >
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="r-main-container">
                    <div className="image-container">
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
