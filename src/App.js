import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Components/HomeScreen"
import { useState } from "react"
import RegisterScreen from "./Components/RegisterScren"
import Plans from "./Components/Plans"
import PickedPlan from "./Components/PickedPlan"
import Home from "./Components/Home"
import TokenContext from "./Contexts/TokenContext"
import User from "./Components/User"
import Update from "./Components/Update"


export default function App(){
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const [name , setName]=useState("")
    const [cpf , setCpf]=useState("")
    const [token , setToken]=useState("")
    const [stockPlan , setStockPlan]=useState([])
    const [membershipId1 , setMemberShipId1]=useState("")
    const [choose , setChoose]=useState({})

    const [login , setLogin]=useState()
    const[ perks , setPerks]=useState([])
  
    console.log(login)


    return(
       
        <TokenContext.Provider value={{token , setToken , login , setLogin}} >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen choose={choose} stockPlan={stockPlan}  email={email} setEmail={setEmail} password={password} setPassword={setPassword}   />}></Route>
                <Route path="/sign-up" element={<RegisterScreen name={name} setName={setName} cpf={cpf} setCpf={setCpf} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}  ></Route>
                <Route path="/subscriptions" element={<Plans stockPlan={stockPlan} setStockPlan={setStockPlan} />} ></Route>
             <Route path="/subscriptions/:idPlano" element={<PickedPlan email={email}  password={password} perks={perks} setPerks={setPerks} setChoose={setChoose} choose={choose} membershipId1={membershipId1} setMemberShipId1={setMemberShipId1} />}></Route>
            <Route path="/home"  element={<Home perks={perks}  name={name} choose={choose} />}></Route>
            <Route  path="/users/:idUser"  element={<User/>} ></Route>
            <Route  path="/users/:idUser/update"  element={<Update name={name} setName={setName}  email={email} setEmail={setEmail} password={password} setPassword={setPassword} cpf={cpf} />} ></Route>

            </Routes>
        </BrowserRouter>
        </TokenContext.Provider>
        
    )
}