import React from 'react'

import { HeaderStyled } from './HeaderStyled'
import { Box, Flex } from '../../styles/flex'
import { Container } from '../../styles/layout'
import { Title4, Title5 } from '../../styles/text'
import { variable } from '../../styles/variable'
import { connect } from 'react-redux'
import { toggleHelp } from '../../redux/helpToggle/helpToggle.actions'

const Header = ({ toggleHelp }) => {
	return (
		<>
			<HeaderStyled>
				<Container mx="auto" px={{ d: 4, md: 3 }}>
					<Flex
						alignItems="center"
						display="flex"
						flexWrap="wrap"
						justifyContent={{ d: 'flex-end', md: 'space-between' }}
						minHeight={variable.headerHeight}
					>
						<Box mx={{ d: 'auto', md: 0 }} width="auto">
							<Title4 color="colorBlue">MASTER THE EVENT LOOP</Title4>
						</Box>

						<Box>
							<Title5 style={{ cursor: 'pointer' }} color="colorBlue" onClick={toggleHelp}>
								HELP
							</Title5>
						</Box>
					</Flex>
				</Container>
			</HeaderStyled>
		</>
	)
}

const mapDispatchToProps = (dispatch) => ({
	toggleHelp: () => dispatch(toggleHelp()),
})

export default connect(null, mapDispatchToProps)(Header)
