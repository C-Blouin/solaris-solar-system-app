
// Importing Logo Graphic for the Header Navigation. Thank you to Adobe Stock for the Logo Mark: https://stock.adobe.com/ca/images/planet-saturn-logo-design-template/599666104?prev_url=detail
import solarisLogo from '../../images/solaris-logo.svg';

function Header () {
    return (
    // Start of Header 
    <header id="header-nav">
         {/* Start of Primary Header Navigation  */}
        <nav className="navbar navbar-expand-xl navbar-dark justify-content-between align-items-center" role="navigation" data-bs-theme="dark">
            <div className="container-fluid">
                {/* Start of Hamburger Toggle Button Icon */}
                <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* End of Hamburger Toggle Button Icon */}
                <div className="offcanvas offcanvas-end" id="navbarNav">                    
                    <div className="offcanvas-body">                       
                        <a href="/"><img src={solarisLogo} width="110" id='logo' className='navbar-brand' alt='Solaris Logo Graphic'></img></a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add-planets">Custom Planets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/planetarium">Planetarium</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news">News</a>
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