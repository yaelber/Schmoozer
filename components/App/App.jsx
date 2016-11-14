import React, { Component } from 'react';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Template from '../Common/Template';
import EventCategories from '../EventCategories/EventCategories.jsx';
// import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns';
// import SingleDesign from '../SingleDesign/SingleDesign';




export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={EventCategories}/>
        </Route>
      </Router>
    )
  }
}



          // <Route path="/:category" component={SingleCategoryDesigns} />
          // <Route path="/:category/:dessignId" component={SingleDesign} />



