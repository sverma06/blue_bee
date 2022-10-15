const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to DB
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

//create table
sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password,email)`;
db.run(sql);

//drop table
// db.run("DROP TABLE users");

//Insert table
sql = `INSERT INTO users(first_name, last_name, username, password,email) values (?,?,?,?,?)`;
db.run(
    sql, 
    ["Mike", "Tyson", "MK", "123", "mike@gmail.com"],
    (err) => {
        if(err) return console.err(err.nessage);
    }
);

//update
sql = `UPDATE users SET first_name = ? WHERE id = ?`
db.run(sql, ["Jake", 1], (err) => {
    if (err) return console.error(err.message);
});

//delete
sql = `DELETE FROM users WHERE id=?`
db.run(sql, [1], (err) => {
    if (err) return console.error(err.message);
});

//query the data
sql = `Select * FROM users`;
db.all(sql, [], (err,rows) => {
    if (err) return console.error(err.message);
    rows.forEach((rows) => {
        console.log(row);
    });
});
