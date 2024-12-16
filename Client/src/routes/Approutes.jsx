import {Routes, Route } from "react-router"
import LandingPage from "../pages/LandingPage"
import AdminLogin from "../pages/AdminLoginPage"
import CandidateLogin from "../pages/CandidateLoginPage"
import AdminPage from "../pages/AdminPage"
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";

function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/candidateLogin" element={<CandidateLogin />} />
            <Route path="/testpage" element={<TestPage />}></Route>
            <Route path="/adminpage" element={<AdminPage/>}/>
            <Route path="/resultpage" element={<ResultPage />}></Route>
        </Routes>
    </div>
  )
}

export default Approutes
