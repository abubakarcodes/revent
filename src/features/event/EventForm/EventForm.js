import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    };
  }

 
  handleInputChange = ({target: {name , value}}) => {
    this.setState({
      [name]: value
    });
  };

  handleFormEvent = e => {
    e.preventDefault();
    this.props.createEvent(this.state);
  };
  render() {
    const { cancelForm } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
      <Form onSubmit={this.handleFormEvent}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.handleInputChange}
              value={title}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.handleInputChange}
              value={date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.handleInputChange}
              value={city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.handleInputChange}
              value={venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelForm} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
