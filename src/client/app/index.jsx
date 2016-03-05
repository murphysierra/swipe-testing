import AwesomeComponent from './AwesomeComponent.jsx';
import AnotherComponent from './AnotherComponent.jsx';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {displayedComponent : 'awesomeComponent'};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		if (this.state.displayedComponent === 'awesomeComponent') {
			this.setState({displayedComponent: 'anotherComponent'});
		}
		else { this.setState({displayedComponent: 'awesomeComponent'});}
	}

	render () {
		const components = {
			awesomeComponent: <AwesomeComponent />,
			anotherComponent: <AnotherComponent />
		};

		const displayedComponent = components[this.state.displayedComponent];

			return (
			      <div>
				      <p> Hello Frikin React!</p>
							<div><button onClick={this.onClick.bind(this)}>Kittens?</button></div>
							{displayedComponent}
						</div>
			);
		}
}

render(<App/>, document.getElementById('app'));
