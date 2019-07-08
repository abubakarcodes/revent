import React, { Component, Fragment } from "react";
import EventListItem from "./EeventListItem";



class EventList extends Component {
  render() {
   
    return (
      <Fragment>
       {
        this.props.events.map((event) => {
          return(
              <EventListItem key={event.id} event={event}/>
          )
        } )
       }
       
        
      </Fragment>
    );
  }
}

export default EventList;
