import { useParams } from "react-router-dom"
import { useEffect  , useState} from "react"
import axios from "axios";
import styled from "styled-components"
import SignPlane from "./SignPlan";
import Ask from "./Modal";

function BenefitsPlane({id , title , membershipId , link, index , setMemberShipId1}){

 
  
  setMemberShipId1(membershipId)
  console.log(membershipId)
    return(<>
    
        <GroupBenefit>
        <Benefit>{index+1} .{title} </Benefit>
       
        </GroupBenefit>
         
</>)
}


export default function PickedPlan({token , membershipId , setMemberShipId1 , membershipId1 , setChoose , perks , setPerks}){
  //  const [hid , setHid]=useState("0")

    const {idPlano} = useParams();
    console.log("entrei" , idPlano )
    const [image , setImage]=useState("")
    const [price , setPrice]=useState("")
    const [name , setName]=useState("")
   
    
    useEffect(()=>{
        const config={
            headers:{
            Authorization:`Bearer ${token}`
            }
        }

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}` , config) 
       
        promise
        .then(res=>{
            console.log(res.data)
            setImage(res.data.image)
            setPrice(res.data.price)
            setName(res.data.name)
            setPerks([...res.data.perks])
          

        })
        .catch(err=>{
            console.log(err)

        })
    },[])
    console.log(perks)
    

    return(<>
    <Container>
        <Icones>
        <ion-icon name="arrow-back-outline"></ion-icon>
       
        </Icones>
        <Image src={image} />
        <Title>{name}</Title>

        </Container>
        <Group>
        <GroupTitle>
        <ion-icon name="reader-outline"></ion-icon>
        <Benefits>Benefícios:</Benefits>
        </GroupTitle>
       {perks.map((item , index)=><BenefitsPlane setMemberShipId1={setMemberShipId1} membershipId1={membershipId1} key={index} index={index} id={item.id} membershipId={item.membershipId} title={item.title} link={item.link} />)}
        </Group>

        <Group>
        <GroupPrice>
        <ion-icon name="cash-outline"></ion-icon>
        <Price>Preço:</Price>
        </GroupPrice>
       <Text> R$ {price} cobrados mensalmente </Text>
        </Group>
        <SignPlane setChoose={setChoose} name={name} price={price}  membershipId1={membershipId1} token={token}/>
        

    </>)
}


const Text=styled.h3`
font-size: 14px;
color: white;
`
const Price=styled.h1`
font-size: 16px;
color: white;
margin-bottom: 10px;
`
const GroupPrice=styled.div`
display: flex;
  ion-icon{
        font-size: 20px;
        color: #FF4791;
    }
`

const GroupBenefit=styled.div`
`
const Benefit=styled.h3`
font-size: 14px;
color: white;

 
`

const Benefits=styled.h1`
font-size: 16px;
color: white;
margin-bottom: 10px;
`
const GroupTitle=styled.div`
display: flex;


    ion-icon{
        font-size: 20px;
        color: #FF4791;
    }
`
const Group=styled.div`
padding:  12px 44px;


`

const Title=styled.h1`
font-size: 32px;
color: white;
margin-top: 10px;
font-weight: bold;
`
const Image=styled.img`
width:140px ;
height:95px;
`

const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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