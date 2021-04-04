import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type){
    case 'ADD_RESTAURANT':
      let restaurant = {
        text: action.text,
        id: cuid()
      }
      return { ...state, restaurants: [...state.restaurants.concat(restaurant)]};

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: [...state.restaurants.filter(r => r.id !== action.id)]}

    case 'ADD_REVIEW':
      let review = {
        text: action.review.text,
        id: cuid(),
        restaurantId: action.review.restaurantId
      }
      return { ...state, reviews: [...state.reviews.concat(review)]};

    case 'DELETE_REVIEW':
    debugger
      return {...state, reviews: [...state.reviews.filter(r => r.id !== action.id)]}

    default:
      return state;
  }
}
