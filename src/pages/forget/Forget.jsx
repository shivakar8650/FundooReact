import React, { Component } from 'react'
import './foeget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export class Forget extends Component {
       constructor(props) {
        super(props);
    
        this.state = {
    
          email: "",
          emailError: false,
        };
      }
    
        validation = () => {
          var isError = false;
          const error = this.state;
          error.emailError = this.state.email === '' ? true : false;
          this.setState({
            ...error
          })
          isError = error.emailError;
          return isError;
        }
    
    
        changeHandle = (e) => {
          this.setState({
            [e.target.name]: e.target.value
          });
        }
    
        next = () => {
          let valid = this.validation();
          if (!valid) {
            console.log(valid)
          }
        }
    
  render() {
    return (
        <div className="f-container">
        <div className ="f-main-container">
               <div className="f-logo">
                    <p>
                        <span style={{ color: "#4285F4" }}>F</span>
                        <span style={{ color: "#DB4437" }}>u</span>
                        <span style={{ color: "#F4B400" }}>n</span>
                        <span style={{ color: "#4285F4" }}>d</span>
                        <span style={{ color: "#0F9D58" }}>o</span>
                        <span style={{ color: "#DB4437" }}>o</span>
                    </p>
                </div>
            <div > <h1 className="f-heading">Find your email </h1></div>
            <div > <h3  className="f-title">Enter your phone number or recovery email</h3></div>
            <div  className="f-row-Container" >
                <TextField
                name="email"
                id="outlined-basic"
                fullWidth
                label="Email or phone" 
                error={this.state.emailError}
                helperText={this.state.emailError ? "Email required " : " "}
                onChange={(e) => this.changeHandle(e)} />
            </div>
                        
            <div  className="f-bottum">
                <div >
                <Button variant="contained" onClick={this.next}>Next</Button>
                </div>
            </div>
        </div>
    </div>

    )
  }
}

export default Forget
