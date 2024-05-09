import './Menu.css';
import configs from '../img/settings.png'
import user from '../img/user-2.png'
import sair from '../img/exit.png'
import { Link } from 'react-router-dom'
import seta from '../img/setaEsquerda.png'

function Menu() {

    return (
        <div className='menu-lateral'>
            <div className='topo-menu'>
                <div className='menu-topo-foto-perfil'>
                </div>
                <p className='t_topo'>Bom dia, ADMIN</p>
                <small className='t_topo'>O que deseja verificar hoje?</small>
            </div>
            <div className='opcoes-menu'>
                <div className='div_opt'>
                    <button className='nav_menu_ligado'>
                        <img src={configs} className='img_opt'></img>
                        <p className='opt'>Configurações</p>
                    </button>
                </div>
                <div className='div_opt'>
                    <button className='nav_menu_ligado'>
                        <img src={user} className='img_opt'></img>
                        <p className='opt'>Perfil</p>
                    </button>
                </div>
                <div className='div_opt'>
                    <button className='nav_menu_ligado'>
                        <img src={sair} className='img_opt'></img>
                        <p className='opt'>Desligar</p>
                    </button>
                </div>
            </div>
            <div>
                <Link to="/">
                    <div className='opc_tela'>
                        <img src={seta} height={40} />
                        <p>Dashboard</p>
                    </div>
                </Link>
                <Link to="/Mensagens">
                    <div className='opc_tela'>
                        <img src={seta} height={40} />
                        <p>Mensagens</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Menu