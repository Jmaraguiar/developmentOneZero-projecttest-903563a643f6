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
}