import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserMenu } from "../components/UserMenu"
import { BASE_URL } from "../constants/BaseURL"
import { goToMainPage } from "../router/cordinator"
import { Container, Header, UserDisplay } from "./styles/userListStyle"

export const UserList = (props)=>{
    const [users,setUsers] = useState()

    const getUsers = ()=>{
        
        axios.get(`${BASE_URL}/users/all`)
        .then(res=>{
            setUsers(res.data.response)
        }).catch(err=>{
            console.log(err)
        })
    }

    const deleteUser = (name)=>{
        const confirm = window.confirm(`tem certeza que deseja excluir o usuário "${name}"?`)
        if(confirm){
            axios.delete(`${BASE_URL}/del/${name}`)
            .then(res=>{
                getUsers()
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    const userList = users && users.map(user=>{
        return <UserMenu
            key = {user.id}
            id = {user.id}
            name = {user.nome}
            email = {user.email}
            age = {user.idade}
            delUser = {deleteUser}

        />
    })
    

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
                {userList}
            </UserDisplay>
        </Container>
    )
}