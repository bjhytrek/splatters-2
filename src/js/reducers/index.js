import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import posts from "./postsReducer"
import booking from "./bookingReducer"
import content from "./contentReducer"

export default combineReducers({
  posts,
  tweets,
  booking,
  content,
})
