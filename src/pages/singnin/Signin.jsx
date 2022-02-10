import React, { Component } from 'react'
import './signin.css';
// import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Userservices from '../../services/UserServices';
import Signup from '../signup/Signup';

const users = new Userservices();
export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {

      email: "",
      password: "",
      emailError: false,
      passwordError: false,
    };
  }

  validation = () => {
    var isError = false;
    const error = this.state;
    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;
    this.setState({
      ...error
    })
    isError = error.emailError || error.passwordError;
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
      "emailId":  this.state.email,
      "password": this.state.password
    };
    if (!valid) {
      users.login(data)
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }

  }


  render() {
    return (
      <div>
        <div className="s-container">
          <div className="s-main-container">
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
            <div > <h3 className="s-title">Use your Google Account</h3></div>
            <div className="s-Container" >
              <TextField
                name="email"
                id="outlined-basic"
                fullWidth label="Email or phone"
               
                error={this.state.emailError}
                helperText={this.state.emailError ? "Email required " : " "}
                onChange={(e) => this.changeHandle(e)} />
            </div>
            <div className="s-Container s-password" >
              <TextField
                name="password"
                id="outlined-basic"
                fullWidth label="Password"
              
                error={this.state.passwordError}
                helperText={this.state.passwordError ? "Password required " : " "}
                onChange={(e) => this.changeHandle(e)} />
            </div>
            <div className="link">Forget Email? </div>
            <div className="s-bellow">Not your computer? Use Guest mode to sign in privately</div>
            <div className="s-Container s-bottum">
              {/* <div className="link"> <Link to="/Signup">Create account</Link></div> */}
              <div className="link"> Create account </div>
              <div >
                <Button variant="contained" onClick={this.next}>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Signin
