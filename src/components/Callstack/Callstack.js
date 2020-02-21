import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeFunctionFromCallstack } from './../../redux/callstack/callstack.actions'

import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box, Flex } from '../../styles/flex'
import { Span } from '../../styles/text'

class Callstack extends Component {
	mountCallStack = () => {
		console.log(this.props.callstack)
	}

	renderCallstack = ({ callstack }) => callstack.map((currLine) => <Span>{currLine.name}</Span>)

	render() {
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Callstack</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" height="350px" justifyContent="center" mt="20px">
					<Flex alignSelf="flex-end">
						<Span>{this.renderCallstack(this.props)}</Span>
					</Flex>
				</Box>
			</ConsoleBox>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
})

const mapDispatchToProps = (dispatch) => ({
	removeFunctionFromCallstack: () => dispatch(removeFunctionFromCallstack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Callstack)
