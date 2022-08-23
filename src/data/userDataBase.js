import { useConnection } from "./BaseDataBase.js"


export class userDataBase{
    insert = (input)=> {
        const sql = `INSERT INTO users (id,name,email,age) VALUES (?,?,?,?)`
        useConnection.run(sql,input,(err)=>{
            if(err) return console.error(err.message)

            console.log("Row created")
        })

        // useConnection.close((err)=>{
        //     if(err) return console.error(err.message)
        // })
    }

    getItens = (input)=>{
        const sql = `SELECT * FROM users`
        useConnection.all(sql,input,(err,rows)=>{
            if(err) return console.error(err.message)

            console.log(rows)
            
        })

        // useConnection.close((err)=>{
        //     if(err) return console.error(err.message)
        // })
    }

    deleteItens = (input,id)=>{
        const sql = `DELETE FROM users WHERE id = '${id}'`
        console.log(sql)
        useConnection.run(sql,input,(err)=>{
            if(err) return console.error(err.message)

            console.log("Row deleted")
        })

        // useConnection.close((err)=>{
        //     if(err) return console.error(err.message)
        // })

    }
}

const db = new userDataBase()
const id = 'asdasd-asddbabh-14fce23-ef3t45t3'

db.insert(['asdasd-asddbabh-14fce23-ef3t45t3','João','jm@gmail.com',24])
// db.deleteItens([],id)
db.getItens([])
