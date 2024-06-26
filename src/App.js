import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotPage from "./pages/NotPage";
import Approach from "./pages/Approach";
import Groups from "./pages/Groups";
import OneToOne from "./pages/OneToOne";
import Retreats from "./pages/Retreats";
import Membership from "./pages/MembershipLanding";
import Blog from "./pages/Blog";
import Qualifications from "./pages/Qualifications";

import NavBar from "./components/Nav/NavBar";
import Socials from "./components/Socials";
import CreditsFooter from "./components/CreditsFooter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Socials />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/onetoone" element={<OneToOne />} />
        <Route path="/retreats" element={<Retreats />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="*" element={<NotPage />} />
      </Routes>{" "}
      <CreditsFooter />
    </div>
  );
}

export default App;
