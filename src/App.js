import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Team from './components/Team/Team';
import TeamDetails from './components/TeamDetails/TeamDetails';
import LikedUsers from './components/LikedUsers';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamDetails />} />
            <Route path="/liked-users" element={<LikedUsers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;


