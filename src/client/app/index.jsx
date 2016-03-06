import AwesomeComponent from './AwesomeComponent.jsx';
import AnotherComponent from './AnotherComponent.jsx';
import AThirdComponent from './AThirdComponent.jsx';
import React from 'react';
import ReactSwipe from 'react-swipe';
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
		} else if (this.state.displayedComponent === 'anotherComponent') {
      this.setState({displayedComponent: 'aThirdComponent'});
    } else {
      this.setState({displayedComponent: 'awesomeComponent'});
    }
	}

	render () {
    const components = {
      awesomeComponent: <AwesomeComponent />,
      anotherComponent: <AnotherComponent />,
      aThirdComponent: <AThirdComponent />
    };

    const displayedKitten = components[this.state.displayedComponent];

    return (
          <div>
            <p> Hello Frikin React!</p>
            <div><button onClick={this.onClick.bind(this)}>Kittens?</button></div>
            {displayedKitten}
            <ReactSwipe continuous={false} key={this.state.displayedComponent}>
                <div>{displayedKitten}</div>
                <div><AnotherComponent /></div>
                <div><AThirdComponent /></div>
            </ReactSwipe>
          </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
