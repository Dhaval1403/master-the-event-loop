import React from 'react';

import './WebApi.styles.css';

const WebApi = input => {
	return (
		<div className="web-api">
			<div className="title">Web Apis</div>
			<div className="body">
				<ul>
					<li>$.on('button', 'click', ...)</li>
					<li>timeout()</li>
				</ul>
			</div>
		</div>
	);
};

export default WebApi;
