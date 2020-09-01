import fs from 'fs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Advert from '../models/advertModel';

dotenv.config();

// Remote Database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// const DB = process.env.DATABASE_LOCAL; // Local Database

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const adverts = JSON.parse(fs.readFileSync('./data/adverts.json', 'utf-8'));

// DELETE ALL DATA AND LOAD ALL TO DB
const initDB = async () => {
  try {
    await Advert.deleteMany();
    console.log('Data successfully deleted!');
    await Advert.create(adverts);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

initDB();
