import '../../styles/main.css';
import Nav from "../blocks/Nav";
import Banner from '../blocks/Banner';
import ContentNews  from "../blocks/ContentNews";
import ContentBelow from "../blocks/ContentBelow";
import Footer from '../blocks/Footer';
import { Component } from "react";

export default class Home extends Component{
    render(){
        return(
            <>
                <Nav />
                <Banner />
                <ContentNews />
                <ContentBelow />
                <Footer />
            </>
        )
    }
}