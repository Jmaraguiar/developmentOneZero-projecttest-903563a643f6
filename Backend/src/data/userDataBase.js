import { CustomError } from "../business/services/CustomError.js"
import { Database } from "./Database.js"


export class UserDataBase{
    insert = async (input)=> {
        const {id,nome,email,idade} = input
        await Database.connection()
         .insert({
            id,
            nome,
            email,
            idade
         }).into('users')
    }

    getItemByEmail = async(email)=>{
        const user = await Database.connection()
         .select('*')
         .from('users')
         .where({email: email})

         return user[0]
    }

    getItens = async ()=>{

        const users = await Database.connection()
         .select('*')
         .from('users')

         console.log(users)

    }

    deleteItens = (id)=>{

    }
}

// const db = new userDataBase()
// const id = 'asdasd-asddbabh-14fce23-ef3t45t3'

// db.insert(['asdasd-asddbabh-14fce23-ef3t45t3','João','jm@gmail.com',24])
// db.deleteItens([],id)
// db.getItens([])
