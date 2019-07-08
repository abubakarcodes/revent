import React, { Component , Fragment} from 'react'
import EventDashboard from "../../features/event/EventDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";
import { Container } from 'semantic-ui-react';

 class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
       <Container className="main">
       <EventDashboard/>
       </Container>
      </Fragment>
       
       
      
    )
  }
}

export default App;