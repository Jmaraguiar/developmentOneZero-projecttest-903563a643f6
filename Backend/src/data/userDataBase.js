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

    getItemById = async(id)=>{
        const user = await Database.connection()
         .select('*')
         .from('users')
         .where({id: id})

         return user[0]
    }

    updateItemById = async(input)=>{
        const {id,nome,email,idade} = input
        await Database.connection.raw(
            `UPDATE users SET nome = ${nome}, email = ${email}, idade = ${idade} WHERE id = ${id}`
        )

         
    }

    getItemByName = async(name)=>{
        const user = await Database.connection()
         .select('*')
         .from('users')
         .where({nome: name})

         return user[0]
    }

    getItens = async ()=>{

        const users = await Database.connection()
         .select('*')
         .from('users')

         return users

    }

    deleteItens = async (name)=>{
        await Database.connection()
         .where({nome: String(name)})
         .delete()
         .from('users')
        
    }
}

