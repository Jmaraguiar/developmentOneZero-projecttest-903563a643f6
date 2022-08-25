import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Header = styled.header`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top: 0px;

h1{
    font-size: 50px;
    position: relative;
    top: 10px;
}

div{
    text-align: center;
    margin-left: 15px;
}

button{
    height: 70%;
    width: 200px;
    margin-right: 15px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    font-weight: bolder;

    :hover{
        background-color: blue;
        color: white;
        cursor: pointer;
    }
}
`

export const UserDisplay = styled.div`
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
`



