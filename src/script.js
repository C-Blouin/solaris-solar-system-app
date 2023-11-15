// This code block will grab the header element, track the scroll position of the document window and based on the scrollHeight variable the background colour of the header will turn to a light black, this is to prevent visibility issues as the header is initially transparent..
  function updateHeaderBackground() {

    // Select the header element in the DOM
    let header = document.getElementById("header-nav");

    // Check IF the header element is present in the DOM. If so, run the following code.
    if (header) {

      // Get the scroll position of the document window along the Y axis.
      let scrollPosition = window.scrollY || document.documentElement.scrollTop;
      // Get the width of the screen 
      let screenWidth = window.innerWidth || document.documentElement.clientWidth;

      // Declare Heigh and Width variables to be used in the conditional statements below and based on the conditions the background colour will become completely transparent or a light black.

      // Scroll height is set to 120px, this is to prevent the header from becoming transparent too early.
      let scrollHeight = 120;
      // Max width is set to 1200px, this is to allow the header to become transparent on smaller screens as I just want the hamburger icon to be visible. when scrolling the page on mobile.
      let maxWidth = 1200;

      // IF the viewport is less than or equal to 1200px and the scroll position is greater than the scroll height, remove the background colour.
      if (screenWidth <= maxWidth) {
        header.style.backgroundColor = "transparent";
      } 
      
      // ELSE IF the scroll position is greater than the scrollHeight of 120px, set the background colour to a light black.
      else if (scrollPosition > scrollHeight) {
        header.style.backgroundColor = "rgb(10, 10, 10)"; 
      } 
      
      // ELSE set the background colour to transparent. This will be the default when at the top of the page.
      else {
        header.style.backgroundColor = "transparent";
      }
    }
  }

  // Event listeners to update the header background colour when the user scrolls or resizes the window.
  window.addEventListener("scroll", updateHeaderBackground);
  window.addEventListener("resize", updateHeaderBackground);