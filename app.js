import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
require('./server/models');

const print = console;

const port = process.env.PORT || 5000


const app = express();

app.get('/api/v1', (req, res) => res.status(200).json({
  message: 'this is the application home page'
}));

app.route('/*').all((req, res) => res.status(404).json({
  status: 404,
  error: '404 Route not found'
}));


app.listen(app.get(port), () => {
  print.log(
    `server is up and running on http://localhost:${port} in mode %s`,
    app.get(port),
    app.get('env')
  );
  print.log(' Press CTRL + C to Terminate application');
});
