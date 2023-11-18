// Importing React specific libraries.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { createContext, useState, useEffect } from 'react';

// Importing normalize.css to reset the browser's default styles before applying the custom styles.
import '../src/normalize.css';
import './App.css';

// Importing shared header and footer components.
import Header from './views/shared/Header.js';
import Footer from './views/shared/Footer.js';

// Page Component Imports
import Home from './views/Home.js';
import SolarSystem from './views/SolarSystem.js';
import SpaceNews from './views/SpaceNews.js';
import AddPlanet from './views/AddPlanet.js';
import Planetarium from './views/Planetarium.js';

// Importing Back to Top Button Component, the rocket ship icon SVG that acts as a button to scroll back to the top of the page, I imported it in App.js so it can be rendered on all pages.
import BackToTopButton from './views/BackToTop.js';

// Global Context (like a global or session var container)
export const PlanetContext = createContext();

function App() {

  // Setting the initial state of the addPlanets array to an empty array IF there is no data in localStorage. If there is data in localStorage, then it will hold the current planet data.
  const [addPlanets, setPlanets] = useState(() => {
    // Retrieve the state from localStorage on component mount
    const storedPlanets = localStorage.getItem('addPlanets');

    // Parse the localStorage string and return the data to the addPlanets array.
    if (storedPlanets) {
      return JSON.parse(storedPlanets);
    } 
    // ELSE there is no data, so the planet array will be empty.
    else {
      return [];
    }

  });

  useEffect(() => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('addPlanets', JSON.stringify(addPlanets));
  }, [addPlanets]);

  return (
    <div className='App'>
      <PlanetContext.Provider value={{ addPlanets, setPlanets }}>
        {/* Render Imported Header */}
        <Header />
          <main>
            <BrowserRouter>
              {/* Start of Application Routes */}
              <Routes>
                {/* Delcaring each route with the corresponding component that needs to be rendered. */}
                <Route path='/' element={<Home />} />
                <Route path='/solar-system' element={<SolarSystem />} />
                <Route path='/news' element={<SpaceNews />} />
                <Route path='/add-planets' element={<AddPlanet />} />
                <Route path='/planetarium' element={<Planetarium />} />
              </Routes>
              {/* End of Application Routes */}
            </BrowserRouter>
            <BackToTopButton />
          </main>
        {/* Render Imported Footer */}
        <Footer />
      </PlanetContext.Provider>
    </div>
  );
}

export default App;
