//MY IMPORT
import './NavBar.css';
 
//MY FUNCTIONS

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

function NavBar(){
    return(
        <div className='container'>
            <header className='header-container'>
                <h2 className='logo' >NailStyle</h2>
                <ul className='menu'>
                    <li><a href="#Home" className="Home" onClick={() => smoothScroll("#Home")}>Home</a></li>
                    <li><a href="#Serviços" className="service"  onClick={() => smoothScroll("#Serviços")}>Serviços</a></li>
                    <li><a href="#Login" className="loggin"  onClick={() => smoothScroll("#Login")}>Login</a></li>
                </ul>
            </header>
        </div>
    )
};
 
//MY EXPORT
export default NavBar