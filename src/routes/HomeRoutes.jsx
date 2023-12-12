import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landingPage/Landing";
import CandidatePage from "../pages/candidatePage/CandidatePage";
import CandidatePage2 from "../pages/candidatePage/CandidateEtape2";
import AssociationPage from "../pages/associationPage/AssociationPage";
import AssociationPage2 from "../pages/associationPage/AssociationEtape2";
import LoginPage from "../pages/loginPage/LoginPage";
import WelcomePage from "../pages/welcome/WelcomePage";
import Events from "../pages/homePage/Events";
import AjoutEvent from "../pages/homePage/AjoutEvent";
import FinalisationInscription from "../pages/candidatePage/FinalisationInscription";
import FeedUser from "../pages/feedPage/FeedUser";
import FeedAsso from "../pages/feedPage/FeedAsso";
import Parametre from "../pages/navBarPages/Parametre";
import Messagerie from "../pages/navBarPages/Messagerie";
import MessagerieChat from "../pages/navBarPages/MessagerieChat";
import MapPage from "../pages/feedPage/MapPage";
import MesEvaluation from "../pages/homePage/MesEvaluation";
import MesBadges from "../pages/homePage/MesBadges";
//import MapTest from "../pages/feedPage/MapPage";
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
      <Route path="/events" element={<Events />} />
      <Route path="/feedUser" element={<FeedUser />} />
      <Route path="/feedAsso" element={<FeedAsso />} />
      <Route path="/param" element={<Parametre />} />
      <Route path="/messagerie" element={<Messagerie />} />
      <Route path="/messagerieChat" element={<MessagerieChat />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/addEvent" element={<AjoutEvent />} />
      <Route path="/evaluation" element={<MesEvaluation />} />
      <Route path="/badges" element={<MesBadges />} />

    </Routes>
  );
};

export default HomeRoutes;
