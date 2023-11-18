
// Importing the useState and useEffect Package Libraries.
import React, { useState, useEffect } from 'react';

function SpaceNews() {

  // Declaring a useState hook to hold the space flight news in an array, initially set to empty.
  const [spaceFlightNews, setSpaceFlightNews] = useState([]);

// API Reference: https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_list   
  useEffect(() => {

    // Set the SpaceNews component page title element.
    document.title = 'Solaris | Space News';

    // Fetching the space flight news data from the API and setting the spaceFlightNews array to the fetched data.
    fetch('https://api.spaceflightnewsapi.net/v4/articles/?has_launch=true&limit=10&offset=120&ordering=date')
    .then((response) => response.json())
    .then((newsData) => setSpaceFlightNews(newsData.results))
    .catch((error) => {
        console.error('Error fetching space flight news:', error);
    });
    
  },[]);

  return (

    // Start of Space News Wrapper
    <div className='space-news-wrapper'>

        {/* Start of Solar System News Intro */}
        <div className='news-intro'>
            <section id='space-news-intro'>
              <h1>Space News</h1>           
              <p>Embark on a cosmic journey with our Space News section, where the mysteries of the universe unfold offering current news about various space related topics.</p>
              <a href='#space-news' title='Explore Our Solar System!'>Exlore Now</a>
            </section>
        </div>
        {/* End of Solar System News Intro */}

        {/* Start of Primary Space News Section */}
        <section id='space-news'>

                {/* Mapping through the useState space flight news array, and then rendering each news article into it's own article HTML element */}
                {spaceFlightNews.map((newsArticle) => (
                  
                  // Assign a key to each article element (Each news article that is mapped out). Start of Each News Article
                  <article key={newsArticle.id}>
                      <figure className='news-img'>
                        {/* Setting the image source to the corresponding news article image that was fetched, as well as setting the alt attribute to the news title. */}
                        <img src={newsArticle.image_url} alt={newsArticle.title} />
                      </figure>
                      {/* Start of News Content */}
                      <div>
                        <h3>{newsArticle.title}</h3>
                        <p>{newsArticle.summary}</p>
                        {/* New Date Object to convert the fetched news article to a string to display in a more readable format. */}
                        <p>{new Date(newsArticle.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            // Setting the timezone to Toronto, which will be in Eastern Standard Time.
                            timeZone: 'America/Toronto',                
                          })}</p>
                          {/* Inserting the source URL for the corresponding clicked article into the anchor href value, so users can read more about an article when clicked. */}
                        <a href={newsArticle.url} target='_blank' rel='noreferrer'>Read more</a>
                      </div>
                      {/* End of News Content */}
                  </article>
                  // End of Each News Article

                ))}

        </section>
        {/* End of Primary Space News Section */}

    </div>
    // End of Space News Wrapper

  );
}

export default SpaceNews;
