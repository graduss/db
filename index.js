'use strict';

const { MongoClient, ObjectID } = require("mongodb");

class DB {
  constructor(url) {
    this.db = DB.openConnection(url);
  }

  collection (name) {
    return this.db.then((db) => db.collection(name));
  }

  databaseName () {
    return this.db.then((db) => db.databaseName);
  }

  close () {
    return this.db
    .then((db) => db.close())
  }

  get ObjectID () { return  ObjectID; }

  static get ObjectID () { return  ObjectID; }

  static openConnection(url) {
    return MongoClient.connect(url);
  }
}

function dbConnection (url) {
  return new DB(url);
}

dbConnection.instDB = DB;
dbConnection.ObjectID = ObjectID;

module.exports = dbConnection;
