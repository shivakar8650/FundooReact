import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import './signup.css';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
// import axios from "axios";
import { Link } from "react-router-dom";
// import { withRouter } from 'react-router';
import Userservices from '../../services/UserServices';
// import { Redirect } from 'react-router';
import { Navigate } from "react-router-dom";



const users = new Userservices();

export class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            redirect:false,
            type: "password",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm: "",
            firstNameError: false,
            lastNameEroor: false,
            emailError: false,
            passwordError: false,
            confirmError: false
        };
    }


    validation = () => {
        var isError = false;
        const error = this.state;
        error.firstNameError = this.state.firstName === '' ? true : false;
        error.lastNameEroor = this.state.lastName === '' ? true : false;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirmError = this.state.confirm === '' ? true : false;
        this.setState({
            ...error
        })
        isError = error.firstNameError || error.lastNameEroor || error.emailError || error.passwordError || error.confirmError;
        return isError;
    }

    showPassword = (event) => {
        event.target.checked ? this.setState({ type: "text" }) : this.setState({ type: "password" })
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

  
    next = () => {
        let valid = this.validation();
        let data = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "emailId": this.state.email,
            "password": this.state.password
        };
        if (!valid) {
            users.Register(data)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        redirect:true
                    });
                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
          if(this.state.redirect)
          {
             return <Navigate to="/login" />
          }
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

                        <div className='small'>
                            <TextField
                                name="firstName"
                                id="outlined-basic 4"
                                fullWidth
                                type="text"
                                size="small"
                                label="First name"
                                variant="outlined"
                               
                                error={this.state.firstNameError}
                                helperText={this.state.firstNameError ? "firstname required " : " "}
                                onChange={(e) => this.changeHandle(e)} />
                        </div>
                        <div className='small'>
                            <TextField
                                name="lastName"
                                id="outlined-basic 5"
                                fullWidth
                                type="text"
                                size="small"
                                label="Last name"
                                variant="outlined"
                               
                                error={this.state.lastNameEroor}
                                helperText={this.state.lastNameEroor ? "lastname required " : " "}
                                onChange={(e) => this.changeHandle(e)} />
                        </div>
                    </div>
                    <div className="row-Container" >
                        <TextField
                            name="email"
                            id="outlined-basic 1"
                            size="small"
                            fullWidth
                            type="text"
                            label="Username"
                            helperText="You can use letters numbers & periods"
                            variant="outlined"
                          
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "Email is required" : ' '}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <div className="email-option"> Use my current email address instead  </div>
                    <br />
                    <div className="last row-Container name " >
                        <div className='small'>
                            <TextField
                                name="password"
                                id="outlined-basic 2"
                                type={this.state.type}
                                fullWidth size="small"
                                label="Password"
                                variant="outlined"
                                
                                error={this.state.passwordError}
                                helperText={this.state.passwordError ? "Password is required" : ' '}
                                onChange={(e) => this.changeHandle(e)} />
                        </div>
                        <div className=" last small">
                            <TextField
                                name="confirm"
                                id="outlined-basic 3"
                                type={this.state.type}
                                fullWidth
                                size="small"
                                label="Confirm"
                                variant="outlined"
                               
                                error={this.state.confirmError}
                                helperText={this.state.confirmError ? "Confirm  is required" : ' '}
                                onChange={(e) => this.changeHandle(e)} />
                        </div>
                    </div>
                    <div className="bellow">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div className='checkbox'>
                        <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
                    </div>
                    <div className="bottum">
                        <div> <p> <Link to="/login" style={{textDecoration: "none",color:"#1a73e8"}}>Signin instead</Link></p> </div>
                        <div >
                            <Button variant="contained" onClick={this.next}>Next</Button>
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
