import './card.cplx.css'
import usuario from '../img/user.png'

function CardCplx(props){
    return (
        <div className='corpo_card_cplx'>
            <div className='titulo_card'>
                <p className='texto_card'>
                    {props.nome_do_card}
                </p>
                <img src={usuario} alt='Foto Usuario' className='foto_perfil_card'></img>
            </div>
        </div>
    );
}

export default CardCplx