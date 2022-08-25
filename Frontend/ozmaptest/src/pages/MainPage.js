import { useNavigate } from "react-router-dom"
import { goToUserList } from "../router/cordinator"
import { Container } from "./styles/mainPageStyle"
import { FormDisplay } from "./styles/mainPageStyle"
import { Header } from "./styles/mainPageStyle"


export const MainPage = (props)=>{
    

    const nav = useNavigate()

    return(
        <Container>
            <Header>
                <div>
                    <h1>Ozmap</h1>
                    <h3>Cadastro</h3>
                </div>
                <button onClick={()=>goToUserList(nav)}>go to user list</button>
            </Header>
            <FormDisplay>
                <h1> Área de cadastro</h1>
                <input type={'text'} placeholder={'Nome'}/>
                <input type={'text'} placeholder={'Email'}/>
                <input type={'number'} placeholder={'Idade'}/>
                <button>Cadastrar</button>
            </FormDisplay>
        </Container>
    )
}