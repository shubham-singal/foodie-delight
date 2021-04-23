import React from 'react';
import {getRecentEvents} from "../../service/EventService";
import "./Reviews.css";

class EventPillsComponent extends React.Component {
    componentDidMount() {
        getRecentEvents()
            .then(response => {
                this.setState({
                    events: response.events
                })
            })
    }

    state={
        events: []
    }

    render(){
        return (
            <div className="container mt-2">
                <h4 class="Reviews">Recently Posted Reviews</h4>
                <hr/>
                <div className="row">
                    {
                        this.state.events && this.state.events.map((event, i) =>
                            <div className="col-md-12 col-lg-4 px-auto" key={i}>
                                <div className="d-flex">
                                    <div className="card m-1 border" style={{width: '100%'}}>
                                        <img className="card-img-top img-fluid" style={{height: '20rem', width: '100%'}} src={event.image_url} alt={event.name}/>
                                        <div className="card-body" style={{textOverflow: 'hidden'}}>
                                            <h5 className="card-title" style={{fontFamily: 'Oswald', fontWeight: '400'}}>{event.name}</h5>
                                            <p className="text-body d-none d-lg-block" style={{textOverflow: 'hidden'}}>{event.description}</p>
                                            <a href={event.event_site_url} className="btn btn-primary">Visit Site</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default EventPillsComponent
