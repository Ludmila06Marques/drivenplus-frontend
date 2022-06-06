import TokenContext from "../Contexts/TokenContext";
import axios from "axios";
import styled from "styled-components";
import { useContext  , useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Update(){
    const navigate=useNavigate()  
    const {token ,  login }=useContext(TokenContext) 
     console.log(login)
    
    const [newPass , setNewPass]=useState("")
    const [newName , setNewName]=useState(`${login.name}`)
    const [newEmail , setNewEmail]=useState(`${login.email}`)
  
    function goBack(){
        navigate(`/users/${login.id}`)

    }
    function save(e){
        e.preventDefault()
     
        const config={
            headers:{
            Authorization:`Bearer ${token}`
            }
        }
        console.log(config)
        const body={
           name:newName,
           cpf: login.cpf,
           email:newEmail,
           currentPassword:login.password,
           newPassword:newPass
        }
      
        console.log(body)

        const promise=axios.put("https://mock-api.driven.com.br/api/v4/driven-plus/users/"  ,body ,config)
       
        promise
        .then(res=>{
           console.log(res.data)  
           navigate(`/users/${login.id}`)       
         
        })
      
        .catch(err=>{          
            alert(err)
            console.log(err)
           
        })
    }
  


    return(<>
    <Icones>
        <ion-icon onClick={goBack} name="arrow-back-outline"></ion-icon>
       
        </Icones>
    <Group>
    <Form>
        <InputName placeholder={login.name} onChange={(e)=> setNewName(e.target.value)} value={login.name} />
        <InputCpf placeholder={login.cpf} disabled/>
        <InputEmail placeholder={login.email}onChange={(e)=> setNewEmail(e.target.value)} value={login.email}  />
        <InputPassword placeholder="Senha Atual"  />
        <InputNewPassword placeholder="Nova senha"onChange={(e)=> setNewPass(e.target.value)} value={newPass}  />

        <UpdateBotton onClick={save} >SALVAR</UpdateBotton>
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

margin-top: 100px;
`
const InputName=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
background-color:white ;

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
background-color:white ;
`
const InputPassword=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
background-color:white ;
margin-top: 16px;

`
const InputNewPassword=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
background-color:white ;
margin-top: 16px;

`