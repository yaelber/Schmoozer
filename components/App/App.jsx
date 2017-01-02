import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Template from '../Common/Template';
import EventCategories from '../EventCategories/EventCategories.jsx';
import EventForm from '../EventForm/EventForm1.jsx';
import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns.jsx';
import Preview from '../Preview/Preview.jsx';
import reducer from '../../src/reducers/reducer'
// import store from '../src/store';
// import SingleCategoryDesigns from '../SingleCategoryDesigns/SingleCategoryDesigns';
// import SingleDesign from '../SingleDesign/SingleDesign';


const store = createStore(reducer)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Template}>
            <IndexRoute component={EventCategories}/>
              <Route path="/form" component= {EventForm}/>
              <Route path="/designs" component= {SingleCategoryDesigns} />
              <Route path ="/preview" component = {
                Preview} />
          </Route>
        </Router>
      </Provider>
    )
  }
}





