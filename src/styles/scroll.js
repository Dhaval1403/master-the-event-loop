import { css } from 'styled-components'

import { variable } from './variable'

export const scrollbar = (
	colorBlue = variable.colorBlue,
	colorBlack3 = variable.colorBlack3,
	scrollbarSize = '8px'
) => {
	return css`
		&::-webkit-scrollbar {
			width: 0%;
		}
		&::-webkit-scrollbar-button {
			background-color: ${colorBlack3};
			display: none;
		}
		&::-webkit-scrollbar-corner {
			background-color: ${colorBlack3};
		}
		&::-webkit-resizer {
			background-color: ${colorBlack3};
		}
		&::-webkit-scrollbar-thumb {
			background-color: ${colorBlue};
			border-radius: 10px;
			height: 50px;
		}
		&::-webkit-scrollbar-track {
			background-color: ${variable.colorWhite};
		}
		&::-webkit-scrollbar-track-piece {
			background-color: ${colorBlack3};
			border-radius: 10px;
			margin: 0;
		}
	`
}
