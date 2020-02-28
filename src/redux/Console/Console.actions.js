import { consoleTypes } from './Console.types'

export const pushToConsole = (message) => ({
	type: consoleTypes.PUSH_TO_CONSOLE,
	payload: message,
	meta: {
		delay: 1000,
	},
})
