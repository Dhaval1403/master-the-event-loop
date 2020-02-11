import React, { Component } from 'react';
import './App.css';
import Callstack from './components/Callstack/Callstack';
import WebApi from './components/web-api/WebApi';
import Console from './components/Console/Console';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Callstack />
				<WebApi />
				<Console />
			</React.Fragment>
		);
	}
}

export default App;
