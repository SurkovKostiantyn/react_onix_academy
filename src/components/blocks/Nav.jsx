
let Nav = () =>{
    return(
        <nav className="navbar" id="navbar">
            <a href="index.html" className="navbar-logo hoverable">RUNO</a>
            <ul className="navbar-menu">
                <li><a className="navbar-menu-item hoverable active" href="index.html">Home</a></li>
                <li><a className="navbar-menu-item hoverable" href="news.html">News</a></li>
            </ul>
        </nav>
    )
}

export default Nav;