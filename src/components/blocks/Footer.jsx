import Link from '../links/Link';
import JustALittleTag from "../elements/JustALittleTag";
import UnorderedList from "../lists/UnorderedList";
const Footer = () =>{
    return(
        <footer>
            <div className="footer-body">
                <div className="footer-body-blocks">
                    <JustALittleTag tag={'h4'} text={'Contact the Publisher'}/>
                    <JustALittleTag tag={'p'} text={<Link href="mailto:kskrua@gmail.com"
                                                          className="hoverable"
                                                          innerHTML="mike@runo.com" />
                    }/>
                    <JustALittleTag tag={'p'} text={<Link href="tel:123456"
                                                          lassName="hoverable"
                                                          innerHTML="0123 456 78 90" />
                    }/>
                </div>
                <div className="footer-body-blocks">
                    <JustALittleTag tag={'h4'} text={'Exploratory'}/>
                    <UnorderedList list={[
                        <Link href="/" className="hoverable" innerHTML="About us" />,
                        <Link href="/" className="hoverable" innerHTML="Partners" />,
                        <Link href="/" className="hoverable" innerHTML="Job Opportunities" />,
                        <Link href="/" className="hoverable" innerHTML="Svinka Pepa" />,
                        <Link href="/" className="hoverable" innerHTML="Membership" />,
                        ]
                    }/>
                </div>
                <div className="footer-body-blocks">
                    <JustALittleTag tag={'h4'} text={'Headquarter'}/>
                    <JustALittleTag tag={'p'} className="lineHeight20" text={'191 Middleville Road,'}/>
                    <JustALittleTag tag={'p'} className="lineHeight20" text={'1NY 1001, Sydney,'}/>
                    <JustALittleTag tag={'p'} className="lineHeight20" text={'Australia'}/>
                </div>
                <div className="footer-body-blocks">
                    <JustALittleTag tag={'h4'} text={'Connections'}/>
                    <Link href="blabla" className="fa-brands hoverable fa-facebook" />
                    <Link href="bleble" className="fa-brands hoverable fa-twitter" />
                    <Link href="bloblo" className="fa-brands hoverable fa-youtube" />
                    <Link href="blibli" className="fa-brands hoverable fa-pinterest" />
                    <Link href="blybly" className="fa-brands hoverable fa-behance-square" />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-div">
                    <JustALittleTag tag={'p'} text={'2021 | RUNO Publisher Studio'}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;