//MY IMPORTS
import styles from './ServicesDireita.css'
import img1 from '../../img/img1.jpeg'
import img3 from '../../img/img3.jpeg'
import img4 from '../../img/img4.jpeg'
 
//MY FUNCTIONS
function ServicesDireita (){
    return(
       
        <div className='container-card'>
            <div className='txt2'>
            <h2 className='service1'>Com o quê trabalhamos</h2>
                <p className='descript2'>
- Utilizar instrumentos, equipamentos e produtos<br/>
<br/>
- Conceitos sobre anatomia e patologia da pele e das unhas<br/>
<br/>
- Higienizar e esterilizar unhas<br/>
<br/>
- Retirar esmalte, cortar, lixar, polir e preparar unhas para retirada de cutícula<br/>
<br/>
- Hidratar e esfoliar mãos e pés<br/>
<br/>
- Esmaltar unhas com esmalte comum e em gel<br/>
<br/>
- Decorar unhas com películas e outros materiais<br/>
<br/>
- Atuar de acordo com normas de biossegurança</p>
            </div>
                <img src={img1} alt='imagem de unha' title='Unhas Azuis' className='imgone'/>
                <img src={img3} alt='imagem de unha' title='Unhas Azuis' className='imgtree'/>
                <img src={img4} alt='imagem de unha' title='Unhas Azuis' className='imgfour'/>
        </div>
    )
}
 
//MY EXPORTS
export default ServicesDireita