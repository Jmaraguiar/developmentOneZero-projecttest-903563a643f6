import sqlite3 from 'sqlite3'

export const useConnection = new sqlite3.Database('./dataBase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)

    console.log("Connection successful")
});

useConnection.run(`CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL)`)

// useConnection.run(`DROP TABLE IF EXISTS users`)



// const sqlInsert = `INSERT INTO users (id,name,email,age) VALUES (?,?,?,?)`
// const sqlSelect = `SELECT * FROM users`
// const sqlDel = `DELETE FROM users WHERE id = ${param}`

// db.run(sqlInsert,[3,'João','joao@gmail.com',24],(err)=>{
//     if(err) return console.error(err.message)

//     console.log("Row created")
// })
    
// db.all(sqlDel,[],(err)=>{
//     if(err) return console.error(err.message)
    
//     console.log("Row Deleted")
// })

// db.all(sqlSelect,[],(err,rows)=>{
//     if(err) return console.error(err.message)

//     rows.forEach((row)=>{
//         console.log(row)
//     })
// })

// db.close((err)=>{
//     if(err) return console.error(err.message)
// })
        


