import { useState, useEffect } from 'react';
import config from 'config';
import { authHeader } from '../_helpers';

export const useLocalCoins = () => {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		fetch(`${config.apiUrl}/get_localbitcoin`, {
	    method: 'GET',
	    headers: authHeader()
	  }).then(response => {
	  	if(response.ok) return response.json();
	  	else return JSON.stringify({ error: '500' });
	  }).then(data => {
          console.log(data);
		if(data.error) return;			
	    const formatted = data.map(c => {
	      const link = 'https://cryptocompare.com' + c.img_url;
	      delete c.img_url;
	      return {
	        ...c,
	        img_url: link
	      };
	    });
	    setCoins(formatted);
	  });
	}, []);

  return coins;
};