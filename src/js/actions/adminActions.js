var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyBaoO9JJY-RBezkgONRF7Grh_AWW_zRC44",
    authDomain: "splatters-c3ecf.firebaseapp.com",
    databaseURL: "https://splatters-c3ecf.firebaseio.com",
    storageBucket: "splatters-c3ecf.appspot.com",
    messagingSenderId: "734456387749"
  };
  firebase.initializeApp(config);

 const fb = firebase.database();

export function fetchContent() {
  return dispatch => {
    fb.ref('content/').on('value', snapshot =>{
      dispatch({
        type: 'FETCH_CONTENT_FULFILLED',
        payload: snapshot.val()
      });
    });
  };
}

export function fetchTestimonials() {
  return dispatch => {
    fb.ref('testimonials/').on('value', snapshot =>{
      dispatch({
        type: 'FETCH_TESTIMONIALS_FULFILLED',
        payload: snapshot.val()
      });
    });
  };
}

export function updateContent(key, value){
  return dispatch => fb.update(key, value);
}

export function aproveTestimonials(key) {
  return dispatch => fb.ref('testimonials/').child(key).update(true);
}

export function unaproveTestimonials(key) {
  return dispatch => fb.ref('testimonials/').child(key).update(false);
}

export function deleteTestimonials(key) {
  return dispatch => fb.ref('testimonials/').child(key).remove();
}
