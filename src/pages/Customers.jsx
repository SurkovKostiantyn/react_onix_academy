import Header from '../components/elements/Header';
import Link from '../components/links/Link';

export default function Customers() {
  return (
    <div className="content-home">
      <div className="content-home-header">
        <Header headerLevel="h3">Customers</Header>
        <Link href="/" className="hoverable btn-big" innerHTML="Back to home" />
      </div>
    </div>
  );
}
