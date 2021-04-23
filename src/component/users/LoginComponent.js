import React from 'react';
import {login} from "../../service/UserService";


class LoginComponent extends React.Component {
    handleLogin = (user) =>
        login(user)
            .then(currentUser => {
                if (currentUser != null) {
                    this.props.setCurrentUser(currentUser)
                    // this.props.history.push("/")
                    this.props.history.goBack()
                }
            })
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="m-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-8">
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Username:</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={this.state.user.username} placeholder="Username" type="username"
                                           onChange={(e) => {
                                               const name = e.target.value;
                                               this.setState(prevState => ({
                                                   user: {
                                                       ...prevState.user,
                                                       username: name
                                                   }
                                               }))
                                           }}/>
                                </div>
                            </div>
                        </form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={this.state.user.password} placeholder="Password" type="password"
                                       onChange={(e) => {
                                           const key = e.target.value;
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   password: key
                                               }
                                           }))
                                       }}/>
                            </div>
                        </div>
                        <div className="row m-0 d-flex justify-content-center">
                            <button className="btn btn-success mr-3" onClick={() => this.handleLogin(this.state.user)}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
