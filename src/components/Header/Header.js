import React from 'react';

import { HeaderStyled, LinkTo } from './HeaderStyled';

import { Box, Flex } from '../../styles/flex';
import { Container } from '../../styles/layout';
import { Title4, Title5 } from '../../styles/text';
import { variable } from '../../styles/variable';

export const Header = () => {
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
							<LinkTo href="/">
								<Title5 color="colorBlue">HELP</Title5>
							</LinkTo>
						</Box>
					</Flex>
				</Container>
			</HeaderStyled>
		</>
	);
};
