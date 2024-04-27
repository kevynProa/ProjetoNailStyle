import './Main.css'
import Card from './Card'

function Main() {
    return (
        <div className='conteiner_main'>
            <div className='card_infos'>
                <Card nome_do_card="Usuários cadastrados" valor_card="233"/>
                <Card nome_do_card="Procedimentos marcados" valor_card="124"/>
                <Card nome_do_card="Maior demanda" valor_card="Fazer pés"/>
                <Card nome_do_card="Média de idade" valor_card="19"/>
            </div>
        </div>
    );
}

export default Main