function Footer(){
    return(
        <footer>
            <div className="footer-body">
                <div className="footer-body-blocks">
                    <h4>
                        Contact the Publisher
                    </h4>
                    <p><a href="mailto:kskrua@gmail.com" className="hoverable">mike@runo.com</a></p>
                    <p><a href="tel:+1111111" className="hoverable">+944 450 904 505</a></p>
                </div>
                <div className="footer-body-blocks">
                    <h4>
                        Exploratory
                    </h4>
                    <ul>
                        <li><a href="/" className="hoverable">About</a></li>
                        <li><a href="/" className="hoverable">Partners</a></li>
                        <li><a href="/" className="hoverable">Job Opportunities</a></li>
                        <li><a href="/" className="hoverable">Advertise</a></li>
                        <li><a href="/" className="hoverable">Membership</a></li>
                    </ul>
                </div>
                <div className="footer-body-blocks">
                    <h4>
                        Headquarter
                    </h4>
                    <p className="lineHeight20">191 Middleville Road,<span className="br"></span>
                        NY 1001, Sydney<span className="br"></span>
                        Australia</p>
                </div>
                <div className="footer-body-blocks">
                    <h4>
                        Connections
                    </h4>
                    <a href="/" className="fa-brands hoverable fa-facebook"> </a>
                    <a href="/" className="fa-brands hoverable fa-twitter"> </a>
                    <a href="/" className="fa-brands hoverable fa-youtube"> </a>
                    <a href="/" className="fa-brands hoverable fa-pinterest"> </a>
                    <a href="/" className="fa-brands hoverable fa-behance-square"> c,e</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-div">
                    <p>
                        2021 | RUNO Publisher Studio
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;