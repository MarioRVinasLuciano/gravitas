import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Contact from "./Pages/Contact";
import Soluciones from "./Pages/Soluciones";
import SobreNosotros from "./Pages/SobreNosotros";
import NavBar from "./Components/Navbar";

function App() {
  return (
   // <BrowserRouter>
   <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/soluciones" element={<Soluciones/>} />
        <Route path="/sobrenosotros" element={<SobreNosotros/>} />
      </Routes>
      </>
    //</BrowserRouter>
    
  );
}

export default App;

