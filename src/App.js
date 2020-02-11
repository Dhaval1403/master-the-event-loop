import React, { Component } from 'react';
import './App.css';
import Callstack from './components/callstack/Callstack';
import WebApi from './components/web-api/WebApi';

class App extends Component {
	render() {
		return (
			<div>
				<Callstack />
				<WebApi />
			</div>
		);
	}
}

export default App;
