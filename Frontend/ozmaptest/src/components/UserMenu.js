import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { goToUserUpdate } from '../router/cordinator'

const Display = styled.div`
    width: 95%;
    height: 35px;
    border: 1px solid;
    border-left: none;
    border-right: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    `
    const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    `
    const Menu = styled.div`
    display: flex;
    height: 100%;
    gap: 2px;


    button{
        height: 100%;
        border: none;
        padding-left: 5px;
        padding-right: 5px;

        :hover{
            cursor: pointer;
        }
    }

    .edit{
        background-color: blue;
        color: white;
        :hover{
            font-size: 15px;
        }
    }

    .del{
        background-color: red;
        color: white;
        :hover{
            cursor: pointer;
            :hover{
            font-size: 15px;
        }
        }
    }
    `

export const UserMenu = (props)=>{
    const nav = useNavigate()

    return(
        <Display>
            <Info>
                <p> nome: {props.name}</p>
                <p>{props.email}</p>
                <p>idade: {props.age} anos</p>
            </Info>
            <Menu>
                <button className="edit" onClick={()=>goToUserUpdate(nav,props.id)}>Editar</button>
                <button className="del" onClick={()=>props.delUser(props.name)}>Excluir</button>
            </Menu>
        </Display>
    )
}