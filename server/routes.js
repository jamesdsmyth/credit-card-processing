import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

const router = express.Router();
const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0-shard-00-00-sk32q.mongodb.net:27017,cluster0-shard-00-01-sk32q.mongodb.net:27017,cluster0-shard-00-02-sk32q.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.set('useUnifiedTopology', true);

mongoose.connect(DB_URL, { useNewUrlParser: true }, ).then(
  () => { console.log('I am connected') },
  err => { console.log('I am not connected', err) }
);

// creating the credit card schema with a unique ID
const cardSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  cardNumber: String,
  balance: Number,
  limit: Number
});

const cardModel = mongoose.model('CreditCards', cardSchema);

// GET request. Cardmodel is also sorted in Alphabetical order.
router.get('/', (req, res) => {
  cardModel.find((err, cards) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(cards);
    }
  }).sort('name');
});

// POST request. We create a unique ID for the user and merge it in with the payload.
router.post('/', (req, res) => {
  const id = new mongoose.Types.ObjectId()
  const cardToPersist = Object.assign({ _id: id }, req.body)
  const card = new cardModel(cardToPersist);
  card.save().then((success, err) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(success);
    }
  });
});

// DELETE request. This was used by me to delete card details when developing
router.delete('/:id', (req, res) => {
  cardModel.findByIdAndRemove(req.params.id, (err, card) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`Card with id of ${req.params.id} was deleted`);
    }
  });
});

export default router;