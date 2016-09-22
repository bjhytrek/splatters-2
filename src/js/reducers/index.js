import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import posts from "./postsReducer"
import booking from "./bookingReducer"

export default combineReducers({
  posts,
  tweets,
  booking,
})
