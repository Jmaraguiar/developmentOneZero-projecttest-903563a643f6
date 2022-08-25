import styled from "styled-components"

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

export const FormDisplay = styled.form`
display: flex;
gap: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
border-radius: 10px;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.712);

input{
    font-size: 20px;
    display: flex;
    text-align: center;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;

    :focus{
        outline: none;
    }
}

button{
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: bolder;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;

    :hover{
        font-size: 18px;
        cursor: pointer;
    }
}
`
