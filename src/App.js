import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotPage from "./pages/NotPage";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Approach from "./pages/Approach";
import Groups from "./pages/Groups";
import OneToOne from "./pages/OneToOne";

function App() {
  return (
    <div className="App">
      <Header />
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
        <Route path="*" element={<NotPage />} />
      </Routes>
    </div>
  );
}

export default App;
