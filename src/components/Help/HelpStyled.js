import styled from 'styled-components'

import { variable } from '../../styles/variable'

export const HelpStyled = styled.div`
	height: 75vh;
	overflow-y: auto;
	padding: 1rem;
	border-radius: 0 0 4px 4px;
	width: 95%;
	margin: 0 auto;

	::-webkit-scrollbar {
		background-color: transparent;
		width: 10px;
		cursor: pointer;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 6px ${variable.colorBlackTransparent3};
		-webkit-box-shadow: inset 0 0 6px ${variable.colorBlackTransparent3};
		background-color: ${variable.colorBlue};
	}

	::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: ${variable.colorWhite};
	}

	.play-button {
		width: 20px;
		height: 20px;
		margin: 0 0.5rem;
	}

	.resource-item {
		width: 75%;
		height: auto;
	}

	.resource-video {
		width: 75%;
		height: 250px;
	}
`
