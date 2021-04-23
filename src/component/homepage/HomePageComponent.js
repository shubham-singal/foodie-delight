import React from 'react';
import MemberListComponent from "./MemberListComponent";
import RecentReviewsComponent from "./RecentReviewsComponent";
import EventPillsComponent from "./EventPillsComponent";

class HomePageComponent extends React.Component {
    componentDidMount() {

    }

    state = {
        keyword: '',
        location: ''
    }

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/proxy/-yHVfILL5p5SKsHjWR-CGPcCVcZGYPIWqXvHxPuwTh_DPigDRP0HBm9dWj0L0prYfHyafPfz5G1gLRKlJs_Wd-Jd6O6Y3iWicaC5_Fe3TzcH3tA99toVBmgFJvA033Emxye2dcTlzDPT-vUt5L1AYc3i')`,
                    height: '500px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <div className="d-flex align-items-center justify-content-center" style={{height: '400px'}}>
                        <div className="col-lg-12">
                            <h1 className="text-center"
                                style={{color: 'white', fontFamily: 'cursive', fontWeight: '800'}}>Foodie's Delight</h1>
                            <hr/>
                            <a href="/search" className="btn btn-success pl-2" style={{color: 'white'}}>
                                Find Businesses<i className="fa fa-search ml-2"/></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 d-none d-md-block"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="row">
                            <div className="col-md-7 col-lg-8">
                                {
                                    this.props.currentUser.id !== '' &&
                                    <RecentReviewsComponent
                                        history={this.props.history}
                                        currentUser={this.props.currentUser}/>
                                }
                                <EventPillsComponent
                                    currentUser={this.props.currentUser}/>
                            </div>
                            <div className="col-md-5 col-lg-3 d-none d-md-block">
                                <MemberListComponent
                                    history={this.props.history}
                                    currentUser={this.props.currentUser}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-none d-md-block"></div>
                </div>
            </div>
        )
    }
}

export default HomePageComponent
