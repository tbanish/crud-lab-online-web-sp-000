import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review: {text: review.text, restaurantId: review.restaurantId}}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReviewsContainer);
