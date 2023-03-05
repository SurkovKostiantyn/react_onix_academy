import '../styles/main.css';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import ContentNews from '../components/blocks/news/ContentNews';
import ContentBelow from '../components/blocks/news/ContentBelow';
import Footer from '../components/blocks/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <ContentNews />
      <ContentBelow />
      <Footer />
    </>
  );
}
