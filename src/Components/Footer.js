import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import TokenContext from "../Contexts/TokenContext"
import { useContext } from "react"
//Rota /planos existe??

export default function Footer(){
  
  const {token }=useContext(TokenContext)

    const navigate= useNavigate()

    function changePlan(){
     //navigate("/planos")
     
     navigate("/subscriptions")
    }
    function cancelPlan(){


        const config={
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        const promise = axios.delete(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions` , config) 

              promise
              .then(res=>{
                  navigate("/subscriptions")
                console.log("deletando")
              })
              .catch(err=>{
                
                  console.log(err)
              })

    }

    return(<>
    <Group>
    <Change onClick={changePlan} >Mudar plano</Change>
    <Cancel onClick={cancelPlan}> Cancelar plano</Cancel>
    </Group>
    </>)

}
const Group=styled.div`
 position: fixed;
 bottom: 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Change=styled.button`
margin-bottom: 8px;
width: 299px;
height: 52px;
background-color:#FF4791 ;
color: white;
font-size: 18px;
border-radius: 8px;
border: 1px #FF4791 solid;

`

const Cancel=styled.button`
width: 299px;
height: 52px;
background-color:#FF4747;
color: white;
font-size: 18px;
border-radius: 8px;
border: 1px #FF4747 solid;
`

