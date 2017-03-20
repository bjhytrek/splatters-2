import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from "./components/Layout";
import Home from './components/Home';
import Pricing from './components/Pricing';
import Reservations from './components/Reservations';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import store from "./store";
import WaiverForm from './components/WaiverForm';
import Admin from './components/Admin';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute components={Home} />
      <Route path="pricing" component={Pricing} />
      {/* <Route path="reservations" component={Reservations} /> */}
      <Route path="gallery" component={Gallery} />
      <Route path="contactUs" component={ContactUs} />
      {/* <Route path="waiverForm" component={WaiverForm} /> */}
      <Route path="admin" component={Admin} />


    </Route>
  </Router>
)
const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  {router}
</Provider>, app);
