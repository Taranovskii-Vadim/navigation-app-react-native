import * as sqlLite from "expo-sqlite";

const db = sqlLite.openDatabase("post.db");

const CREATE_QUERY =
  "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INTEGER)";

export class Database {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(CREATE_QUERY, [], resolve, (s, error) => {
          reject(error);
          return false;
        });
      });
    });
  }
}
