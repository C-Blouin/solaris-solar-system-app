
// Importing Context, State, and Effect Package Libraries
import React, { useContext, useEffect } from 'react';
// Importing PlanetContext from App.js to allow data to be passed into this component to render to the screen.
import { PlanetContext } from '../App';

function PlanetCollection () {

    // Setting the title for the Add Planet page.
    useEffect(() => {
    document.title = 'Solaris | Planetarium';
    }, []);

    // Using the useContext hook to access the PlanetContext from App.js, and passing in the addPlanets array that contains all of the planet data to be mapped out and rendered to the page.
    const { addPlanets } = useContext(PlanetContext);

    return (
        // Start of Planetarium Wrapper
        <div className='planetarium-wrapper'>

            {/* Start of Planetarium Intro */}
            <div className='planetarium-intro-wrapper'>

                {/* Start of Planetarium Intro Section */}
                <section id='planetary-intro'>
                    <h1>Planetarium</h1>           
                    <p>Welcome to your crafted collections of planets, in your very own solar system!</p>
                    <div className='intro-button-container'>
                        <a href='#custom-planet' title='Explore Your Planetary Collection!'>Exlore Now</a>
                        <a href='/add-planets' title='Add Another Planet!'>Add Planet</a>
                    </div>
                </section>
                {/* End of Planetarium Intro Section */}

            </div>
            {/* End of Planetarium Intro */}

            {/* Start of Primary Planetarium Content Section*/}
            <section id='custom-planet'>
               
                {/* Passing in the addPlanets array from the passed in planetContext, and rendering out each custom planet as a card with the corresonding entry information. */}
                {addPlanets.map((planet) => (      
                    
                    /* 
                    Start of Custom Planet Card Container
                    
                    Each Planet will be assigned a unique key, which is auto-incremented by 1 as the counter in the AddPlanet.js component is incremented by 1 each time a new planet is added. 
                    */
                    <article id='custom-planet-card-container' key={planet.id}>
                            <h3>{planet.planetName}</h3>
                            <ul>
                                {/* Accessing and displaying the planet details. */}
                                <li>Radius: {planet.radius + ' kilometers'}</li>
                                <li>Mass: {planet.mass + ' x 10^24 kilograms'}</li>
                                <li>Atmosphere {planet.atmosphere}</li>
                                <li>Moons: {planet.numberOfMoons}</li>
                                <li>Planet Colour: {planet.planetColour}</li>
                            </ul>
                            <p>Description: {planet.description}</p>             
                    </article>
                    /* End of Custom Planet Card Container */

                ))}
                {/* End of Planet Mapping */}

            </section>
            {/* End of Primary Planetarium Content Section */}

        </div>
    // End of Planetarium Wrapper
    );
}

export default PlanetCollection;