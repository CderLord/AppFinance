import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
// import { RegisterPage } from "../pages/register"
// import { ExpensePage } from "../pages/expense"
// import { LimitPage } from "../pages/limit"

export const MainRouter = () =>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            {/* <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/expense" element={<ExpensePage/>}/>
            <Route path="/limit" element={<LimitPage/>}/> */}
        </Routes>
    )

}