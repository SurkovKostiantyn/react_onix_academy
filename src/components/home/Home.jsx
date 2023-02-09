import '../../styles/main.css';
import Nav from "../blocks/Nav";
import Banner from '../blocks/Banner';
import ContentNews  from "./ContentNews";
import ContentBelow from "./ContentBelow";
import Footer from '../blocks/Footer';

let Home = () =>{
    return(
        [
            <Nav key={1}/>, // Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
            <Banner key={2}/>,
            <ContentNews key={3}/>,
            <ContentBelow key={4}/>,
            <Footer key={5}/>,
        ]
    )
}

export default Home;