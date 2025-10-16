import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '../styles/index.scss'
import App from './App.jsx';
import APropos from './APropos.jsx';
import Erreur from './Erreur.jsx';
import Logement from './Logement.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/location" element={<Location />} />
      <Route path='/*' element={<Erreur/>}/>
      <Route path='/Logement/:id' element={<Logement/>}/>
    </Routes>
    
  </BrowserRouter>,
)
