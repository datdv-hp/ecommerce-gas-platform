'use strict';
const mongoose = require('mongoose');
const {
  db: { host, port, name },
} = require('../configs/config.mongodb');
console.log({ host, port, name });

const connectString = `mongodb://${host}:${port}/${name}`;
console.log(connectString);
const { countConnect } = require('../heplers/check.connect');

class Database {
  constructor(type) {
    this.connect(type);
  }

  // connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', {
        color: true,
      });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50, //default maxPoolSize 100
      })
      .then((_) => {
        console.log(`Connected MongoDB successfully`, countConnect());
      })
      .catch((err) => console.log(`[Error] Connection errors! ${err.message}`));
  }

  static getInstance() {
    if (!Database.instance) {
      console.log(`Create new instance`);
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;
