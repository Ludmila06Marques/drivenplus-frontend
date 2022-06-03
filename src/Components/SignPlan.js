import axios from "axios"
import { useState } from "react"
import styled from "styled-components"


export default function SignPlane({token , membershipId1}){
   console.log(membershipId1)
    const[cardName , setCardName]=useState("")
    const[cardNumber , setCardNumber]=useState("")
    const[securityNumber , setSecurityNumber]=useState("")
    const[expirationDate , setExpirationDate]=useState("")
  
    function assinar() { const body={
        membershipId: membershipId1,
        cardName,
        cardNumber,
        securityNumber,
        expirationDate}
        
    const config={
        headers:{
        Authorization:`Bearer ${token}`
        }
    }
    const promise= axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions" ,  body ,config)

    promise 
    .then((res)=>{
       console.log(res.data)
    }
    )
    .catch((err)=>{
        console.log(err)

    }
    )}

    return(<>
    <Group>
<Input  placeholder=" Nome impresso no cartao" onChange={(e)=> setCardName(e.target.value)} value={cardName} required/>
<Input  placeholder=" Digitos do cartao" onChange={(e)=> setCardNumber(e.target.value)} value={cardNumber} required/>
<Container>
<Input2 placeholder=" Codigo de seguranca" onChange={(e)=> setSecurityNumber(e.target.value)} value={securityNumber} required/>
<Input2 placeholder=" Validade" onChange={(e)=> setExpirationDate(e.target.value)} value={expirationDate} required/>
</Container>
<Sign onClick={assinar} >ASSINAR</Sign>

</Group>
    </>)
}
const Sign=styled.button`
background-color: #FF4791;
font-size: 14px;
color: white;
width: 299px;
height: 52px;
border-radius: 8px;
`

const Input2=styled.input`
width: 145px;
height: 52px;
border-radius: 8px;
margin-bottom: 8px;
margin-right: 9px;


`

const Group=styled.div`
padding: 0 40px;
`

const Input=styled.input`
width: 299px;
height: 52px;
border-radius: 8px;
margin-bottom: 8px;



`
const Container=styled.div`
display: flex;

`
