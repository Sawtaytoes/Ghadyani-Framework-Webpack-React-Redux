import createReducer from 'utils/createReducer'
import { ADD_MESSAGE } from './actions'
import { tapStatus } from './helpers'

export const initialState = tapStatus.running

const reducer = {
	[ADD_MESSAGE]: (
		(prevStatus, { message, identifier }) => (
			message === '# ok'
			|| identifier === '# fail'
			? tapStatus.done
			: prevStatus
		)
	),
}

export default createReducer(reducer, initialState)
