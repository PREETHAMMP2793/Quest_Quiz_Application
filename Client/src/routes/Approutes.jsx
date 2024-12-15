import {Routes, Route } from "react-router"
import LandingPage from "../pages/LandingPage"
import AdminLogin from "../pages/AdminLoginPage"
import CandidateLogin from "../pages/CandidateLoginPage"

function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/candidateLogin" element={<CandidateLogin />} />
            
        </Routes>
    </div>
  )
}

export default Approutes