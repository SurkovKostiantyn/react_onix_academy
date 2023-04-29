import Link from '../../links/Link';
import ContentNewsBody from './ContentNewsBody';
import Header from '../../elements/Header';

export default function ContentNews() {
  // ContentNewsBody loop
  return (
    <div className="content-home">
      <div className="content-home-header">
        <Header headerLevel="h3">
          PORTFOLIOS
        </Header>
        <Link href="/news" className="hoverable btn-big" innerHTML="News for customers" />
      </div>
      <ContentNewsBody />
    </div>
  );
}
