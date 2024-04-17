import './admin.css';
import lista from '../img/list.png';

function Navbar() {
    return (
        <nav>
            <div className='conteiner'>
                <div className='nav_opcoes_esquerda'>
                    <img src='' className='nav_foto_perfil' alt='Imagem de perfil'></img>
                    <h1 className='nav_nome_usuario'>Conta de Administrador(a)</h1>
                </div>
                <div className='nav_opcoes_direita'>
                    <button className='nav_menu'><img src={lista} height={45}></img></button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;