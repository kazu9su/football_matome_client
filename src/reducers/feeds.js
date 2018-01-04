import { REQUEST_FEEDS, RECEIVE_FEEDS } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_FEEDS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_FEEDS:
      return {
        ...state,
        isFetching: false,
        items: action.feeds,
      }
    default:
      return state
  }
}
