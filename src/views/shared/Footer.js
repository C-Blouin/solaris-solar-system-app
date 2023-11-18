
// Importing Solaris Logo for usage into the footer element component. Thank you to Adobe Stock for the Logo Mark: https://stock.adobe.com/ca/images/planet-saturn-logo-design-template/599666104?prev_url=detail
import logo from '../../images/solaris-logo.svg';

function Footer () {
    return (
        // Start of Footer
        <footer>
            <a href="/">
                <img src={logo} alt='Solaris Logo' width="100" className='footer-logo'/>
            </a>
            {/* Start of Footer Nav */}
            <nav className='navbar-dark'>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/solar-system">Solar System</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add-planets">Add Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/planetarium">Planetarium</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news">News</a>
                    </li>
                </ul>
            </nav>
            {/* End of Footer Nav */}
        </footer>
        // End of Footer
    );
}

export default Footer;