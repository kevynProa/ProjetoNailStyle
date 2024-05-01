import './navbar.css';
import lista from '../img/list.png';
import { useState } from 'react';
import Menu from './Menu';

function Navbar(props) {
    const [menu, setMenu] = useState(false)

    const ligaMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav>
            <div className='conteiner'>
                <div className='nav_opcoes_esquerda'>
                    <img src='' className='nav_foto_perfil' alt='Imagem de perfil'></img>
                    <h1 className='nav_nome_usuario'>{props.nome_do_usuario} {menu ? 'on' : 'off'}</h1>
                </div>
                <div className='nav_opcoes_direita'>
                    <button className='nav_menu'><img src={lista} height={45} alt='Foto' onClick={ligaMenu}></img></button>
                </div>
            </div>
            {menu && (<Menu />)}
        </nav>
        
    );
}

export default Navbar;