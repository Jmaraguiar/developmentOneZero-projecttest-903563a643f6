import { useNavigate } from "react-router-dom"
import { goToUserList } from "../router/cordinator"

export const MainPage = (props)=>{
    

    const nav = useNavigate()

    return(
        <div>
            <h1>MainPage</h1>
            <button onClick={()=>goToUserList(nav)}>go to user list</button>
        </div>
    )
}