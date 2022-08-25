import { UserDataBase } from "../data/userDataBase.js"
import { CustomError } from "./services/CustomError.js"
import { IdGenerator } from "./services/IdGenerator.js"

const userDatabase = new UserDataBase
const uuid = new IdGenerator()

export class UserBusiness {
    insertUser = async (input)=>{
        const {nome,email,idade} = input

        // validar entrada de dados
        if(!nome || !email || !idade){
            throw new CustomError(400,'Faltando informações')
        }

        //checar existência do usuário
        const checkUser = await userDatabase.getItemByEmail(email)
        console.log(checkUser)
        if(checkUser){
            throw new CustomError(409,'Este email ja está cadastrado')
        }

        //checar idade do usuário
        if( idade < 18){
            throw new CustomError(403,'Necessário ter no mínimo 18 anos para se cadastrar')
        }
        //gerar id
        const id = String(uuid.generateId())

        //gerar um novo input retificado
        const newInput = {
            id,
            nome,
            email,
            idade
        }

        //inserir no banco de dados
        await userDatabase.insert(newInput)

        //retornar resposta
        return "Usuário criado com sucesso"
    }

    getUserByName = async (name)=>{
        if(!name){
            throw new CustomError(400,'Nome de usuário não inserido')
        }

        const user = await userDatabase.getItemByName(name)
        if(!user){
            throw new CustomError(404,'User not found')
        }
        
        return user
    }

    deleteUserByName = async (name)=>{
        if(!name){
            throw new CustomError(400,'Nome de usuário não inserido')
        }

        const user = await userDatabase.getItemByName(name)

        if(!user){
            throw new CustomError(404,'User not found')
        }

        await userDatabase.deleteItens(name)

        return user
    }

    updateUserById = async (input)=>{
        const {id,nome,email,idade} = input
        if(!id || !nome || !email || ! idade){
            throw new CustomError(400,'Faltando informações')
        }

        if( idade < 18){
            throw new CustomError(403,'Usuários não podem ter menos de 18 anos')
        }

        const user = await userDatabase.getItemById(id)

        if(!user){
            throw new CustomError(404,'User not found')
        }

        await userDatabase.updateItemById(input)

        const updatedUser = userDatabase.getItemByName(nome)
        
        return updatedUser
    }

    getAllUsers = async ()=>{
        
        const users = await userDatabase.getItens()
        
        return users
    }
}