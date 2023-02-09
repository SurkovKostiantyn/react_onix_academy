import FooterLink from '../links/FooterLink';
function Footer(){
    return(
        <footer>
            <div className="footer-body">
                <div className="footer-body-blocks">
                    <h4>
                        Contact the Publisher
                    </h4>
                    <p><FooterLink href="mailto:kskrua@gmail.com" className="hoverable" innerHTML="mike@runo.com"/></p>
                    <p><FooterLink href="tel:123456" className="hoverable" innerHTML="0123 456 78 90"/></p>
                </div>
                <div className="footer-body-blocks">
                    <h4>
                        Exploratory
                    </h4>
                    <ul>
                        <li><FooterLink href="/" className="hoverable" innerHTML="About us"/></li>
                        <li><FooterLink href="/" className="hoverable" innerHTML="Partners"/></li>
                        <li><FooterLink href="/" className="hoverable" innerHTML="Job Opportunities"/></li>
                        <li><FooterLink href="https://ru.wikipedia.org/wiki/Свинка_Пеппа" className="hoverable" innerHTML="Svinka Peppa"/></li>
                        <li><FooterLink href="/" className="hoverable" innerHTML="Membership"/></li>
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
                    <FooterLink href="/" className="fa-brands hoverable fa-facebook" />
                    <FooterLink href="/" className="fa-brands hoverable fa-twitter" />
                    <FooterLink href="/" className="fa-brands hoverable fa-youtube" />
                    <FooterLink href="/" className="fa-brands hoverable fa-pinterest" />
                    <FooterLink href="/" className="fa-brands hoverable fa-behance-square" />
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