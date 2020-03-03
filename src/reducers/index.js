import { SELECT_CHANNEL, MAKE_REQUEST, RCPT_DATA } from '../actions';

const reducer = (state={}, action) => {
	switch (action.type) {
		case SELECT_CHANNEL:
			return {...state, channel: action.channel};
		case MAKE_REQUEST:
			return {...state, loading: true};
		case RCPT_DATA:
			return {...state, usefulData: action.json, loading: false};
		default:
			return state;
	}
};

export default reducer;
