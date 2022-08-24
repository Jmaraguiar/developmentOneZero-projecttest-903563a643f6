import { PORT } from "../app.js";
import { UserBusiness } from "../business/userBusiness.js";

const userBusiness = new UserBusiness

export class UserController {

    emptyList = async (ctx)=>{
        try {
            
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

    updateUserbyId = async (ctx,next)=>{
        try {
            console.log('update user')
            const {id,nome,email,idade} = ctx.request.body
            const input = {
                id,
                nome,
                email,
                idade
            }
            const res = await userBusiness.updateUserById(input)
            ctx.body = res
            ctx.status = 200
        } catch (error) {
            ctx.body = {message: error.message}
            ctx.status = error.statusCode || 500
        }
    }

    getAllUsers = async (ctx,next)=>{
        try {
           
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
        
            const name = ctx.request.params.name
            const res = await userBusiness.getUserByName(name)
            ctx.body = res
            ctx.status = 200

        } catch (error) {
            ctx.body = {error: error.message}
            ctx.status = error.statusCode || 500
        }
    }

    deleteUserByName = async (ctx,next)=>{
        try {

            const name = ctx.request.params.name
            const res = await userBusiness.deleteUserByName(name)
        
            ctx.body = res
            ctx.status = 200
        } catch (error) {
            ctx.body = {message: error.message}
            ctx.status = error.statusCode || 500
        }
    }
}