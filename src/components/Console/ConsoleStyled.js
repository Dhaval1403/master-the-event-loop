import styled, { css } from 'styled-components';
import { layout, space, typography } from 'styled-system';

import { variable } from '../../styles/variable';

export const ConsoleStyled = styled.div`
	margin: 20px auto;
	border: 1px solid grey;
	width: 800px;
	border-radius: 10px;
	background-color: ${variable.colorWhite};
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1px;
	line-height: 1.5;
`;
