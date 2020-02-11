import React from 'react';
import './Console.styles.css';

const Console = input => {
	return (
		<div className="console">
			<div className="console-title">
				<div className="menu">
					<span>Callback Queue</span>
					<span>Console</span>
				</div>
			</div>
			<div className="console-body">
				<p>Hello World</p>
			</div>
		</div>
	);
};

export default Console;
