import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import Ask from "./Modal"
 


export default function SignPlane({token , membershipId1  , name , price , setChoose , setPlan , choose , email , password , setLogin}){

    const[modal , setModal]=useState(false)
    const[cardName , setCardName]=useState("")
    const[cardNumber , setCardNumber]=useState("")
    const[securityNumber , setSecurityNumber]=useState("")
    const[expirationDate , setExpirationDate]=useState("")
  
    function ask(){
        setModal(true)  
        
    }
  

    return(<>
    <Group>
<Input  placeholder=" Nome impresso no cartao" onChange={(e)=> setCardName(e.target.value)} value={cardName} required/>
<Input  placeholder=" Digitos do cartao" onChange={(e)=> setCardNumber(e.target.value)} value={cardNumber} required/>
<Container>
<Input2 placeholder=" Codigo de seguranca" onChange={(e)=> setSecurityNumber(e.target.value)} value={securityNumber} required/>
<Input2 placeholder=" Validade" onChange={(e)=> setExpirationDate(e.target.value)} value={expirationDate} required/>
</Container>
<Sign onClick={ask} >ASSINAR</Sign>
<Ask  email={email} password={password} choose={choose} setPlan={setPlan} setChoose={setChoose} membershipId1={membershipId1} cardName={cardName} cardNumber={cardNumber} securityNumber={securityNumber} expirationDate={expirationDate} modal={modal} setModal={setModal} name={name} price={price} token={token} setLogin={setLogin} />
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
border: 1px #FF4791 solid;
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
