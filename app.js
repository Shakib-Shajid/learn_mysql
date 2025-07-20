import mysql from "mysql2/promise";

//   1. connect o mysql server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootAdmin20#",
    // database: "mysql_db",
})


// 2. create DB

await db.execute (`create database mysql_db`);

console.log(await db.execute('show databases'));

// ........................................................

//  3. create a table




 
//  4. perform CRUD 