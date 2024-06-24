const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5',
  params: {page: '2'},
  headers: {
    'x-rapidapi-key': 'd9e19da7a7msh4956907dbe35d82p16e584jsna5b7ffbe78c0',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}