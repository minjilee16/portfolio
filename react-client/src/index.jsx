import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Introduction from './components/Introduction.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';


const App = (props) => (
  <div id="page-top">
    <Introduction />
    <Work />
    <Contact />
  </div>
)


ReactDOM.render(<App />, document.getElementById('app'));