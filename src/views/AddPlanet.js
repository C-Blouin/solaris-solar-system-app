// Importing Context, State, and Effect Package Libraries
import React, { useContext, useState, useEffect } from 'react';
// Importing PlanetContext from App.js to allow it to be passed between components.
import { PlanetContext } from '../App';

function AddPlanet () {

    // Setting the title for the Add Planet page.
    useEffect(() => {
        document.title = 'Solaris | Add Planet';
    }, []);

    // Using the useContext hook to access the PlanetContext from App.js, as it was imported from App.js above. 
    const { addPlanets, setPlanets } = useContext(PlanetContext);

    // Use State Hook Variables.

    //Counter to create unique ID for each planet
    const [counter, setCounter] = useState (() =>{
        // Storing the counter value in local storage, so that the counter value is not reset to 1 each time the page is refreshed.
        const storedCounter = localStorage.getItem('counter');
        console.log(storedCounter);
        // IF there are any planets in local storage, the counter will be set to the current value and incremented by 1 each time a new planet is added.
        if (storedCounter) {
            console.log(storedCounter);
            return parseInt(storedCounter, 10);
        }
        // ELSE, no planets in local storage, the initial value of the counter will be set to 1.
        else {
            console.log(storedCounter);
            localStorage.setItem('counter', 1);
            return 1;
        }

    });

    // Setting the initial state of the form data to an empty object, these values will be updated when the user enters data into the corresponding form fields.
    const [planetData, setPlanetData] = useState({
      planetName: '',
      radius: '',
      description: '',
      planetType: '',
      mass: '',
      atmosphere: '',
      numberOfMoons: '',
      planetColour: '',
    });
  
    // handleChange function, the form uses the onChange event handler to call this function, which will update the state of the form data to the value that the user enters into the corresponding form field.
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPlanetData({ ...planetData, [name]: value });
    };

    // handleSubmit function to manage the form submission, which will update and set the state of the planets array to include the new  any new planets.
    const handleSubmit = (e) => {

      e.preventDefault();

       // Generate a unique ID for the new planet, the initial state is set to 1, and then the counter is incremented by 1 each time a new planet is added.
      const newPlanet = { id: counter, ...planetData };
      console.log(planetData);

      // Update the state using setPlanets, referencing the current planets in the spread array, then adding the new planet to the array.
      setPlanets([...addPlanets, newPlanet]);

      // Increment the counter state by 1 each time a planet is added.
      setCounter((counter) => {
        // Store the counter value in local storage, so that the counter value is not reset to 1 each time the page is refreshed, preventing duplicate ID's of my key value for each planet.
        const newCounter = counter + 1;
        localStorage.setItem('counter', newCounter.toString());
        return newCounter;
      });

      // Clear the form data fields upon successful submission.
        setPlanetData({
            planetName: '',
            radius: '',
            mass: '',
            atmosphere: '',
            numberOfMoons: '',
            planetColour: '',
            description: ''
        });
    };
  
    return (
        // Start of Add Planet Wrapper
        <div className='add-planet-wrapper'>

            {/* Start of Add Planet Container */}
            <div id='add-planet'>
                {/* Form with an onSubmit function, which will invoke the handleSubmit function to pass the form values into the planetData array. */}
                <form onSubmit={handleSubmit} >
                    <h1>Add Planet</h1>
                    <p>Craft your own collection of custom planets! Fill out the fields to start building your very own solar system.</p>

                        <div className='row'>
                            {/* Start of Planet Name Field */}
                            <div className='col-12 col-md-6'>
                                <label htmlFor='planetName' className='form-label'>Planet Name</label>
                                <input type='text' className='form-control' id='planetName' name='planetName' value={planetData.planetName} onChange={handleChange} required maxLength='50' />
                            </div>
                            {/* End of Planet Name Field */}

                            {/* Start of Planet Radius Field */}
                            <div className='col-12 col-md-6'>
                                <label htmlFor='radius' className='form-label'>Radius</label>
                                <input type='number' className='form-control' id='radius' name='radius' value={planetData.radius} onChange={handleChange} required maxLength='2' />
                            </div>
                            {/* End of Planet Radius Field */}
                        </div>

                        <div className='row'>
                            {/* Start of Planet Mass Field */}
                            <div className='col-12 col-md-6'>
                                <label htmlFor='mass' className='form-label'>Mass</label>
                                <input type='number' className='form-control' id='mass' name='mass' value={planetData.mass} onChange={handleChange} required />
                            </div>
                            {/* End of Planet Mass Field */}

                            {/* Start of Planet Atmosphere Field */}
                            <div className='col-12 col-md-6'>
                                <label htmlFor='atmosphere' className='form-label'>Atmosphere</label>
                                <input type='text' className='form-control' id='atmosphere' name='atmosphere' value={planetData.atmosphere} onChange={handleChange} required maxLength='400' />
                            </div>
                            {/* End of Planet Atmosphere Field */}
                        </div>  

                        <div className='row'>
                            {/* Start of Number of Moons Field */}
                            <div className='col-12 col-md-6'>
                                <label htmlFor='numberOfMoons' className='form-label'>Number of Moons</label>
                                <input type='number' className='form-control' id='numberOfMoons' name='numberOfMoons' value={planetData.numberOfMoons} onChange={handleChange} required />
                            </div>
                            {/* End of Number of Moons Field */}

                            {/* Start of Planet Colour Field */}
                            <div className='col-12 col-md-6'>
                                <label htmlFor='planetColour' className='form-label'>Planet Colour</label>
                                <input type='text' className='form-control' id='planetColour' name='planetColour' value={planetData.planetColour} onChange={handleChange} required maxLength='50' />
                            </div>
                            {/* End of Planet Colour Field */}
                        </div>

                        {/* Start of Planet Description Field */}
                        <div className='col-12'>
                            <label htmlFor='description' className='form-label'>Description</label>
                            <textarea type='text' className='form-control' id='description' name='description' rows='5' value={planetData.description} onChange={handleChange} required maxLength='400' ></textarea>
                        </div>
                        {/* End of Planet Description Field */}

                    {/* Button to submit the form contents, this will trigger the onSubmit function too. */}
                    <button type='submit' id='add-planet-btn'>Add Planet</button>
                </form>
            </div>
            {/* End of Add Planet Container */}

        </div>
        // End of Add Planet Wrapper
    );
  };
  
  export default AddPlanet;