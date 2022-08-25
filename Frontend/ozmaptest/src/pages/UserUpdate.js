import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goToUserList } from "../router/cordinator"
import { Container } from "./styles/userUpdateStyle"
import { FormDisplay } from "./styles/userUpdateStyle"
import { Header } from "./styles/userUpdateStyle"
import axios from 'axios'
import { BASE_URL } from "../constants/BaseURL"


export const UserUpdate = (props)=>{
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const nav = useNavigate()
    const { id } = useParams()

    const updateUser = (e)=>{
        e.preventDefault()
        const body = {
            id,
            nome: name,
            email,
            idade: age
        }

        axios.put(`${BASE_URL}/update`,body)
        .then(res=>{
            alert(`Usuário '${name}' atualizado`)
            goToUserList(nav)
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
                <button onClick={()=>goToUserList(nav)}>voltar para users</button>
            </Header>
            <FormDisplay>
                <h1>Preencha os dados atualizados</h1>
                <input required value={name} onChange={onChangeName} type={'text'} placeholder={'Nome'}/>
                <input required value={email} onChange={onChangeEmail} type={'email'} placeholder={'Email'}/>
                <input required value={age} onChange={onChangeAge} type={'number'} placeholder={'Idade'}/>
                <button onClick={updateUser}>Atualizar</button>
            </FormDisplay>
        </Container>
    )
}