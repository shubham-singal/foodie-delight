import React from 'react';
import {register} from "../../service/UserService";

class RegisterPageComponent extends React.Component {
    state = {
        user: {
            username: '',
            password: '',
            validatePassword: '',
            email: '',
            firstName: '',
            lastName: '',
            role: 'CUSTOMER'
        }
    }
    register = (user) => {
        if(this.state.user.username === "" || this.state.user.password === "" || this.state.user.validatePassword === ""){
            alert('Username and password are required')
            return
        }
        register(user)
            .then(newUser => {
                this.props.setCurrentUser(newUser)
                this.props.history.push('/profile')})
    }

    render() {
        return (
            <div className="container mt-3">
                <input value={this.state.user.username} placeholder="Username" className="form-control"
                       onChange={(e) => {
                           const newUserName = e.target.value
                           this.setState(prevState => ({
                               user: {
                                   ...prevState.user,
                                   username: newUserName
                               }
                           }))
                       }
                       }/>
                <br/>
                <input value={this.state.user.password} placeholder="Password" type="password" className="form-control"
                       onChange={(e) => {
                           const newPassword = e.target.value
                           this.setState(prevState => ({
                               user: {
                                   ...prevState.user,
                                   password: newPassword
                               }
                           }))
                       }
                       }/>
                <br/>
                <input value={this.state.user.validatePassword} placeholder="Verify Password" type="password"
                       className="form-control"
                       onChange={(e) => {
                           const newValidatePassword = e.target.value
                           this.setState(prevState => ({
                               user: {
                                   ...prevState.user,
                                   validatePassword: newValidatePassword
                               }
                           }))
                       }
                       }/>
                <br/>
                {this.state.user.validatePassword !== '' &&
                this.state.user.password !== this.state.user.validatePassword &&
                <p>
                    Please verify password
                </p>
                }
                <input value={this.state.user.email} placeholder="Email" type="email" className="form-control"
                       onChange={(e) => {
                           const newEmail = e.target.value
                           this.setState(prevState => ({
                               user: {
                                   ...prevState.user,
                                   email: newEmail
                               }
                           }))
                       }
                       }/>
                <br/>
                <input value={this.state.user.firstName} placeholder="First Name" type="firstName" className="form-control"
                       onChange={(e) => {
                           const newFirstName = e.target.value
                           this.setState(prevState => ({
                               user: {
                                   ...prevState.user,
                                   firstName: newFirstName
                               }
                           }))
                       }
                       }/>
                <br/>
                <input value={this.state.user.lastName} placeholder="Last Name" type="lastName" className="form-control"
                       onChange={(e) => {
                           const newLastName = e.target.value
                           this.setState(prevState => ({
                               user: {
                                   ...prevState.user,
                                   lastName: newLastName
                               }
                           }))
                       }
                       }/>
                <br/>
                <select
                    className="form-control"
                    onChange={(e) => {
                        const newRole = e.target.value
                        this.setState(prevState => ({
                            user: {
                                ...prevState.user,
                                role: newRole
                            }
                        }))
                    }}>
                    <option value={"CUSTOMER"}>Customer</option>
                    <option value={"OWNER"}>Business Owner</option>
                </select>
                <div className="row mt-2 d-flex justify-content-center">
                    <button className="btn btn-primary mr-2"
                            onClick={() => {
                                if (this.state.user.password === this.state.user.validatePassword) {
                                    this.register(this.state.user)
                                }
                            }}>Register
                    </button>
                </div>
            </div>
        )
    }
}

export default RegisterPageComponent;
