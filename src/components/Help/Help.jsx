import React from 'react';
import './Help.styles.css';
import { connect } from 'react-redux';
import { toggleHelp } from '../../redux/helpToggle/helpToggle.actions';
import helpImage from './master-the-event-loop.png';

const Help = ({ isHelp, toggleHelp }) => {
	return (
		<React.Fragment>
			{isHelp ? (
				<div>
					<div className="modal-content">
						<div className="inner-modal">
							<button onClick={toggleHelp} className="cls-btn">
								close
							</button>
							<h2>Master the Javscript Event Loop</h2>
							<p>
								This project is based on how the javascript event loop works under the hood. You can
								enter your javascript code and visually understand the Javascript event loop process
							</p>
							<h3>How javascript event loop works</h3>
							<p>
								Under the hood, the javascript engine works by two things Memory Stack: a place
								where memory is allocated by the js engine to store the values Call Stack: With a
								call stack we can have running codes like: <br />
								<span className="code-snippet">console.log(“Hi”);</span>
								Js is a single-threaded language. So we only need to worry about one thing
							</p>
							<iframe
								className="video-embed"
								src="https://www.youtube.com/embed/hGSHfObcVf4"
							></iframe>
							<img className="image-embed" src={helpImage} alt="master the event loop" />
						</div>
					</div>
				</div>
			) : null}
		</React.Fragment>
	);
};

const mapStateToProps = ({ helpReducer: { isHelp } }) => ({
	isHelp,
});

const mapDispatchToProps = dispatch => ({
	toggleHelp: () => dispatch(toggleHelp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Help);
