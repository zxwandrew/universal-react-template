import express from 'express'
import http from 'http';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import reactViews from 'express-react-views';

import { routes } from './app/routes/routes';

const app = express();

app.set('port', process.env.PORT || 3003);
app.set('views', 'views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(express.static('dist'));

app.get('*', (req, res) => {
  match({routes, location: req.url}, (err, redirectLocation, props) =>{
    if(err){
      res.status(500).send(err.message);
    }else if(redirectLocation){
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }else if (props){
      const markup = renderToString(<RouterContext {...props}/>);
      res.render('index.jsx', {data: markup})
    }else{
      res.sendStatus(404);
    }
  });
});

const server = http.createServer(app);

server.listen(app.get('port'));
server.on('listening', () => {
  console.log('Listening on 3003');
  console.log(__dirname);
});
