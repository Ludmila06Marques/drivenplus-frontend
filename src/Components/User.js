import TokenContext from "../Contexts/TokenContext";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function User(){
    const navigate=useNavigate()
    function updateBotton(){
        navigate(`/users/${login.id}/update`)
    }
  

    function goBack(){
        navigate("/home")

    }
    const {login}=useContext(TokenContext)
    console.log(login)

  


    return(<>
     <Icones>
        <ion-icon onCLick={goBack} name="arrow-back-outline"></ion-icon>
       
        </Icones>
    <Group>
    <Form>
        <InputName placeholder={login.name} disabled/>
        <InputCpf placeholder={login.cpf} disabled/>
        <InputEmail placeholder={login.email} disabled/>
        <UpdateBotton onClick={updateBotton}
        >ATUALIZAR</UpdateBotton>
    </Form>
    </Group>
    </>)

    
}
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const UpdateBotton=styled.button`
background-color: 
#FF4791;
width: 298px;
height: 52px;
margin-top: 24px;
border-radius: 8px;
border: solid 1px #FF4791;
color: white;

`

const Icones=styled.div`
width: 100%;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
ion-icon{
    font-size: 40px;
    visibility: visible;
    color: white;

}

`
const Group=styled.div`

margin-top: 150px;
`
const InputName=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
background-color:#EBEBEB ;

`
const InputCpf=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-top: 16px;
background-color:#EBEBEB ;
`
const InputEmail=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-top: 16px;
background-color:#EBEBEB ;
`
