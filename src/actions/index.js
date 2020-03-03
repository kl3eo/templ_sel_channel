export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const MAKE_REQUEST = 'MAKE_REQUEST';
export const RCPT_DATA = 'RCPT_DATA';

export const setChannel = channel => {
   return {
   	type: SELECT_CHANNEL,
	channel
   }
};

export const sendRequest = () => {
	 return { type: MAKE_REQUEST }
};

export const gotData = json => {
	
   return {
	type: RCPT_DATA,
	json: json.usefulData
   }
};

/*
export const fetchData = (channel) => {
   return function(dispatch) {
	dispatch(sendRequest());
	return fetch(`https://some_api_site/api/api_url.pl?channel=${channel}`)
		.then(response => response.json(),
			error => console.log('error occurred: '+error)
		)
		.then((json) => { dispatch(gotData(json)) })
		
  } 
}
*/
export const fetchData = (channel) => {
   return function(dispatch) {
	dispatch(sendRequest());
//	console.log(channel);
	let json = {"usefulData": [{"uData":"some data1"},{"uData":"some data2"}]};
	dispatch(gotData(json));	
  } 

}
