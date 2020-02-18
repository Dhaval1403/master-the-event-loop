import styled from 'styled-components';
import { space, typography } from 'styled-system';

import { variable } from './variable';

export const ConsoleBox = styled.div`
	margin: 20px auto;
	border: 1px solid grey;
	width: 400px;
	border-radius: 10px;
	background-color: ${variable.colorWhite};
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1px;
	line-height: 1.5;
`;

export const ConsoleTitle = styled.h2`
	${space};
	${typography};
	${({ fontSize }) => fontSize === undefined && 'font-size: 20px'};
	line-height: 1.2;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
	margin-bottom: 10px;
	border: 1px solid rgb(207, 206, 206);
`;
