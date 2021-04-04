import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
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

    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }

    this.props.addReview(review)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Review Restaurant</label>
          <input
            onChange={event => this.handleOnChange(event)}
            type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
