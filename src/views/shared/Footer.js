// Importing Solaris Logo for usage into the footer element component. Thank you to Adobe Stock for the Logo Mark: https://stock.adobe.com/ca/images/planet-saturn-logo-design-template/599666104?prev_url=detail
import logo from '../../images/solaris-logo.svg';

function Footer () {
    return (
        // Start of Footer
        <footer>
            <img src={logo} alt='Solaris Logo' width="100" className='footer-logo'/>
            {/* Start of Footer Nav */}
            <nav className='navbar-dark'>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Custom Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Planetarium</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">News</a>
                    </li>
                </ul>
            </nav>
            {/* End of Footer Nav */}
        </footer>
        // End of Footer
    );
}

export default Footer;