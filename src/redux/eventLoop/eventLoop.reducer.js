export const eventLoopReducer = (state = '', action) => {
	switch (action.type) {
		case 'SPIN': {
			return 'spinner-container spin'
		}

		case 'SPIN_BACK': {
			return 'spinner-container spin-back'
		}

		default:
			return state
	}
}
