import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import CandidatePage from "../pages/candidatePage/CandidatePage";
import AssociationPage from "../pages/associationPage/AssociationPage";
import LoginPage from "../pages/loginPage/LoginPage";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/candidat" element={<CandidatePage />} />
      <Route path="/association" element={<AssociationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default HomeRoutes;
