import mysql from "mysql2/promise";

//   1. connect o mysql server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootAdmin20#",
    database: "mysql_db",
})

console.log("database connected");

// 2. create DB

// await db.execute (`create database mysql_db`);

// console.log(await db.execute('show databases'));

// ........................................................

//  3. create a table

// await db.execute(`
//     CREATE TABLE users (
//     id INT 
//     AUTO_INCREMENT PRIMARY KEY, 
//     username VARCHAR(100) NOT NULL, 
//     email VARCHAR(100) NOT NULL UNIQUE);
//     `)



//  4. perform CRUD 

// insert

// await db.execute(`
//     insert into users(username, email) values('abcd', "abcd@gmail.com")
//     `);

// await db.execute(`insert into users(username, email) values(?,?)`, ["efgh", "efgh@gmail.com"]);



// read
const [rows] = await db.execute(` select * from users `)
console.log(rows);
// [rows field]



