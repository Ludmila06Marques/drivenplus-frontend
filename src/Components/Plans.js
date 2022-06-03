import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

function OnePlan({id , image , price}){
    
    return(<>
       <Link to={`/subscriptions/${id}`} >
        <Plan>
        <ImagePlan src={image}/>
        <Price>{price}</Price>
        </Plan>
        </Link>
    </>)
}







export default function Plans({token , stockPlan, setStockPlan}){
    useEffect(()=>{
        const config={
            headers:{
            Authorization:`Bearer ${token}`
            }
        }

        const promise= axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships" , config)

        console.log(config)
        
        promise
        .then(res=>{
            setStockPlan([...res.data])
        
        })
        .catch(err=>{
            console.log(err)
        })
    
        
    },[])

console.log(stockPlan)
console.log(stockPlan)
    return(<>
    <Container>
        <Title>Escolha seu Plano</Title>
       
        {stockPlan.map((item , index)=><OnePlan key={index} index={index}  id={item.id} image={item.image} price={item.price} />)}
    </Container>
    </>)
}
const Container=styled.div`
margin-top: 29px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Title=styled.h1`
font-size: 32px;
color: 
#FFFFFF;
font-weight: bold;
margin-bottom: 24px;
`
const Plan=styled.div`
width: 290px;
height: 180px;
border: 1px solid 
#7E7E7E;
border-radius: 12px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;
margin-bottom: 10px;

`
const ImagePlan=styled.img`
font-size: 30px;
`

const Price=styled.h1`
font-size: 24px;
color: #ffffff;
`