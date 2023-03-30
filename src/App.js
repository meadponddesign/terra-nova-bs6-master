import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import Home from './pages/home';
import Africa from "./pages/africa";
import Safari from "./pages/safari";
import AsiaIndia from "./pages/asia-india";
import AustraliaAsia from "./pages/australia-asia";
import EcoAdventures from "./pages/eco-adventures";
import Europe from "./pages/europe";
import FoodAndDrink from "./pages/food-and-drink";
import LatinAmerica from "./pages/latin-america";
import Morocco from "./pages/morocco";
import SmallShips from "./pages/small-ships";
import Treks from "./pages/treks";
import WorldOfPlants from "./pages/world-of-plants";
import Err404 from "./pages/Err404";
import Botanicals from "./pages/botanicals";
import Contact from "./pages/contact";
import CustomGroup from "./pages/custom-group";
import Privacy from "./pages/privacy";
import MultiGeneration from "./pages/multi-generation";
import PrivateIndividual from "./pages/private-individual";
import DepartureGroup from "./pages/departure-group";
import Women from "./pages/women";
import EndangeredCulture from "./pages/endangered-culture";
import Nav from "./components/nav";
import Footer from "./components/footer"
import About from "./pages/about"
import BroadAbroad from "./pages/broad-abroad"
import ControlPanel from "./AdminPanel/ControlPanel"
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Africa" element={<Africa />}></Route>
          <Route path="/Safari" element={<Safari />}></Route>
          <Route path="/asia-india" element={<AsiaIndia />}></Route>
          <Route path="/australia-asia" element={<AustraliaAsia />}></Route>
          <Route path="/World-of-plants" element={<WorldOfPlants />}></Route>
          <Route path="/eco-adventures" element={<EcoAdventures />}></Route>
          <Route path="/Europe" element={<Europe />}></Route>
          <Route path="/latin-america" element={<LatinAmerica />}></Route>
          <Route path="/gastronomical-adventures" element={<FoodAndDrink />}></Route>
          <Route path="/morocco" element={<Morocco />}></Route>
          <Route path="/small-ships" element={<SmallShips />}></Route>
          <Route path="/Treks" element={<Treks />}></Route>
          <Route path="/WorldOfPlants" element={<WorldOfPlants />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/botanicals" element={<Botanicals />}></Route>
          <Route path="/endangered-culture" element={<EndangeredCulture />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/departure-group" element={<DepartureGroup />}></Route>
          <Route path="/private-individual" element={<PrivateIndividual />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/multi-generation" element={<MultiGeneration />}></Route>
          <Route path="/custom-group" element={<CustomGroup />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/a-broad-abroad" element={<BroadAbroad/>}></Route>
          <Route path="*" element={<Err404 />}></Route>
          <Route path="admin" element={<ControlPanel />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
