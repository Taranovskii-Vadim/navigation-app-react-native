import * as sqlLite from "expo-sqlite";

const db = sqlLite.openDatabase("post.db");

const CREATE_QUERY =
  "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INTEGER)";

export class Database {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          CREATE_QUERY,
          [],
          _ => {
            resolve(true);
          },
          (s, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  static getData() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM posts",
          [],
          (_, data: any) => {
            resolve(data.rows._array);
          },
          (s, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  static addPost({ text, booked, date, img }: any) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "INSERT INTO posts (text, date, booked, img) VALUES (?, ?, ?, ?)",
          [text, date, booked, img],
          (_, resp) => resolve(resp.insertId),
          (s, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }
}
