import express from 'express';
import bodyParser from 'body-parser';
import tracker from '@gleerups/serverside-tracker';

const visitor = tracker({
  trackingId: 'dummy-contex-tracker',
  headers: {
    'x-api-key': 'apiKey123',
    'content-type': 'application/json',
  },
});

const app = express();
app.use(bodyParser.json());

const log = (...params: any[]) => console.log(...params);

// testing endpoint
app.get('/', (req, res) => {
    log('GET /');
    
    const url = 'http://localhost:4000';
    const userId = 'user123';
    const articleId = 'article456';
    const someBookId = 'book789';

    const body = JSON.stringify({
      url,
      userId,
      articleId,
      educationalMaterialID: someBookId,
      timestamp: Date.now(),
      eventType: 'pageView',
    });

    visitor.pageview(
      {
        body,
        pagePath: url,
      },
      function(err) {
        console.log('failed to send pageview event', err);
      }
    );
    res.send('GET OK');
});

// endpoint for recieving serverside-tracker POST's
app.post('/', (req, res) => {
  log('---------');
  log('POST /');
  
  log('recieved headers:', req.headers);

  log('recieved body:', req.body);

  res.send('POST OK');
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})