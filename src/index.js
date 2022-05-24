const axios = require('axios');

const headers = {
  "Content-Type": "application/json",
  "apikey": "863dd533d329430dbb5b19ba56cc6e8a"
  //"workspace": "YOUR_WORKSPACE_ID"
}

async shorten = url => {
    let endpoint = "https://api.rebrandly.com/v1/links";
  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" }
    //, slashtag: "A_NEW_SLASHTAG"
    //, title: "Rebrandly YouTube channel"
  }
  const apiCall = {
      method: 'post',
      url: endpoint,
      data: linkRequest,
      headers: headers
  }
  let apiResponse = await axios(apiCall);
  let link = apiResponse.data;
  return link.shortUrl;
}

let shortUrl = await shorten("https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g");
console.log(shortUrl);
