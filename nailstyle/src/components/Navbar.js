import './navbar.css';
import lista from '../img/list.png';

function Navbar(props) {
    return (
        <nav>
            <div className='conteiner'>
                <div className='nav_opcoes_esquerda'>
                    <img src='' className='nav_foto_perfil' alt='Imagem de perfil'></img>
                    <h1 className='nav_nome_usuario'>{props.nome_do_usuario}</h1>
                </div>
                <div className='nav_opcoes_direita'>
                    <button className='nav_menu'><img src={lista} height={45} alt='Foto'></img></button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;