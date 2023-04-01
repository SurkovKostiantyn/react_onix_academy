import Link from '../../links/Link';
import ContentNewsBody from './ContentNewsBody';
import Header from '../../elements/Header';

export default function ContentNews() {
  // ContentNewsBody loop
  return (
    <div className="content-news">
      <div className="content-news-header">
        <Header headerLevel="h3" text="PORTFOLIOS" />
        <Link href="https://news.html" className="hoverable btn-big" innerHTML="For customers" />
      </div>
      <ContentNewsBody />
    </div>
  );
}
