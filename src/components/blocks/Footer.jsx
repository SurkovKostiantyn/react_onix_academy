import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../links/Link';
import Text from '../elements/Text';
import Header from '../elements/Header';
import UnorderedList from '../lists/UnorderedList';

// звичайний масив з обʼєктами
const linksListObjectsFooter = [
  {
    href: 'https://github.com/SurkovKostiantyn/react_onix_academy',
    className: 'hoverable',
    innerHTML: 'About us',
    key: 1
  },
  {
    href: 'https://github.com/SurkovKostiantyn/react_onix_academy',
    className: 'hoverable',
    innerHTML: 'Partners',
    key: 2
  },
  {
    href: 'https://github.com/SurkovKostiantyn/react_onix_academy',
    className: 'hoverable',
    innerHTML: 'Job Опортунитиз',
    key: 3
  },
  {
    href: 'https://github.com/SurkovKostiantyn/react_onix_academy',
    className: 'hoverable',
    innerHTML: 'Svinka Pepa',
    key: 4
  },
  {
    href: 'https://github.com/SurkovKostiantyn/react_onix_academy',
    className: 'hoverable',
    innerHTML: 'Membership',
    key: 5
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
            href="https://www.facebook.com/profile.php?id=100001909817025"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-facebook" />}
          />
          <Link
            href="https://www.instagram.com/constantin296/"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-instagram" />}
          />
          <Link
            href="https://t.me/iplague"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-telegram" />}
          />
          <Link
            href="https://github.com/SurkovKostiantyn/react_onix_academy"
            className="fa-brands hoverable"
            innerHTML={<FontAwesomeIcon icon="fa-brands fa-github" />}
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-div">
          <Text text="1990-2023 | Surkov Kostiantyn React Hometask" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
