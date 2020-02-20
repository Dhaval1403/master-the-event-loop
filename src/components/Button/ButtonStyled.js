import styled, { css } from 'styled-components'
import { borderRadius, layout, space, typography } from 'styled-system'

import { variable } from '../../styles/variable'

export const ButtonStyled = styled.button`
	${borderRadius};
	${layout};
	${space};
	${typography};
	${({ borderRadius }) => borderRadius === undefined && `border-radius: ${variable.borderRadius}`};
	cursor: pointer;
	${({ fontWeight }) => fontWeight === undefined && 'font-weight: 700'};
	${({ textAlign }) => textAlign === undefined && 'text-align: center'};
	${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration}`};
	transition: background-color ${variable.transition}, border ${variable.transition},
		color ${variable.transition};
	vertical-align: middle;
	white-space: nowrap;
	${({ width }) => width === undefined && 'width: auto'};
	${({ themeSize }) =>
		themeSize === undefined &&
		css`
			${({ height }) => height === undefined && `height: ${variable.buttonHeight}`};
			min-width: ${({ minWidth }) => minWidth || '220px'};
			${({ pl }) => pl === undefined && `padding-left: ${variable.buttonPadding}`};
			${({ pr }) => pr === undefined && `padding-right: ${variable.buttonPadding}`};
		`};
	${({ themeSize }) =>
		themeSize === 'none' &&
		css`
			${({ height }) => height === undefined && 'height: auto'};
			${({ pl }) => pl === undefined && 'padding-left: 0'};
			${({ pr }) => pr === undefined && 'padding-right: 0'};
		`};
	${({ themeSize }) =>
		themeSize === 'small' &&
		css`
			${({ height }) => height === undefined && `height: ${variable.buttonHeight}`};
			min-width: ${({ minWidth }) => minWidth || '120px'};
			${({ pl }) => pl === undefined && 'padding-left: 1vw'};
			${({ pr }) => pr === undefined && 'padding-right: 1vw'};
		`};
	${({ active, themeType }) =>
		active &&
		themeType === undefined &&
		css`
			@media (min-width: ${variable.lg}) {
				background-color: ${variable.colorBlueDark};
				color: ${variable.colorWhite};
				svg {
					fill: ${variable.colorWhite};
				}
			}
		`};
	${({ themeType }) =>
		themeType === 'border' &&
		css`
			background-color: ${({ backgroundColor }) =>
				backgroundColor ? variable[backgroundColor] : 'transparent'};
			border: 2px solid
				${({ borderColor }) => (borderColor ? variable[borderColor] : variable.colorBlue)};
			color: ${({ color }) => (color ? variable[color] : variable.colorBlue)};
			${({ fontSize }) => fontSize === undefined && 'font-size: 16px'};
			text-transform: ${({ textTransform }) => textTransform || 'capitalize'};
			svg {
				fill: ${variable.colorBlue};
			}
		`};
	${({ disabled, themeType }) =>
		!disabled &&
		themeType === 'border' &&
		css`
			@media (min-width: ${variable.lg}) {
				&:active,
				&:hover {
					background-color: ${({ hoverColor }) =>
						hoverColor ? variable[hoverColor] : variable.colorBlueDark};
					border: 2px solid
						${({ hoverColor }) => (hoverColor ? variable[hoverColor] : variable.colorBlueDark)};
					color: ${variable.colorWhite};
					svg {
						fill: ${variable.colorWhite};
					}
				}
			}
		`}
	${({ active, themeType }) =>
		active &&
		themeType === 'border' &&
		css`
			@media (min-width: ${variable.lg}) {
				background-color: ${variable.colorBlueDark};
				border: 2px solid ${variable.colorBlueDark};
				color: ${variable.colorWhite};
				svg {
					fill: ${variable.colorWhite};
				}
			}
		`};
`
