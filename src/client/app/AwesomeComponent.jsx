import React from 'react';
var ReactSwipe = require('react-swipe');


class AwesomeComponent extends React.Component {
	render() {
			return (
				<div>
					<ReactSwipe
							continuous={false}
					>
						<div>'PANE 1'</div>
						<div>'PANE 2'</div>
						<div>'PANE 3'</div>
					</ReactSwipe>
					<img src={'http://cf.ltkcdn.net/cats/images/slide/89981-834x576-cute-red-kitten.jpg'} />
				</div>
			);
		}
}

export default AwesomeComponent;

