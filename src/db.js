const mysql = require('mysql')

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database:'ventas_claro_db'
});


con.connect(function(err) {
  if (err) throw err;
  else console.log("db is connected!");
 
});

module.exports = con
