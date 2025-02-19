import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import Timescape from './components/events/Timescape.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import GameStorm from './components/events/GameStorm.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <GameStorm/>
    <ParallaxProvider>
    <Timescape/>
    </ParallaxProvider> */}
   
  </StrictMode>,
)
