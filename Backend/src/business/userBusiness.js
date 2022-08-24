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

        const user = await userDatabase.getItens()
        // console.log(user)

        //retornar resposta
        return "Usuário criado com sucesso"
    }
}