import './button.css';
import lista from '../img/list.png';
import { useState } from 'react';
import Menu from './Menu'

function Button() {
    const [menu, setMenu] = useState(false)

    const ligaMenu = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <button className='nav_menu'>
                <img src={lista} height={45} alt='Foto' onClick={ligaMenu}></img>
            </button>
            {menu && (<Menu />)}
        </div>

    );
}

export default Button;