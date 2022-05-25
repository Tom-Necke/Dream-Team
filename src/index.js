#!/usr/bin/env node
import chalk from "chalk";
import axios from "axios";
import gradient from "gradient-string";


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

let lines =
"___________________________________________________________________________________________________________________";
let duck = gradient('orange', 'yellow').multiline([
"|  __                                                                                                              |",
"|<(o )___                                                                                                          |",
"| ( ._> /                                                                                                          |",
"|  `---'",
].join('\n'));
  //"    __  ",
  //"___( o)>",
  //"\ <_. )",
  //" '---´",

let logo = gradient('blue','red').multiline([
"|           ░██████╗██╗░░██╗░█████╗░██████╗░████████╗██╗░░░██╗░░░░░░░█████╗░██████╗░██████╗░                       |",
"|           ██╔════╝██║░░██║██╔══██╗██╔══██╗╚══██╔══╝╚██╗░██╔╝░░░░░░██╔══██╗██╔══██╗██╔══██╗                       |",
"|           ╚█████╗░███████║██║░░██║██████╔╝░░░██║░░░░╚████╔╝░█████╗███████║██████╔╝██████╔╝                       |",
"|           ░╚═══██╗██╔══██║██║░░██║██╔══██╗░░░██║░░░░░╚██╔╝░░╚════╝██╔══██║██╔═══╝░██╔═══╝░                       |",
"|           ██████╔╝██║░░██║╚█████╔╝██║░░██║░░░██║░░░░░░██║░░░░░░░░░██║░░██║██║░░░░░██║░░░░░                       |",
"|           ╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░░░░░░░╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░                       |",
].join('\n'));

let logo2 = gradient('blue', 'red').multiline([
"|          █▀▄ █▀█ █▀▀ ▄▀█ █▀▄▀█   ▀█▀ █▀▀ ▄▀█ █▀▄▀█                                                               |",
"|          █▄▀ █▀▄ ██▄ █▀█ █░▀░█   ░█░ ██▄ █▀█ █░▀░█                                                               |",
].join('\n'));



axios.request(options).then(function (response) {
  console.log(
"|                                                                                                                  |");
  console.log(lines)
  console.log(
`|                                                                                                                  |`);
  console.log(logo);
  console.log(lines)
  console.log(
`
|          Hello Nerd!                                                                                             |
|          Thank you for your input: ${chalk.bgRed.blue(userUrl)}! Interesting! Our suggestion is following!       `+"|")
  console.log(`${duck} ${gradient("lightBlue", "yellow", "red")("  The return of the shorty:")} ${chalk.bgBlueBright.red(response.data.result_url)}!                                                    |`);
  console.log(
`|                                                                                                                  `+"|");
  console.log(
`|          Shorty-App is a solution by:                                                                            `+"|");
  console.log(
`|                                                                                                                  `+"|");
  console.log(logo2);
  console.log(
`|          © Christoph, Joachim, Tom                                                                               |`);
  console.log(lines);
}).catch(function (error) {
	console.error(error);
});

