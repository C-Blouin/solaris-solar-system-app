import { useEffect } from 'react';

// Importing Hero and Getting Started Section Graphics.
import happyAstronautGraphic from '../images/landing-images/happy-astronaut-graphic.svg';
import astronautMoonGraphic from '../images/landing-images/astronaut-on-moon.svg';

// Importing SVG Icons for the Features Section. Thank you to Adobe Stock for the Icons Set, reference here: https://stock.adobe.com/ca/images/set-of-universe-icons-simple-outline-style-icons-pack-vector-illustration/491769722?prev_url=detail
import planetIcon from '../images/features/planet-icon.svg';
import solarSystemIcon from '../images/features/solar-system-icon.svg';
import spaceLander from '../images/features/space-lander.svg'

function Home () {

    // Setting Home page title with useEffect hook.
    useEffect(() => {
        document.title = 'Solaris | Home';
    },[]);

    return (

        <div>
            {/* Start of Hero Wrapper */}
            <div id="hero-wrapper">
                {/* Start of Hero Section */}
                <section id="hero">

                    {/* Start of Hero Content Container Grid Item */}
                    <article>                
                    <h1>Enlighten Curiousity</h1>
                    <p>
                        Embark on a journey beyond our world's galaxy with Solaris, where discovery is just the beginning. Explore a celestial sanctuary, a milky way toward inspiration, knowledge, and a mesmerizing glimpse into our universe.
                    </p>
                    <a href="#about" title="Learn More About Solaris">Learn More</a>
                    </article>
                    {/* End of Hero Content Container Grid Item */}

                    {/* Start of Hero Graphic Container Grid Item */}
                    <figure className='image-wrapper'>
                        {/* Thank you to Adobe Stock for the Graphic Asset: https://stock.adobe.com/ca/images/cute-astronaut-lay-on-moon-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style/500854144?prev_url=detail */}
                        <img src={astronautMoonGraphic} alt="Astronaut Laying Down On Moon" width="400"/>
                    </figure>
                    {/* End of Hero Graphic Container Grid Item */}

                </section>
                {/* End of Hero Section */}
            </div>
            {/* End of Hero Wrapper */}

            {/* Start of About Wrapper */}
            <div className="about-wrapper">
                {/* Start of About Section */}
                <section id='about'>
                    <h2>Discover New Possibilities</h2>
                    {/* Start of Features Grid Container Content */}
                    <div id='solaris-features'>

                        {/* Start of First Feature Card */}
                        <article>
                            <h3>Custom Planets</h3>                
                            <img src={planetIcon} alt='Create Planet Card Icon' width="120"/>
                            <p>
                            Craft a unique collection of planets. With Solaris comes endless possibilities, allowing creation of one-of-a-kind collections that are as unique as you are.
                            </p>
                            <a href="/add-planets" title="Learn More About Custom Planets">Learn More</a>
                        </article>
                        {/* End of First Feature Card */}

                        {/* Start of Second Feature Card */}
                        <article>
                            <h3>Diverse Solar System</h3>            
                            <img src={solarSystemIcon} alt='' width="120"/>
                            <p>
                                Embark on a fascinating journey through our wondrous solar system and delve into a treasure trove of enlightening information about each unique planet.
                            </p>
                            <a href="/solar-system" title="View Our Current Solar System">Learn More</a>
                        </article>
                        {/* End of Second Feature Card */}

                        {/* Start of Third Feature Card */}
                        <article>
                            <h3>Astronomy News</h3>            
                            <img src={spaceLander} alt='' width="140"/>
                            <p>
                                Keep up to date on everything related to astronomy. From the latest discoveries to the most recent space missions, Solaris has you covered.
                            </p>
                            <a href="/news" title="Get The Latest Astronomy News">Learn More</a>
                        </article>
                        {/* End of Third Feature Card */}

                    </div>
                    {/* End of Features Grid Container Content */}
                </section>
                {/* End of About Section */}
            </div>
            {/* End of About Wrapper */}

            {/* Start of Getting Started Wrapper */}
            <div className="get-started-wrapper">
                {/* Start of Getting Started Section */}
                <section id='get-started'>

                    {/* Start of Getting Started Grid Text Content */}
                    <article>                
                    <h2>Blast Off Into Solaris</h2>
                    <p>
                        Get started with Solaris by visting our solar system, where you can explore common planets in our solar system, or create your own custom planets to discover in your very own planetarium!
                    </p>
                    <a href="/solar-system" title="Get Started With Solaris">Blast Off!</a>
                    </article>
                    {/* End of Getting Started Grid Text Content */}

                    {/* Start of Getting Started Grid Graphic Content */}
                    <figure className='image-wrapper'>
                        {/* Thank you to Adobe Stock for the Asset: https://stock.adobe.com/ca/images/flat-design-astronauts-float-in-space-vector-illustration-infographic-element/271170840?prev_url=detail */}
                        <img src={happyAstronautGraphic} alt="Happy Astronaut Waving" width="700"/>
                    </figure>
                    {/* End of Getting Started Grid Graphic Content */}
                    
                </section>
                {/* End of Getting Started Section */}

            </div>
            {/* End of Getting Started Wrapper */} 

        </div>
    
    );
}

export default Home;