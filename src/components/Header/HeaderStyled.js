import styled from 'styled-components';

import { variable } from '../../styles/variable';

export const HeaderStyled = styled.header`
	background-color: ${variable.colorWhite};
	box-shadow: 0 1px 0 1px ${variable.colorBlackTransparent1};
	color: ${variable.colorBlack3};
	height: auto;
	left: 0;
	position: fixed;
	top: 0;
	transition: background-color ${variable.transition}, box-shadow ${variable.transition},
		min-height ${variable.transition}, padding ${variable.transition};
	width: 100%;
	z-index: 5;
`;

export const LinkTo = styled.a``;
