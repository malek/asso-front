import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landingPage/Landing";
import CandidatePage from "../pages/candidatePage/CandidatePage";
import CandidatePage2 from "../pages/candidatePage/CandidateEtape2";
import AssociationPage from "../pages/associationPage/AssociationPage";
import AssociationPage2 from "../pages/associationPage/AssociationEtape2";
import LoginPage from "../pages/loginPage/LoginPage";
import FinalisationInscription from "../pages/candidatePage/FinalisationInscription";
import Feed from "../pages/feedPage/Feed";

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
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
};

export default HomeRoutes;
