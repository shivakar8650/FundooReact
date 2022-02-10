import React, { Component } from 'react'
import './reset.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Checkbox,FormControlLabel } from '@mui/material';
import Userservices from '../../services/UserServices';



const users = new Userservices();
export class Reset extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          type: "password",
          password: "",
          confirm: "",
          passwordError: false,
          confirmError: false
        };
      }
    
      showPassword = (event) => {
        event.target.checked ? this.setState({type:"text"}) : this.setState({type:"password"  })
    }

    validation = () => {
      var isError = false;
      const error = this.state;
      error.passwordError = this.state.password === '' ? true : false;
      error.confirmError = this.state.confirm === '' ? true : false;
      this.setState({
          ...error
      })
      isError = error.passwordError || error.confirmError;
      return isError;
  }

  changeHandle = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

next = () => {
    let valid = this.validation();
    let data = {
      "newPassword": this.state.password,
      "confirmPassword": this.state.confirm
    }

    if (!valid) {
      users.ResetPassword(data)
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        })
    }
}
    
  render() {
    return (
        <div className="r-container">
        <div className ="re-main-container">
               <div className="r-logo">
                    <p>
                        <span style={{ color: "#4285F4" }}>F</span>
                        <span style={{ color: "#DB4437" }}>u</span>
                        <span style={{ color: "#F4B400" }}>n</span>
                        <span style={{ color: "#4285F4" }}>d</span>
                        <span style={{ color: "#0F9D58" }}>o</span>
                        <span style={{ color: "#DB4437" }}>o</span>
                    </p>
                </div>
            <div > <h1 className="r-heading">Reset Password </h1></div>
            <div  className="r-row-Container" >
                <TextField
                name="password" 
                id="outlined-basic" 
                type={this.state.type} 
                fullWidth
                label="New password" 

                error={this.state.passwordError}
                helperText={this.state.passwordError ? "Password is required" : ''}
                onChange={(e) => this.changeHandle(e)}/>
            </div>
            <div  className="r-row-Container" >
            <TextField 
            name="confirm"
            id="outlined-basic" 
            type={this.state.type}  
            fullWidth 
            label="Confirm password"  
            
            error={this.state.confirmError}
            helperText={this.state.confirmError ? "Confirm Password is required" : ''}
            onChange={(e) => this.changeHandle(e)}/>
            </div>           
            <div  className="r-bottum">
            <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
            </div>
                <div >
                <Button variant="contained" onClick={this.next}>Next</Button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Reset
