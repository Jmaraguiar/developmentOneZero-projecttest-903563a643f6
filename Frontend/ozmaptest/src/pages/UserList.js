import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../components/BaseURL"
import { goToMainPage } from "../router/cordinator"
import { Container, Header, UserDisplay } from "./styles/userListStyle"

export const UserList = (props)=>{
    const [users,setUsers] = useState()

    const getUsers = ()=>{
        axios.get(`${BASE_URL}/users/all`)
        .then(res=>{
            setUsers(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getUsers()
        console.log('começou')
    },[])
    

    const nav = useNavigate()

    return(
        <Container>
            <Header>
                <div>
                    <h1>Ozmap</h1>
                    <h3>Cadastro</h3>
                </div>
                <button onClick={()=>goToMainPage(nav)}>Voltar</button>
            </Header>
            <UserDisplay>
                <h1>Gerenciador de Usuários Cadastrados</h1>
            </UserDisplay>
        </Container>
    )
}