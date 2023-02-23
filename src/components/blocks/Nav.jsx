import Link from "../links/Link";
import UnorderedList from "../lists/UnorderedList";

class NavClass{
    constructor(href, className, innerHTML, id){
        this.href = href;
        this.className = className;
        this.innerHTML = innerHTML;
        this.id = id;
    }
    getLink(){
        return(
            <Link href={this.href} className={this.className} innerHTML={this.innerHTML} />
        )
    }
    getKeyValue(){
        return this.id;
    }
}

let linksListObjectsNav = [
    new NavClass('index.html', 'navbar-menu-item hoverable active', 'Home', 'navLink1'),
    new NavClass('news.html', 'navbar-menu-item hoverable', 'News', 'navLink2')
];

let Nav = () =>{
    return(
        <nav className="navbar" id="navbar">
            <Link href={"index.html"} className={"navbar-logo hoverable"} innerHTML={"RUNO"} />

            <UnorderedList
                className="navbar-menu"
                list={linksListObjectsNav}
            />
        </nav>
    )
}

export default Nav;