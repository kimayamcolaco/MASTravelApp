const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
  params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'dda3584bb1mshba306ac1bc88eebp12b777jsn340137a78183'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});