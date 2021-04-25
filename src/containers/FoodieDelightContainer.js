import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomePageComponent from "../component/homepage/HomePageComponent"
import YelpClientComponent from "../component/yelpBusinesses/YelpClientComponent";
import BusinessDetailComponent from "../component/yelpBusinesses/BusinessDetailComponent";
import LoginComponent from "../component/users/LoginComponent";
import ProfilePageComponent from "../component/users/ProfilePageComponent";
import RegisterPageComponent from "../component/users/RegisterPageComponent";
import NavbarComponent from "../component/NavbarComponent";
import UserProfilePageComponent from "../component/users/UserProfilePageComponent"
import {getProfile, logout} from "../service/UserService";


class FoodieDelightContainer extends React.Component {
    state = {
        currentUser: {
            id: '',
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            role: ''
        }
    }

    componentDidMount() {
        getProfile().then((user) => {
                if (user !== null)
                    this.setCurrentUser(user)
            }
        )
    }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

    handleLogout = () => {
        logout().then(() =>
            this.setCurrentUser({
                id: '',
                username: '',
                email: '',
                firstName: '',
                lastName: '',
                role: ''
            })
        )
    }

    render() {
        return (
            <Router>
                <div className="App m-0 p-0" style={{width: '100%', height: '100%', overflowX: 'hidden'}}>
                    <Route path="/" render={(props) =>
                        <NavbarComponent
                            {...props}
                            currentUser={this.state.currentUser}
                            handleLogout={this.handleLogout}/>}/>
                    <Route path="/" exact={true} render={(props) =>
                        <HomePageComponent
                            {...props}
                            currentUser={this.state.currentUser}/>}/>
                    <Route path="/login" exact={true} render={(props) =>
                        <LoginComponent
                            {...props}
                            setCurrentUser={this.setCurrentUser}/>}/>
                    <Route path="/profile" exact={true} render={(props) =>
                        <ProfilePageComponent
                            {...props}
                            userId={this.state.currentUser.id}
                            setCurrentUser={this.setCurrentUser}/>}/>
                    <Route path="/profile/:uid" exact={true} render={(props) =>
                        <UserProfilePageComponent
                            {...props}
                            userId={props.match.params.uid}
                            currentUserId={this.state.currentUser.id}/>}/>
                    <Route path="/register" exact={true} render={(props) =>
                        <RegisterPageComponent
                            {...props}
                            setCurrentUser={this.setCurrentUser}/>}/>
                    <Route path="/search" render={(props) =>
                        <YelpClientComponent
                            {...props}
                            keyword={props.match.params.keyword === undefined ? '': props.match.params.keyword}
                            location={props.match.params.location === undefined ? '': props.match.params.location}/>}/>
                    <Route path="/details/:id" exact={true} render={(props) =>
                        <BusinessDetailComponent
                            {...props}
                            currentUser={this.state.currentUser}
                            id={props.match.params.id}
                        />}/>

                </div>
            </Router>
        )
    }
}

export default FoodieDelightContainer
