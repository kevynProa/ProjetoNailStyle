import './Main.css'
import Card from './Card'
import CardCplx from './CardCplx'

function Main() {



    return (
        <div className='conteiner_main'>
            <div className='card_infos'>
                <Card nome_do_card="Usuários cadastrados" valor_card="233" />
                <Card nome_do_card="Procedimentos marcados" valor_card="124" />
                <Card nome_do_card="Maior demanda" valor_card="Fazer pés" />
                <Card nome_do_card="Média de idade" valor_card="19" />
            </div>
            <div className='card_infos_complete'>
                <CardCplx nome_do_card="Último cadastro" />
                <CardCplx nome_do_card="Feedback" />
            </div>
        </div>
    );
}

export default Main