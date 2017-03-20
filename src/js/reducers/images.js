export default function reducer(state={
    images: []
  }, action) {

    switch (action.type) {
      case "FETCH_IMAGES": {
        return {...state, fetching: true}
      }
      case "FETCH_IMAGES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_IMAGES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          images: action.payload,
        }
      }

}
    return state
}
