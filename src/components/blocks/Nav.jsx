import Link from "../links/Link";
import UnorderedList from "../lists/UnorderedList";

let linksListObjectsNav = [
    {href: 'index.html', className: 'navbar-menu-item hoverable active', innerHTML: 'Home'},
    {href: 'news.html', className: 'navbar-menu-item hoverable', innerHTML: 'News'}
];

let Nav = () =>{
    return(
        <nav className="navbar" id="navbar">
            <Link href={"index.html"} className={"navbar-logo hoverable"} innerHTML={"RUNO"} />
            <UnorderedList list={linksListObjectsNav}
                           className="navbar-menu"
                           renderItem={({href, className,innerHTML}) =>
                               (
                                   <Link href={href}
                                         className={className}
                                         innerHTML={innerHTML}
                                   />
                               )}
            />
        </nav>
    )
}

export default Nav;