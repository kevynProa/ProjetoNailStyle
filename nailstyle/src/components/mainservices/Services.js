//MY IMPORTS
import styles from './Services.css';
import img1 from '../../img/img1.jpeg'
import img3 from '../../img/img3.jpeg'
import img4 from '../../img/img4.jpeg'
import {Swiper, SwiperSlide} from 'swiper/react'
 
//MY FUNCTIONS
function Services (){
    


    return(
       
        <div className='extern'>
            <div className='text1'>
            <h2 className='subtitle'>Por que escolher nossos serviços</h2>
                <p className='descript'>Nossos serviços são oferecidos no conforto da sua casa, evitando deslocamentos e economizando seu tempo precioso. Mantemos rigorosos padrões de higiene, garantindo a esterilização completa de todos os equipamentos entre os clientes para sua tranquilidade e segurança.Utilizamos apenas produtos de alta qualidade, proporcionando resultados duradouros e uma experiência de manicure verdadeiramente satisfatória.</p>
            </div>
            <div className='container'>    
                <img src={img1} alt='imagem de unha' title='Unhas Azuis' className='img1'/>
                <img src={img3} alt='imagem de unha' title='Unhas Azuis' className='img3'/>
                <img src={img4} alt='imagem de unha' title='Unhas Azuis' className='img4'/>
                </div>
        </div>
    )
};
 
//MY EXPORTS
export default Services