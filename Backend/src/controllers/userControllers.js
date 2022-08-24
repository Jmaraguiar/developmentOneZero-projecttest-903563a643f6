import { PORT } from "../app.js";
import { UserBusiness } from "../business/userBusiness.js";

const userBusiness = new UserBusiness

export class UserController {

    emptyList = async (ctx)=>{
        try {
            console.log('emptyList')
            ctx.status = 200;
            ctx.body = {total:0, count: 0, rows:[]} 
        } catch (error) {
            ctx.body = {message: error.message}
        }
    }

    isOnline = async (ctx)=>{
        ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://lotcalhost:3000/
    }

    insertUser = async (ctx,next)=>{
        try {
            console.log('insertUser')
            const {nome,email,idade} = ctx.request.body
            const input = {
                nome,
                email,
                idade
            }
            const res = await userBusiness.insertUser(input)
            ctx.body = res
            ctx.status = 201
        } catch (error) {
            ctx.body = {message: error.message}
            ctx.status = error.statusCode || 500
        }
    }

    getAllUsers = async (ctx,next)=>{
        try {
            console.log('getAllusers')
            const response = await userBusiness.getAllUsers()
            ctx.body = {response,total: response.length}
            ctx.status = 200
        } catch (error) {
            ctx.body = {message: error.message}
            ctx.status = error.statusCode || 500
        }
    }

    getUserByName = async (ctx,next)=>{
        try {
            console.log('get user by name')
            const name = ctx.request.params.name
            const res = await userBusiness.getUserByName(name)
            console.log({nome: res.nome, email: res.email,idade: res.idade})
            ctx.body = {nome: res.nome, email: res.email,idade: res.idade}
            ctx.status = 200
        } catch (error) {
            ctx.body = {error: error.message}
            ctx.status = error.statusCode || 500
        }
    }

    deleteUserByName = async (ctx,next)=>{
        try {
            console.log('delete user by name')
            const name = ctx.request.params.name
            console.log(name)
            const res = await userBusiness.deleteUserByName(name)
            
            console.log({nome: res.nome, email: res.email,idade: res.idade})
            ctx.body = {nome: res.nome, email: res.email,idade: res.idade}
            ctx.status = 200
        } catch (error) {
            ctx.body = {message: error.message}
            ctx.status = error.statusCode || 500
        }
    }
}