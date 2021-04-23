import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

class NavbarComponent extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <nav id="mainNavbar" className="navbar bg-light navbar-expand-md py-1 px-2">
                <a className="navbar-brand pl-1 Title" href="/">Foodie's Delight</a>
                <div className="collapse navbar-collapse" id="navLinks">
                    <ul className="navbar-nav">
                    </ul>
                </div>
                <div>
                    <div className="row mr-1">
                    {
                        this.props.currentUser.username === '' &&
                        <span>
                            <a className="btn btn-success mx-1 LogIn" href="/login">Log in <i className="fa fa-user"/></a>
                            <a className="btn btn-primary mx-1 Register" href="/register">Register <i
                                className="fa fa-user-plus"/></a>
                        </span>
                    }
                    {
                        this.props.currentUser.username !== '' &&
                            <div className="dropdown show">
                                <button className="btn btn-secondary dropdown-toggle ml-1" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="">
                                Hi {this.props.currentUser.username}
                                <i className="fa fa-user ml-3"/>
                            </span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/" onClick={this.props.handleLogout}>Log out</a>
                                </div>
                            </div>
                    }
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavbarComponent
