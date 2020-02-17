import React from 'react';
import './Help.styles.css';
import { connect } from 'react-redux';
import { toggleHelp } from '../../redux/helpToggle/helpToggle.actions';

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
							<h3>How javascript event loop works</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam beatae dicta
								iste quam suscipit a odio blanditiis deserunt labore possimus, obcaecati sed
								recusandae id doloribus inventore nemo officia reprehenderit.
							</p>
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
