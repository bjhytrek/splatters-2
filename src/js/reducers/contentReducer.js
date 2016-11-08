export default function reducer(
  state={
    testimonials: {},
    content: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TESTIMONIALS": {
        return {...state, fetching: true}
      }
      case "FETCH_TESTIMONIALS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TESTIMONIALS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          testimonials:  action.payload,
        }
      }
      case "FETCH_CONTENT_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          content:  action.payload,
        }
      }
      case 'DELETE_TESTIMONIALS': {
        return {...state, testimonials: action.payload,
        }
      }
      case 'CREATE_TESTIMONIALS': {
        return {...state, testimonials: action.payload,
        }
      }
      case 'APROVE_TESTIMONIALS': {
        return {...state, testimonials: action.payload,
        }
      }
      case 'UNAPROVE_TESTIMONIALS': {
        return {...state, testimonials: action.payload,
        }
      }
    }
return state
}
