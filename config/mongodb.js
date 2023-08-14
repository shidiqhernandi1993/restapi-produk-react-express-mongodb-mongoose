const { MongoClient } = require("mongodb");

const url = "mongodb://admin:root@127.0.0.1:27017?authSource=admin";
const client = new MongoClient(url);

(async () => {
 try {
  console.log("koneksi ke mongo db berhasil!");
} catch (error) {
 console.log(error);
 }
})();

const db = client.db("daftarprodukshidiq");

module.exports = db;
