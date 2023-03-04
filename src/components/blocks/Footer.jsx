import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../links/Link';
import Text from '../elements/Text';
import Header from '../elements/Header';
import UnorderedList from '../lists/UnorderedList';

// звичайний масив з обʼєктами
const linksListObjectsFooter = [
  {
    id: 0, href: 'blabla', className: 'hoverable', innerHTML: 'About us', 
  },
  {
    id: 1, href: 'bleble', className: 'hoverable', innerHTML: 'Partners', 
  },
  {
    id: 2, href: 'bloblo', className: 'hoverable', innerHTML: 'Job Опортунитиз', 
  },
  {
    id: 3, href: 'blibli', className: 'hoverable', innerHTML: 'Svinka Pepa', 
  },
  {
    id: 4, href: 'blybly', className: 'hoverable', innerHTML: 'Membership', 
  }
];

function Footer() {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-body-blocks">
          <Header headerLevel="h4" text="Contact the Publisher" />
          <Text text={(
            <Link
              href="mailto:kskrua@gmail.com"
              className="hoverable"
              innerHTML="mike@runo.com"
            />
)}
          />
          <Text text={(
            <Link
              href="tel:123456"
              lassName="hoverable"
              innerHTML="0123 456 78 90"
            />
)}
          />
        </div>
        <div className="footer-body-blocks">
          <Header headerLevel="h4" text="Exploratory" />
          <UnorderedList
            list={linksListObjectsFooter}
            renderItem={({ href, className, innerHTML }) => (
              <Link
                href={href}
                className={className}
                innerHTML={innerHTML}
              />
            )}
          />
        </div>
        <div className="footer-body-blocks">
          <Header headerLevel="h4" text="Headquarter" />
          <Text className="lineHeight20" text="191 Middleville Road," />
          <Text className="lineHeight20" text="1NY 1001, Sydney," />
          <Text className="lineHeight20" text="Australia" />
        </div>
        <div className="footer-body-blocks">
          <Header headerLevel="h4" text="Connections" />
          <Link
            href="https://blabla"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-facebook" />}
          />
          <Link
            href="https://bleble"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-twitter" />}
          />
          <Link
            href="https://bloblo"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-youtube" />}
          />
          <Link
            href="https://blibli"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-pinterest" />}
          />
          <Link
            href="https://blybly"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-behance-square" />}
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-div">
          <Text text="2021 | RUNO Publisher Studio" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
