var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "yrty30i6ty2m0iy0",
      password: "d6znoguzikj2a34r", // add your local password here.
      database: "esnndb682o2ahp8t" // add your db name here
    });
  }
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // connection.config.typeCast = function(field, next) {
  //   if (field.type == "TINY" && field.length == 1) {
  //     return field.string() == "1"; // 1 = true, 0 = false
  //   }
  //   return next();
  // };
  
  module.exports = connection;