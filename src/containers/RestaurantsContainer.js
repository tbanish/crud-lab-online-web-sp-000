import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants delete={this.props.delete} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    addRestaurant: formData => dispatch({type: "ADD_RESTAURANT", text: formData.text}),
    delete: id => dispatch({type: "DELETE_RESTAURANT", id})
  }
}

const mapStatetoProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RestaurantsContainer);
