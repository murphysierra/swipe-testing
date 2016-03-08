import AwesomeComponent from './AwesomeComponent.jsx';
import AnotherComponent from './AnotherComponent.jsx';
import AThirdComponent from './AThirdComponent.jsx';
import React from 'react';
import ReactSwipe from 'react-swipe';
import {render} from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { displayedComponent: 'awesomeComponent'};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
    //this.refs.ReactSwipe.props.slide();
		if (this.state.displayedComponent === 'awesomeComponent') {
			this.setState({displayedComponent: 'anotherComponent'});
		} else if (this.state.displayedComponent === 'anotherComponent') {
      this.setState({displayedComponent: 'aThirdComponent'});
    } else {
      this.setState({displayedComponent: 'awesomeComponent'});
    }
	}

  createGiantNestedCrap() {
    let divs = [];
    let nestedDivs = [];
    let i;
    for (i = 0; i < 20; i++) {
      nestedDivs.push(<div>
        SOME TEXT
      </div>);
    }
    for (i = 0; i < 100; i++) {
      divs.push(<div>
        <br /><a>Thing number {i}</a><br />
        <img src={'https://img.new.livestream.com/events/00000000002aa744/638fdca0-994e-45df-be81-a5e32adf334d_170x255.jpg'}/>
        <div>{nestedDivs}</div>
        </div>);
    }
    console.log(divs);
    return divs;
  }

	render() {
    const components = {
      awesomeComponent: <AwesomeComponent />,
      anotherComponent: <AnotherComponent />,
      aThirdComponent: <AThirdComponent />
    };

    const displayedKitten = components[this.state.displayedComponent];
    const divs = this.createGiantNestedCrap();

    return (
          <div>
            <p> Hello Frikin React!</p>
            <div><button onClick={this.onClick.bind(this)}>Kittens?</button></div>
            {displayedKitten}
            <ReactSwipe ref="ReactSwipe"
                        continuous={true}
                        key={this.state.displayedComponent}>
              {divs}
            </ReactSwipe>
          </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
