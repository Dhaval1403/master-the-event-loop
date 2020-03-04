import styled from 'styled-components'

import { variable } from '../../styles/variable'

export const HelpStyled = styled.div`
	height: 75vh;
	overflow-y: auto;
	padding: 0.8rem;
	border-radius: 0 0 4px 4px;
	width: 97%;
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
		height: 450px;
	}

	.step-enter {
		opacity: 0;
		transform: translate(-500px, 0);
		transform: translate3d(-500px, 0, 0);
	}
	.step-enter.step-enter-active {
		opacity: 1;
		transition: opacity 2s ease;
		transform: translate(0, 0);
		transform: translate3d(0, 0, 0);
		transition-property: transform, opacity;
		transition-duration: 100ms;
		transition-timing-function: cubic-bezier(0.175, 0.665, 0.32, 1), linear;
	}
	.step-exit {
		opacity: 1;
		transform: translate(0, 0, 0);
		transform: translate3d(0, 0, 0);
		transition-property: transform, opacity;
		transition-duration: 100ms;
		transition-timing-function: cubic-bezier(0.175, 0.665, 0.32, 1), linear;
	}
	.step-exit.step-exit-active {
		opacity: 0;
		transform: translate(500px, 0);
		transform: translate3d(500px, 0, 0);
	}
`
