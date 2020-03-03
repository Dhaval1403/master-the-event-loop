import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { toggleHelp } from '../../redux/helpToggle/helpToggle.actions'
import helpImage from '../../assets/master-the-event-loop.png'
import gif_1 from '../../assets/animation1.gif'
import gif_2 from '../../assets/animation2.gif'
import gif_3 from '../../assets/animation3.gif'
import gif_4 from '../../assets/animation4.gif'
import gif_5 from '../../assets/animation5.gif'

import { HelpStyled } from './HelpStyled'

import { Button } from '../Button/Button'
import { Flex, Box } from '../../styles/flex'
import { Cell } from '../../styles/grid'
import { Wrap } from '../../styles/layout'
import { P, Title4, Title5 } from '../../styles/text'

const modalRoot = document.getElementById('modal-root')

class Help extends Component {
	constructor(props) {
		super(props)
		this.el = document.createElement('div')
	}

	componentDidMount() {
		modalRoot.appendChild(this.el)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el)
	}

	currentTarget = (e) => {
		if (e.currentTarget === e.target) {
			this.props.toggleHelp()
		} else {
			return
		}
	}
	render() {
		const { isHelp, toggleHelp } = this.props

		const modal = (
			<React.Fragment>
				{isHelp ? (
					<Flex
						alignItems="center"
						backgroundColor="colorGrayDarkTransparent"
						display="flex"
						id="mdc"
						justifyContent="center"
						minHeight="100vh"
						minWidth="100vw"
						onClick={this.currentTarget}
						position="fixed"
						top="0"
						zIndex="100000"
					>
						<Wrap>
							<Box
								alignItems="center"
								borderBottom={2}
								borderRadius="4px 4px 0 0"
								borderStyle="solid"
								color="colorBlue"
								display="flex"
								justifyContent="space-between"
								mb="0.8rem"
								p="0.5rem 0.8rem"
								position="sticky"
								top="0"
								zIndex="1"
							>
								<Title4 color="colorBlue" display="inline-flex" fontSize="20px">
									HOW DOES JAVASCRIPT EVENT LOOP WORKS?
								</Title4>

								<Button display="inline-flex" onClick={toggleHelp}>
									Close
								</Button>
							</Box>

							<HelpStyled>
								<Box>
									<P>
										JavaScript is single-threaded: only one task can run at a time. Usually that’s no big
										deal, but now imagine you’re running a task which takes 30 seconds.. Ya.. During that task
										we’re waiting for 30 seconds before anything else can happen (JavaScript runs on the
										browser’s main thread by default, so the entire UI is stuck) It’s 2020, no one wants a
										slow, unresponsive website.
									</P>

									<P>
										This project is based on how the Javascript event loop works under the hood. It is the
										visual representation which shows you that how Javascript works internally. What exactly
										happens when javascript encounters something like 'setTimeout', 'setInterval' or 'fetch'?
										How Javascript deals with this asynchronous code because Javascript is a single threaded
										language, it means that it can handle one thing at a time. Don't worry, we have tried our
										best to explain this topic in the easiest way possible with some cool animations &
										visuals. To get started write some code in the 'Code Editor' & hit that
										<Button padding="8px 8px" margin="4px" display="inline-block">
											Play
										</Button>
										button. Woohooo!! See the magic that javascript does for us behind the scenes. Excited?
										Let's get started
									</P>
								</Box>

								<Cell
									display="grid"
									justifyItems="center"
									gridGap="25px"
									gridTemplateColumns="1fr"
									mb="0.8rem"
								>
									<P>
										Below are the some really cool animations which will show you how the event loop works in
										5 steps.
									</P>

									<Cell
										display="grid"
										justifyItems="center"
										gridGap="25px"
										gridTemplateColumns="1fr"
										mb="0.8rem"
									>
										<Title5 fontWeight="bold" fontSize="1.8em" mb="0.5rem">
											Animations
										</Title5>
										<img className="resource-item" src={gif_1} alt="animations" />
										<img className="resource-item" src={gif_2} alt="animations" />
										<img className="resource-item" src={gif_3} alt="animations" />
										<img className="resource-item" src={gif_4} alt="animations" />
										<img className="resource-item" src={gif_5} alt="animations" />

										<P>
											(Source of animations: &nbsp;
											<a
												style={{ color: 'blue' }}
												href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"
											>
												this awesome article
											</a>
											)
										</P>
									</Cell>

									<P>
										Below attached are some extra resources for you if you want to dive deep into the topic.
										It includes some images, articles and youtube videos.
									</P>

									<Cell
										display="grid"
										justifyItems="center"
										gridGap="25px"
										gridTemplateColumns="1fr"
										mb="0.8rem"
									>
										<Title5>Images</Title5>
										<img className="resource-item" src={helpImage} alt="master the event loop" />

										<Title5>Videos</Title5>
										<iframe
											title="How Does Javascript Work? - Andrei Neagoie"
											className="resource-video"
											src="https://www.youtube.com/embed/hGSHfObcVf4"
										></iframe>

										<Title5>Articles</Title5>
										<P>
											Javascript Visualized Event Loop &nbsp;
											<a
												style={{ color: 'blue' }}
												href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"
											>
												here
											</a>
										</P>

										<P>
											How Javascript Works? &nbsp;
											<a
												style={{ color: 'blue' }}
												href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5"
											>
												here
											</a>
										</P>
									</Cell>
								</Cell>
							</HelpStyled>
						</Wrap>
					</Flex>
				) : null}
			</React.Fragment>
		)

		return ReactDOM.createPortal(
			modal,
			// A DOM element
			this.el
		)
	}
}

const mapStateToProps = ({ helpReducer: { isHelp } }) => ({
	isHelp,
})

const mapDispatchToProps = (dispatch) => ({
	toggleHelp: () => dispatch(toggleHelp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Help)
