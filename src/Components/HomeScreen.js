import { Link  , useNavigate} from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import TokenContext from "../Contexts/TokenContext"
import { useContext } from "react"

export default function HomeScreen({  setEmail , email , password , setPassword}){

  const {setToken , setLogin}=useContext(TokenContext)
    const navigate= useNavigate()

    function loginGo(){
        const body={
         email,
         password}

       const promise= axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login' , body)

             promise
             .then(res=>{   
                setToken(res.data.token)    
                setLogin(res.data)
               
                 if(res.data.membership!== null){
                  navigate("/home")
                 
                 }  
                 else{
                  navigate("/subscriptions")
                 }      
              
             })
              
           .catch(err=>{
             alert(err)
             
             setEmail("")
             setPassword("")
           
           
           })
        }
    return(
        <>
        <Container>
        <Logo src="/img/Logo.png"/>
        <InputEmail  placeholder=" E-mail" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
        <InputPassword  type="password" placeholder=" Senha" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
        <LooginButton onClick={loginGo} >ENTRAR</LooginButton>
        <Link to="/sign-up">
        <Register>Não possuí uma conta? Cadastre-se</Register>
        </Link>
        </Container>
        
        </>
    )
}
const Register=styled.h1`
color: 
#FFFFFF;
font-size: 14px;
margin-top: 24px;
text-decoration: underline;
`
const LooginButton=styled.button`
background-color: 
#FF4791;
width: 298px;
height: 52px;
margin-top: 24px;
border-radius: 8px;
border: solid 1px #FF4791;
color: white;
`
const InputPassword=styled.input`
width: 299px;
height: 52px;
margin-top: 16px;
border-radius: 8px;
`
const InputEmail=styled.input`
width: 299px;
height: 52px;
margin-top: 100px;
border-radius: 8px;
`
const Container=styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Logo=styled.img`
font-size: 20px;

`