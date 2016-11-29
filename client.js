import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import initAutocomplete from './public/javascripts/autocomplete';
window.initAutocomplete = initAutocomplete;



const script = document.createElement( 'script' );
script.type = 'text/javascript';
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_PLACES_AUTOCOMPLETE_PUBLIC_KEY}&libraries=places&callback=initAutocomplete`;
document.getElementsByTagName('body')[0].appendChild( script );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
