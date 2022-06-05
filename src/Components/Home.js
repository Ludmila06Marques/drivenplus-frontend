import styled from "styled-components"
import Footer from "./Footer"
import{ Link }from "react-router-dom"
import TokenContext from "../Contexts/TokenContext"
import { useContext } from "react"



function Button({title , link}){
    return(<>
   <a href={link} target="_blank">
     <Botton>{title}</Botton>
     </a>
    </>)
}


export default function Home({choose }){
    const { login}=useContext(TokenContext)

  

console.log(login)
console.log(choose)

   
  
    

    return(<>
    <Group>
    <ImagePlan src={login.membership.image}/>
    <Link to={`/users/${login.id}`}>
    <ion-icon name="person-circle-outline"></ion-icon>
    </Link>
    <GroupApp>
    <Title>Ola , {login.name}</Title>
   {login.membership.perks.map((item , index)=><Button key={index} index={index} title={item.title} id={item.it} link={item.link} membershipId={item.membershipId} />)}
   <Footer  />
    </GroupApp>
   
    </Group>
    </>)
}


const Botton=styled.button`
margin-bottom: 8px;
background-color:#FF4791 ;
border-radius: 8px;
width: 299px;
height: 52px;
color: white;
font-size: 18px;
border: solid 1px #FF4791;
`

const GroupApp=styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title=styled.h1`
font-size: 24px;
color: white;
margin-bottom: 53px;
`

const ImagePlan=styled.img`
width: 70px;
height: 70px;
position: fixed;
top: 32px;
left: 38px;
`
const Group=styled.div`


ion-icon{
    height: 43px;
    width: 44px;
    visibility: visible;
    position: fixed;
    right: 22px;
    top: 22px;
    color: black;
    background-color: white;
    border-radius: 50px;
}
`