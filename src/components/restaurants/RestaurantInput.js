import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Add Restaurant</label>
          <input
            onChange={event => this.handleOnChange(event)}
            type="text"
          />
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
