import styled, { css } from 'styled-components';
import { layout, space, typography } from 'styled-system';

import { variable } from './variable';

const title = css`
	${layout};
	${space};
	${typography};
	color: ${({ color }) => (color ? variable[color] : variable.colorBlack2)};
	display: block;
	height: auto;
	line-height: 1.3;
	${({ align }) =>
		align === 'center' && 'margin-left: auto; margin-right: auto; text-align: center;'};
	z-index: 3;
	${({ line }) =>
		line &&
		css`
			&::after {
				content: ' ';
				display: block;
				height: 4px;
				margin-top: 5px;
				width: 70px;
			}
		`};
`;

export const P = styled.p`
	${layout};
	${space};
	${typography};
	color: ${({ color, themeColor }) =>
		color ? variable[color] : themeColor === 'light' ? variable.colorWhite : variable.colorBlack2};
	${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace}`};
`;

export const Span = styled.span`
	${layout};
	${space};
	${typography};
	${({ color }) => color && `color: ${variable[color]}`};
	${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace}`};
`;

export const Title4 = styled.h4`
	${title};
	${({ fontSize }) => fontSize === undefined && 'font-size: 18px'};
	${({ fontWeight }) => fontWeight === undefined && 'font-weight: 400'};
	@media (min-width: ${variable.md}) {
		${({ fontSize }) => fontSize === undefined && 'font-size: 24px'};
	}
`;

export const Title5 = styled.h5`
	${title};
	${({ fontSize }) => fontSize === undefined && 'font-size: 16px'};
	${({ fontWeight }) => fontWeight === undefined && 'font-weight: 400'};
	@media (min-width: ${variable.md}) {
		${({ fontSize }) => fontSize === undefined && 'font-size: 18px'};
	}
`;
