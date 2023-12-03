import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landingPage/Landing";
import CandidatePage from "../pages/candidatePage/CandidatePage";
import CandidatePage2 from "../pages/candidatePage/CandidateEtape2";
import AssociationPage from "../pages/associationPage/AssociationPage";
import AssociationPage2 from "../pages/associationPage/AssociationEtape2";
import LoginPage from "../pages/loginPage/LoginPage";
import WelcomePage from "../pages/welcome/WelcomePage";
import HomePage from "../pages/homePage/homePage";

import FinalisationInscription from "../pages/candidatePage/FinalisationInscription";
import FeedUser from "../pages/feedPage/FeedUser";
import FeedAsso from "../pages/feedPage/FeedAsso";
import Parametre from "../pages/navBarPages/Parametre";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/candidat" element={<CandidatePage />} />
      <Route path="/candidat2" element={<CandidatePage2 />} />
      <Route
        path="/finalisationInscription"
        element={<FinalisationInscription />}
      />
      <Route path="/association" element={<AssociationPage />} />
      <Route path="/association2" element={<AssociationPage2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Welcome" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/feedUser" element={<FeedUser />} />
      <Route path="/feedAsso" element={<FeedAsso />} />
      <Route path="/param" element={<Parametre />} />
    </Routes>
  );
};

export default HomeRoutes;
