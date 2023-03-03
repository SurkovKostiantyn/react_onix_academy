import Link from '../../links/Link';
import ContentNewsBody from './ContentNewsBody';
import Header from '../../elements/Text';

function ContentNews() {
  // ContentNewsBody loop
  return (
    <div className="content-news">
      <div className="content-news-header">
        <Header headerLevel="h3" text="News" />
        <Link href="https://news.html" className="hoverable" innerHTML="View all" />
      </div>
      <ContentNewsBody />
    </div>
  );
}

export default ContentNews;
