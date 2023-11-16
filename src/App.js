// Importing normalize.css to reset the browser's default styles before applying the custom styles.
import '../src/normalize.css';
import './App.css';
import './script.js';

// Importing shared header and footer components.
import Header from "./views/shared/Header.js";
import Footer from "./views/shared/Footer.js";

// Page Component Imports
import Home from "./views/Home.js";
import SolarSystem from './views/SolarSystem.js';
import SpaceNews from './views/SpaceNews.js';

// Importing react router.
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Render Imported Header */}
      <Header />
        <main>
          <BrowserRouter>
            {/* Start of Application Routes */}
            <Routes>
              {/* Delcaring each route with the corresponding component that needs to be rendered. */}
              <Route path="/" element={<Home />} />
              <Route path="/solar-system" element={<SolarSystem />} />
              <Route path="/news" element={<SpaceNews />} />
            </Routes>
            {/* End of Application Routes */}
          </BrowserRouter>
        </main>
      {/* Render Imported Footer */}
      <Footer />
    </div>
  );
}

export default App;
