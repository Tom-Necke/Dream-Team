#!/usr/bin/env node
import chalk from "chalk";
import axios from "axios";
let [userUrl] = process.argv.slice(2);
const encodedParams = new URLSearchParams();
encodedParams.append("url", `https://${userUrl}`);

const options = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
    'X-RapidAPI-Key': 'cb25ffdc53mshc1ee90622401fcep16f4e3jsn6916805df050'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
  console.log(
     `The return of the Shorty: ${chalk.bgBlue.red(response.data.result_url)}!`
  );
}).catch(function (error) {
	console.error(error);
});

