<br>

# Solaris | Solar System Playground & Space Flight News Application

## Purpose
Solaris is a solar system application that allows users to create custom-crafted planets, view relevant information about our current and most recognizable solar system, and a news outlet where users can seek up-to-date information on various space-related topics. The overall purpose is to provide users with a fun playground to explore many aspects of astronomy through crafting custom planets and learning from the fetched educational resources.

<br>
<h2><a href="https://solaris-green.vercel.app/" alt="Solaris Solar System Application Link!" title="View Solaris | Solar System App" target="_blank">View Live Application Here </a></h2>
Link to application: https://solaris-green.vercel.app/
<br>
<br>

## Key Features
<br>
<ul>
  <li>Fetching JSON data from APIs. In this application, I'm fetching planet data and space news article data.</li>
  <li>Utilizes local storage and useContext to pass planet information between components.</li>
</ul>
<br>

## Core Components Overview
<br>

### Current Solar System Component

This component utilizes the useState from React to hold the planet data, creates a request to an API to fetch JSON data, filters the data into our current solar system planets by English name, and the returned data gets set to a new state. 

Once the planet state is set, the array of planets can be mapped and rendered to the page using the JSON body information to display the planet's name, radius, distance from the sun, gravity, etc.  

Thank you to System Solaire for the API, reference here: https://api.le-systeme-solaire.net/
<br>
<br>

### Add Planet Component

The add planet component uses context, useState, and useEffect to manipulate and pass data to the "Planetarium" component, which is the page that displays the user's custom planets. The App.js file holds the planets in local storage if any exist, and the context provider allows the planet array to be used by other components, in this the "Planetarium" component.

The add planet component also features a useState counter to associate unique id keys to each planet object that is passed in from the form data submission, this counter increments for every planet added to prevent key entry errors.  
<br>

### Planetarium Component

This component imports the PlanetContext from the App.js file, allowing access to the planet data. Since this component has the context provided to it, the custom planet objects are mapped and rendered to the screen. The planet objects are stored locally in storage due to setting the item state in the App.js file.
<br>
<br>

### Space News Component

The news component requests JSON data from the space flight news API. The API returns up-to-date news articles regarding various space-related topics. The data is then mapped and rendered to the browser with an article title, summary, and link to the full article for each object.

Thank you to Spaceflight News for the API, reference here: https://api.spaceflightnewsapi.net/v4/articles/
<br>
<br>

## Layout & Design Elements
<p>The design and layout were built using a combination of my own custom CSS styles and Bootstrap components. I used Bootstrap to create my form layout and navigation components, and the remainder of the styles were written by me (Christopher Blouin).</p>
<br>

## Local Usage Steps
<br>

>[!NOTE]
> <strong>If you plan to view this project on your local machine in the browser, please follow the steps below!</strong>

<br>
Download the repository ZIP folder containing the code, and please install node.js if not already installed on your computer. 
<br>
<p><a href="https://nodejs.org/en/download" alt="Node.js Download Link" title="Download Node.js" target="_blank">Download Node.js Here</a></p>
<br>
Open the project folder in a code editor, preferrable Visual Studio Code. And run the following commands:

<br>
<br>

```npm i``` to install any necessary packages from package.json

After all dependencies are installed, enter the following command to open the project on a local host in your browser.

```npm start ``` to start the application locally in the browser


