import Link from "../links/Link";
import UnorderedList from "../lists/UnorderedList";

let Nav = () =>{
    return(
        <nav className="navbar" id="navbar">
            <Link href={"index.html"} className={"navbar-logo hoverable"} innerHTML={"RUNO"} />

            <UnorderedList
                className="navbar-menu"
                list={
                    [
                       <Link href={"index.html"}
                           className={"navbar-menu-item hoverable active"}
                           innerHTML={"Home"} />,
                       <Link href={"news.html"}
                           className={"navbar-menu-item hoverable"}
                           innerHTML={"News"}/>
                    ]
                }
            />
        </nav>
    )
}

export default Nav;