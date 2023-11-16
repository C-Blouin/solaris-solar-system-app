import React, { useState, useEffect } from 'react';

// Thank you to Adobe Stock for the Planet Graphics: https://stock.adobe.com/ca/images/set-of-star-and-planets-on-galaxy-background/428716602?prev_url=detail
import mercury from '../images/solar-system-planets/mercury.svg';
import venus from '../images/solar-system-planets/venus.svg';
import earth from '../images/solar-system-planets/earth.svg';
import mars from '../images/solar-system-planets/mars.svg';
import jupiter from '../images/solar-system-planets/jupiter.svg';
import saturn from '../images/solar-system-planets/saturn.svg';
import uranus from '../images/solar-system-planets/uranus.svg';
import neptune from '../images/solar-system-planets/neptune.svg';
import sun from '../images/solar-system-planets/sun.svg';



function SolarSystem () {

  // Setting the initial state of the planets array to an empty array.
  const [planets, setPlanets] = useState([]);

  // Use Effect Hook to fetch data from the API.
  useEffect(() => {
    // Using the Fetch method, I am making a get request to the link in the passed in parameter. (https://api.le-systeme-solaire.net/rest/bodies/)
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    // Passing the fetched response to JSON.
      .then((response) => response.json())
      // Setting the state of the planets array to the data from the API.
      .then((planetData) => {
        // Filtering the data to only include the planets that are common to our Solar System, in this case I am specifying the planets in an Array, using the includes method to check if the planet is included in the array using the englishName property from the fetched JSON data.
        const commonPlanets = planetData.bodies.filter((planet) =>
          ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Sun'].includes(
            planet.englishName
          )
        );
        // Once the data has been filtered, I am setting the state of the planets array to the filtered data.
        setPlanets(commonPlanets);
      })
      // Catching any errors and logging them to the console.
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Planet Container Object variable to hold the planet images from the imported images above. These are passed into the image source of the mapped planets.
  const planetContainer = {
    Sun: `${sun}`,
    Mercury: `${mercury}`,
    Venus: `${venus}`,
    Earth: `${earth}`,
    Mars: `${mars}`,
    Jupiter: `${jupiter}`,
    Saturn: `${saturn}`,
    Uranus: `${uranus}`,
    Neptune: `${neptune}`
  };

  return (

    // Start of Solar System Wrapper
    <div className="solar-system-wrapper">

      {/* Start of Solar System Intro */}
      <div className="intro-wrapper">
        <section id='solar-system-intro'>
          <h1>Our Solar System</h1>
          <p>Embark on a celestial journey through our Solar System! Explore the unique wonders of our galaxies most familiar planets, along with useful information about each planet!</p>
          <a href='#solar-system' title='Explore Our Solar System!'>Exlore Now</a>
        </section>
      </div>
      {/* End of Solar System Intro */}

      {/* Start of Solar System Section */}
      <section id="solar-system">
        <div className="planet-card-container" id='planet-container'>

          {/* Mapping through the useState planets array and rendering the fetched planet data for each planet in the array. */}
          {planets.map((planet) => (
            // Assign a key to each article element (Each planet that is mapped out).
            <article key={planet.id} className="planet-card card-hover">

              <figure className="planet-img">
                {/* Set the image source equal to the fetched englishName in the API that matches the Planet strings specified in the planetContainer array. */}
                <img src={planetContainer[planet.englishName]} alt={planet.englishName} />
              </figure>

              {/* Start of Planet Content */}
              <div className="article-content">
                {/* Render the planets english name as a heading. */}
                <h3>{planet.englishName}</h3>
                {/* Unordered list of each planets information. */}
                <ul>
                  <li>Radius: {planet.meanRadius} km</li>
                  <li>Distance from Sun: {planet.semimajorAxis} km</li>
                  <li>Gravity: {planet.gravity} m/s<sup>2</sup></li>
                  <li>Mass: {planet.mass.massValue} x 10<sup>{planet.mass.massExponent}</sup> kg</li>
                  <li>Density: {planet.density} g/cm<sup>3</sup></li>
                  <li>Length of Day: {planet.sideralRotation} hours</li>
                </ul>                
              </div>
              {/* End of Planet Content */}

            </article>
          ))}
        </div>
      </section>
      {/* End of Solar System Section */}

    </div>
    // End of Solar System Wrapper
  );
};

export default SolarSystem;