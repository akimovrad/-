import Header from './comp/header/Header'
import Footer from './comp/footer/Footer'
import Banner from './comp/banner/Banner'
import Char from './characters/Characters'
import CharacterDetails from "./CharacterDetails"; 
import LocationDetails from "./LocationDetails";
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      

      <Header />
      <Banner />
      
      <Routes>
      <Route/>
      <Route path="/" element={<Char />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
      <Route path="/location/:id" element={<LocationDetails />} />
      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
