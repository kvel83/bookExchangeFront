import { Navigate, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "./landingPage";

function RoutesApp (){
    return(
    <>
        <Route path="/" element={<LandingPage />} />
        <Route path='/dashboard' element={(localStorage.getItem("userInformation"))? <Dashboard />:<Navigate to='/' />} />
    </>
    );
}

export default RoutesApp;