import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToUserList } from "../router/cordinator"
import { Container } from "./styles/mainPageStyle"
import { FormDisplay } from "./styles/mainPageStyle"
import { Header } from "./styles/mainPageStyle"
import axios from 'axios'
import { BASE_URL } from "../constants/BaseURL"


export const MainPage = (props)=>{
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const nav = useNavigate()

    const postUser = (e)=>{
        e.preventDefault()
        const body = {
            nome: name,
            email,
            idade: age
        }
        
        axios.post(`${BASE_URL}/signup`,body)
        .then(res=>{
            alert(`Usuário '${name}' criado com sucesso`)
        }).catch(err=>{
            console.log(err)
        })
    }

    const onChangeName = (e)=>{
        e.preventDefault()
        setName(e.target.value)
    }

    const onChangeEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const onChangeAge = (e)=>{
        e.preventDefault()
        setAge(e.target.value)
    }

    return(
        <Container>
            <Header>
                <div>
                    <h1>Ozmap</h1>
                    <h3>Cadastro</h3>
                </div>
                <button onClick={()=>goToUserList(nav)}>Gerenciar users</button>
            </Header>
            <FormDisplay>
                <h1> Área de cadastro</h1>
                <input required value={name} onChange={onChangeName} type={'text'} placeholder={'Nome'}/>
                <input required value={email} onChange={onChangeEmail} type={'email'} placeholder={'Email'}/>
                <input required value={age} onChange={onChangeAge} type={'number'} placeholder={'Idade'}/>
                <button onClick={postUser}>Cadastrar</button>
            </FormDisplay>
        </Container>
    )
}