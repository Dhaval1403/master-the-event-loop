import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Callstack from './components/Callstack/Callstack';

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>MASTER THE EVENT LOOP</code>
          </p>
        </header> */}
				<Callstack />
			</div>
		);
	}
}

export default App;
