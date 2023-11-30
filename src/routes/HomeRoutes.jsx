import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import CandidatePage from "../pages/candidatePage/CandidatePage";
import CandidatePage2 from "../pages/candidatePage/CandidateEtape2";
import AssociationPage from "../pages/associationPage/AssociationPage";
import AssociationPage2 from "../pages/associationPage/AssociationEtape2";
import LoginPage from "../pages/loginPage/LoginPage";
import WelcomePage from "../pages/welcome/WelcomePage";
import HomePage from "../pages/homePage/homePage";


const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/candidat" element={<CandidatePage />} />
      <Route path="/candidat2" element={<CandidatePage2 />} />
      <Route path="/association" element={<AssociationPage />} />
      <Route path="/association2" element={<AssociationPage2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Welcome" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />}/>
    </Routes>
  );
};

export default HomeRoutes;
