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

const cardSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  cardNumber: String,
  balance: mongoose.Types.Decimal128,
  limit: Number
});

const cardModel = mongoose.model('CreditCards', cardSchema);

router.get('/', (req, res) => {
  cardModel.find((err, cards) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(cards);
    }
  });
});

router.post('/', (req, res) => {
  const id = new mongoose.Types.ObjectId()
  const cardToPersist = Object.assign({ _id: id }, req.body)
  const card = new cardModel(cardToPersist);
  card.save().then((err, card) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(card);
    }
  });
});

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