import react from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Ask({name , price , modal , setModal , click , setClick , membershipId1 , cardName , cardNumber , securityNumber , expirationDate , token , setChoose}){
  
    console.log(modal)
    const navigate= useNavigate()
      
    function assinar() {
        const config={
            headers:{
            Authorization:`Bearer ${token}`
            }
        }
        console.log(config)
        const body={
        membershipId: membershipId1,
        cardName,
        cardNumber,
        securityNumber,
        expirationDate
    }  
    const promise= axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions" ,body , config )

    promise 
    .then((res)=>{
      setChoose(res.data.membership)

       console.log(res.data)
      setModal(!modal)
      navigate("/home")
      
    }
    )
    .catch((err)=>{
        console.log(err)

    }
    )}
    return(
       <>
       {modal &&
       <Overlay>
       < ion-icon  onClick={()=> setModal(false)} name="close-outline"></ion-icon>
       <AskGroup>
        <AskTitle>Tem certeza que deseja assinar o plano {name}({price}) ?</AskTitle>
        <ButtonNo onClick={()=> setModal(!modal)} >Nao</ButtonNo>
        <ButtonYes onClick={assinar} >Sim</ButtonYes>
        </AskGroup>
        </Overlay>
        }
        </>
    )
}
const ButtonNo=styled.button`
width: 95px;
height: 52px;
border-radius: 8px;
margin-top: 47px;
margin-right: 14px;
`
const ButtonYes=styled.button`
width: 95px;
height: 52px;
border-radius: 8px;
margin-top: 47px;

`
const AskTitle=styled.h1`
font-size:18px;
color: black;
font-weight: bold;
text-align: center;
`

const AskGroup=styled.div`
width: 248px;
height: 210px;
border-radius: 12px;
background-color: white;
padding: 22px;
position: relative;
box-shadow: rgba(100,100 ,111,0.2) 0px 7px 29px 0px;
`
const Overlay=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.7);

ion-icon{
    position: fixed;
    top: 25px;
    right: 20px;
   font-size: 40px;   
   color: black;
   background-color: white;
   border-radius: 4px;
}
`