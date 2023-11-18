// Importing useEffet and useRef from React.
import React, { useEffect, useRef } from 'react';
// Since React doesn't like SVGs and all their attributes, I am importing the SVG as a React Component. Thanks to this article for the help: https://blog.logrocket.com/how-to-use-svgs-react/
import { ReactComponent as RocketShip } from '../images/rocket-ship.svg';

function BackToTopButton() {

  // Creating a reference to the back to top button. This will be used to access the button's style property to display or hide the button.
  const backToTopButtonRef = useRef(null);

  useEffect(() => {
    // Function to handle the scroll position of the window.
    const handleScroll = () => {
      // IF the window.scrollY is greater than or equal to 220px, the back to top button will be displayed.
      if (window.scrollY >= 220) {
        backToTopButtonRef.current.style.display = 'block';
      } 
      // ELSE hide the back to top button.
      else {
        backToTopButtonRef.current.style.display = 'none';
      }
    };

    // Add an event listener to the window object to track the position of the scroll on the Y Axis by calling the handleScroll function.
    window.addEventListener('scroll', handleScroll);

  }, []);

// Function to scroll to the top of the page when this function is invoked through the onClick of the div below.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
 
      <div id="back-to-top" ref={backToTopButtonRef} onClick={scrollToTop}>
        <RocketShip height="80" />
      </div>

  );
}

export default BackToTopButton;
