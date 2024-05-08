import './Header.css'
 
//MY FUNCTION
 
function Header (){
 
    return(
<header className='header-nav'>
            <nav className='nav-list'>
                <h2>Nailstyle</h2>
                <ul className='black-nav'>
                    <li>Home</li>
                    <li>Services</li>
                    <li className='login'>Login</li>
                </ul>
            </nav>
</header>
    );
};
 
//MY EXPORT
 
export default Header;