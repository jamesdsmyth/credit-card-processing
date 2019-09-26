import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config()

const router = express.Router();
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0-sk32q.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.set('useUnifiedTopology', true);

mongoose.connect(DB_URL, { useNewUrlParser: true }, ).then(
  () => { console.log('connected') },
  err => { console.log('not connected', err) }
);

const studentSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  course: String
});

const studentModel = mongoose.model('Student', studentSchema);

router.get('/credit-cards', (req, res) => {
  studentModel.find((err, students) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(students);
    }
  });
});

router.post('/', (req, res) => {
  const id = new mongoose.Types.ObjectId()
  const studentToPersist = Object.assign({ _id: id }, req.body)
  const student = new studentModel(studentToPersist);
  student.save().then((err, student) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(student);
    }
  });
});

export default router;