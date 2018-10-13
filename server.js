const express = require('express');

const dotenv = require('dotenv').config();

const request = require('request');

const app = express();

const URL = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search';
const KEY = process.env.API_KEY; 

const Search = require('azure-cognitiveservices-imagesearch');
const { CognitiveServicesCredentials } = require('ms-rest-azure')


const Query = (key) =>  {
  let credentials = new CognitiveServicesCredentials(key);

  let imageSearchApiClient = new Search.ImageSearchAPIClient(credentials);

  return async (q,options) => {
    return await imageSearchApiClient.imagesOperations.search(q, options);
  }
};

const query = Query(KEY);

app.get('/photos', async function(req, res){
  //const headers = { 'Ocp-Apim-Subscription-Key': KEY };
  //const { q } = req.query;
  //request({ uri: URL, qs: { q }, headers }).pipe(res)

  try {
    const { q, offset, count, paginate } = req.query;
    let opts = {};
    if (paginate) {
      opts = { count: parseInt(count), offset: parseInt(offset) };
    }
    const imageResults = (await query(q, opts) || { value: [] });
    const images = imageResults.value.map(({ contentUrl })=>({ src: contentUrl }));
    const total = imageResults.totalEstimatedMatches;
    res.send({ images, total })
  } catch(e) {
    console.error(e);
    res.status(500).send('Error fetching images')
  }

})


app.use(express.static('public'))

app.listen(process.env.PORT || 3000)
