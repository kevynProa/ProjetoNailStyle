import './Card.css'
import usuario from '../img/user.png'
import chart_line from '../img/line-chart.png'

function Card(props) {
    return (
        <div className='corpo_card'>
            <div className='titulo_card'>
                <p className='texto_card'>
                    {props.nome_do_card}
                </p>
                <img src={usuario} alt='Foto Usuario' className='foto_perfil_card'></img>
            </div>
            <div className='infos_card'>
                <div className='img_chart_div'>
                    <img src={chart_line} className='img_chart' alt='graph'></img>
                </div>
                <div>
                    <p className='qntd_card'>{props.valor_card}</p>
                </div>
                <div>
                    <p className='desc_card'>Essa semana</p>
                    <p className='desc_card'>75%</p>
                </div>
            </div>
        </div >
    );
}

export default Card