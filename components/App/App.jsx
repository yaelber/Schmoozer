import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Template from '../Common/Template';
import EventCategories from '../EventCategories/EventCategories.jsx';
import EventForm from '../EventForm/EventForm.jsx';
import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns.jsx';
// import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns';
// import SingleDesign from '../SingleDesign/SingleDesign';




export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router history={browserHistory}>
          <Route path="/" component={Template}>
            <IndexRoute component={EventCategories}/>
              <Route path="/foo" component= {EventForm}/>
              <Route path="/bar" component= {SingleCategoryDesigns} />
          </Route>
        </Router>
      </Provider>
    )
  }
}





