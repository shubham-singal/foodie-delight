import React from 'react';
import {getUserProfile} from "../../service/UserService";
import {findReviewsForUser} from "../../service/ReviewService"
import ReviewListComponent from "../reviews/ReviewListComponent";
import LocalBusinessListComponent from "../localBusinesses/LocalBusinessListComponent";

class UserProfilePageComponent extends React.Component {
    componentDidMount() {
        getUserProfile(this.props.userId).then(profile =>
            findReviewsForUser(this.props.userId)
                .then(reviews => {
                    if(profile === undefined){
                        alert('No such user, navigating back to homepage.')
                        this.props.history.push('/')
                    }
                    this.setState({
                        profile: profile,
                        reviews: reviews
                    })
                }))
    }

    state = {
        profile: [],
        reviews: []
    };

    render() {
        return(
            <div className="mt-4" style={{padding: 1.5 + 'em'}}>
                <h1 style={{fontFamily: 'Nunito'}}>Profile</h1>
                <div className="row mt-3">
                    <div className="col-md-2 d-none d-md-block px-0"/>
                    <div className="col-sm-12 col-md-8 px-0">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <h1 className="text-left">{this.state.profile.username}</h1>
                                <form>
                                    <fieldset disabled>
                                        <div className="form-group row mb-2">
                                            <label className="col-md-4 col-form-label text-left">First Name: </label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control"
                                                       value={this.state.profile.firstName} placeholder="First Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-2">
                                            <label className="col-md-4 col-form-label text-left">Last Name: </label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control"
                                                       value={this.state.profile.lastName} placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-2">
                                            <label className="col-md-4 col-form-label text-left">Role: </label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" placeholder="Role"
                                                       value={
                                                    (this.state.profile.role === "CUSTOMER" && "Customer") ||
                                                    (this.state.profile.role === "OWNER" && "Owner")
                                                }/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                {
                                    this.state.profile.role === "CUSTOMER" &&
                                        <ReviewListComponent
                                            history={this.props.history}
                                            userId={this.props.userId}
                                            ownPage={false}/>
                                }
                                {
                                    this.state.profile.role === "OWNER" &&
                                        <LocalBusinessListComponent
                                            ownerId={this.state.profile.id}
                                            ownPage={false}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-none d-md-block px-0"/>
                </div>
            </div>
        )
    }
}

export default UserProfilePageComponent
