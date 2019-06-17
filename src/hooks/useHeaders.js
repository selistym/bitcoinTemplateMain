import { useState, useEffect } from 'react';
import config from 'config';
import { authHeader } from '../_helpers';

export const useHeaders = () => {
	const [headers, setHeaders] = useState([]);

	useEffect(() => {
		fetch(`${config.apiUrl}/get_header`, {
	    method: 'GET',
	    headers: authHeader()
	  }).then(response => {
	  	if(response.ok) return response.json();
	  	else return JSON.stringify({ error: '500' });
	  }).then(data => {
		if(data.error) return;			
	    setHeaders(data);
	  });
	}, []);

  return headers;
};