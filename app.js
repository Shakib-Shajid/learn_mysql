import mysql from "mysql2/promise";

//   1. connect o mysql server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
})



console.log("hello");




/**
 * 2. create DB
 * 3. create a table
 * 4. perform CRUD 
 * */ 