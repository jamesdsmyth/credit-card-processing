import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes.js';

const PORT = 3001;
const BASE_URL = '/api/credit-cards';
const server = express();

server.use(cors());

server.use(morgan('tiny'));
server.use(bodyParser.json())
server.use(express.static('public'));

server.use(BASE_URL, routes);

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});