import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import CandidatePage from "../pages/candidatePage/CandidatePage";
import CandidatePage2 from "../pages/candidatePage/CandidateEtape2";
import AssociationPage from "../pages/associationPage/AssociationPage";
import AssociationPage2 from "../pages/associationPage/AssociationEtape2";
import LoginPage from "../pages/loginPage/LoginPage";
import WelcomeAsso from "../pages/candidatePage/WelcomeAsso";
import WelcomeUser from "../pages/candidatePage/WelcomeUser";


const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/candidat" element={<CandidatePage />} />
      <Route path="/candidat2" element={<CandidatePage2 />} />
      <Route path="/association" element={<AssociationPage />} />
      <Route path="/association2" element={<AssociationPage2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/WelcomParticipantBenevole" element={<WelcomeUser />} />
      <Route path="/WelcomAsso"element={<WelcomeAsso />} />



    </Routes>
  );
};

export default HomeRoutes;
