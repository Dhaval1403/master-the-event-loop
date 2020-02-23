import { webApiTypes } from './webApi.types'

export const addToWebApi = (data) => ({
	type: webApiTypes.ADD_TO_WEB_API,
	payload: data,
})
