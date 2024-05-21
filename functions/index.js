const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({origin: true});

// Reemplaza con tus tokens de API de las diferentes plataformas
/* eslint-disable max-len */
const TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAACajtwEAAAAAyXKp1S17i8ympff9RtnPf%2FbwOCk%3Dcjq2cOTholOZTa3oh0GBFJlZMX3HvnZg6zZn2C6g1DLLG2si6L";
/* eslint-enable max-len */

// Función de búsqueda
exports.search = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const keyword = req.query.keyword;

    try {
      // Búsqueda en Twitter
      const twitterResponse = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${keyword}`, {
        headers: {
          "Authorization": `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      });

      const twitterResults = twitterResponse.data.data;

      // Combina los resultados de las diferentes plataformas
      const results = [
        ...twitterResults.map((tweet) =>({
          title: tweet.text,
          snippet: tweet.text,
          url: `https://twitter.com/i/web/status/${tweet.id}`,
        })),
      ];

      res.json({results});
    } catch (error) {
      console.error("Error fetching search results:", error);
      res.status(500).send(error.toString());
    }
  });
});
