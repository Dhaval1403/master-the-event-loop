export const timeoutMiddleware = (store) => {
	// Called when calling applyMiddleware so
	// our middleware can have access to the store
	let queuedActions = []
	let timerId = undefined
	let frame = null

	const timer = (theNextOne, delay) => {
		if (!timerId) {
			timerId = setInterval(() => {
				if (queuedActions.length) {
					try {
						let fireAction = queuedActions.shift()
						frame = true
						delete fireAction.meta
						theNextOne(fireAction)
					} finally {
						frame = null
						//timer(theNextOne, 1000)
					}
				}
			}, delay)
		}
	}

	return (next) => {
		// next is the following action to be run
		// after this middleware
		timer(next, 1000)

		let frame = null
		return (action) => {
			// finally, this is where our logic lives for
			// our middleware.

			if (!action.meta) {
				return next(action)
			} else {
				queuedActions.push(action)
			}

			console.log('QUEUED ACTIONS', queuedActions, action)
			return function cancel() {
				queuedActions = queuedActions.filter((a) => a !== action)
			}
		}
	}
}

export const testDelay = (store) => (next) => (action) => {
	setTimeout(() => next(action), 1000)
}

/**
 * Schedules actions with { meta: { raf: true } } to be dispatched inside a rAF loop
 * frame.  Makes `dispatch` return a function to remove the action from the queue in
 * this case.
 */
const rafScheduler = (store) => (next) => {
	const queuedActions = []
	let frame = null
	function loop() {
		frame = null
		try {
			if (queuedActions.length) {
				next(queuedActions.shift())
			}
		} finally {
			maybeRaf()
		}
	}
	function maybeRaf() {
		if (queuedActions.length && !frame) {
			frame = requestAnimationFrame(loop)
		}
	}
	return (action) => {
		if (!action.meta || !action.meta.raf) {
			return next(action)
		}
		queuedActions.push(action)
		maybeRaf()
		return function cancel() {
			queuedActions = queuedActions.filter((a) => a !== action)
		}
	}
}
/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
const timeoutScheduler = (store) => (next) => (action) => {
	if (!action.meta || !action.meta.delay) {
		return next(action)
	}
	const timeoutId = setTimeout(() => next(action), action.meta.delay)

	return function cancel() {
		clearTimeout(timeoutId)
	}
}
