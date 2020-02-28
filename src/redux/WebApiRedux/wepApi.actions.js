import { webApiTypes } from './webApi.types'

export const addToWebApi = (data) => ({
	type: webApiTypes.ADD_TO_WEB_API,
	payload: data,
})

export const removeFromWebApi = (funcId) => ({
	type: webApiTypes.REMOVE_FROM_WEB_API,
	payload: funcId,
	meta: {
		delay: 1000,
	},
})
