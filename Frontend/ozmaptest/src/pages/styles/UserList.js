import { useNavigate } from "react-router-dom"
import { goToMainPage } from "../../router/cordinator"

export const UserList = (props)=>{
    

    const nav = useNavigate()

    return(
        <div>
            <h1>UserList</h1>
            <button onClick={()=>goToMainPage(nav)}>go to MainPage</button>
        </div>
    )
}