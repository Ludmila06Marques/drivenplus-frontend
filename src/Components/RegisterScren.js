import styled from "styled-components"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios"

export default function RegisterScreen({name , setName , email , setEmail , password , setPassword , cpf , setCpf }){
  
    const navigate= useNavigate()

    function register(){
        const body={
            email,
            name,
            cpf,
            password}
            
        const promise= axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up' , body)
      
        promise
        .then(res=>{
         
            
            navigate("/")
         
        })
      
        .catch(err=>{          
            alert(err)
           
        })
    }


    return(
        <>
        <Container>
         <InputNome  placeholder=" Nome" onChange={(e)=> setName(e.target.value)} value={name} required/>
         <InputCpf  placeholder=" CPF" onChange={(e)=> setCpf(e.target.value)} value={cpf} required/>
         <InputEmail  placeholder=" E-mail" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
         <InputPassword type="password" placeholder=" Senha" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
         <RegisterButton onClick={register} >Registrar</RegisterButton>

         <Link to="/">
        <Login>Já possuí uma conta? Entre</Login>
        </Link>
         </Container>
        </>
    )
}
const Login=styled.h1`
color: 
#FFFFFF;
font-size: 14px;
margin-top: 24px;
text-decoration: underline;
`
const RegisterButton=styled.button`
background-color: 
#FF4791;
width: 298px;
height: 52px;
margin-top: 24px;
border-radius: 8px;
border: solid 1px #FF4791;
`
const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 147px;
`
const InputNome=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-bottom: 16px;
`
const InputCpf=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-bottom: 16px;
`
const InputEmail=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-bottom: 16px;
`
const InputPassword=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-bottom: 16px;
`