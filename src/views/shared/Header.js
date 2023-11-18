
// Importing Logo Graphic for the Header Navigation. Thank you to Adobe Stock for the Logo Mark: https://stock.adobe.com/ca/images/planet-saturn-logo-design-template/599666104?prev_url=detail
import solarisLogo from '../../images/solaris-logo.svg';

function Header () {

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
            // Max width is set to 1200px, this is to allow the header to become transparent on smaller screens as I just want the hamburger icon to be visible when scrolling the page on mobile.
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

    return (
        
    // Start of Header 
    <header id='header-nav'>
            {/* Start of Primary Header Navigation  */}
        <nav className='navbar navbar-expand-xl navbar-dark justify-content-between align-items-center' role='navigation' data-bs-theme='dark'>
            <div className='container-fluid'>
                {/* Start of Hamburger Toggle Button Icon */}
                <button className='navbar-toggler d-xl-none' type='button' data-bs-toggle='offcanvas'
                    data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false'
                    aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/* End of Hamburger Toggle Button Icon */}
                <div className='offcanvas offcanvas-end' id='navbarNav'>                    
                    <div className='offcanvas-body'>                       
                        <a href='/'><img src={solarisLogo} width='110' id='logo' className='navbar-brand' alt='Solaris Logo Graphic'></img></a>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' aria-current='page' href='/'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/solar-system'>Solar System</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/add-planets'>Add Planets</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/planetarium'>Planetarium</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/news'>News</a>
                            </li>
                        </ul>
                    </div>
                    {/* End of .offcanvas-body */}
                </div> 
                {/* End of .offcanvas */}
            </div>
            {/* End of .container-fluid */}
        </nav>
        {/* End of Primary Header Navigation */}
    </header>
    // End of Header 

    )
}

export default Header;