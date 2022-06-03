import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Components/HomeScreen"
import { useState } from "react"
import RegisterScreen from "./Components/RegisterScren"
import Plans from "./Components/Plans"
import PickedPlan from "./Components/PickedPlan"


export default function App(){
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const [name , setName]=useState("")
    const [cpf , setCpf]=useState("")
    const [token , setToken]=useState("")
    const [stockPlan , setStockPlan]=useState([])
    const [membershipId1 , setMemberShipId1]=useState("")


    return(
        <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen stockPlan={stockPlan} token={token} setToken={setToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}></Route>
                <Route path="/sign-up"  token={token} setToken={setToken} element={<RegisterScreen name={name} setName={setName} cpf={cpf} setCpf={setCpf} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}  ></Route>
                <Route path="/subscriptions" element={<Plans token={token} stockPlan={stockPlan} setStockPlan={setStockPlan} setToken={setToken} />} ></Route>
             <Route path="/subscriptions/:idPlano" element={<PickedPlan membershipId1={membershipId1} setMemberShipId1={setMemberShipId1} token={token} />}></Route>
            </Routes>
        </BrowserRouter>
        
        </>
    )
}