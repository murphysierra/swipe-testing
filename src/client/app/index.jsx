import AwesomeComponent from './AwesomeComponent.jsx';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	  render () {
			return (
			      <div>
				      <p> Hello Frikin React!</p>
				      <AwesomeComponent />
			      </div>
			);
		}
}

render(<App/>, document.getElementById('app'));
