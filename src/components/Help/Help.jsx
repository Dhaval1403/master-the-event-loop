import React from 'react';
import './Help.styles.css';
import { connect } from 'react-redux';
import { toggleHelp } from '../../redux/helpToggle/helpToggle.actions';
import helpImage from '../../assets/master-the-event-loop.png';
import helpImage2 from '../../assets/master-the-event-loop-2.png';
import playButton from '../../assets/play.png';

const Help = ({ isHelp, toggleHelp }) => {
	return (
		<React.Fragment>
			{isHelp ? (
				<div className="modal-container">
					<div className="modal-body">
						<div className="modal-header">
							<h2>Master the Javascript Event Loop</h2>

							<button onClick={toggleHelp} className="cls-btn">
								Close
							</button>
						</div>

						<div className="modal-content">
							<p>
								JavaScript is single-threaded: only one task can run at a time. Usually that’s no
								big deal, but now imagine you’re running a task which takes 30 seconds.. Ya.. During
								that task we’re waiting for 30 seconds before anything else can happen (JavaScript
								runs on the browser’s main thread by default, so the entire UI is stuck) It’s 2020,
								no one wants a slow, unresponsive website.
							</p>

							<p>
								This project is based on how the javascript event loop works under the hood. It is
								the visual representation of how javascript actually works. What exactly happens
								when javascript encounters something like 'setTimeout', setInterval or fetch? How
								javascript deals with this asynchronous code because javascript is a single threaded
								language, it means that it can handle one thing at a time. Don't worry, we have
								tried our best to explain this topic in the easiest way possible with some cool
								animations & visuals. To get started write some code in the 'Code Editor' & hit that
								<img className="play-button" src={playButton} alt="Play Button" />
								button. Woohooo!! See the magic that javascript does for us behind the scenes.
								Excited? Let's get started
							</p>

							<p>
								Below attached are some extra resources for you if you want to dive deep into the
								topic. It includes some images, articles and youtube videos.
							</p>
						</div>

						<div className="resources">
							<img className="resource-item" src={helpImage} alt="master the event loop" />
							<img className="resource-item" src={helpImage2} alt="master the event loop" />

							<iframe
								className="resource-item"
								src="https://www.youtube.com/embed/hGSHfObcVf4"
							></iframe>
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
