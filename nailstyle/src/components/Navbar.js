import './navbar.css';
import Button from './Button';

function Navbar(props) {
    

    return (
        <nav>
            <div className='conteiner'>
                <div className='nav_opcoes_esquerda'>
                    <img src='' className='nav_foto_perfil' alt='Imagem de perfil'></img>
                    <h1 className='nav_nome_usuario'>{props.nome_do_usuario}</h1>

                </div>
                <div className='nav_opcoes_direita'>
                    <Button />
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;