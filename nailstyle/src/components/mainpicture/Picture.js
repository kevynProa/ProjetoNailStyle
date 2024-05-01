//MY IMPORTS
import styles from './Picture.css'
import img2 from '../../img/img2.jpeg';
 
//MY FUNCTIONS
function Picture(){
    return(
        <div className='imgs'>
            <div>
            <img src={img2} alt='imagem de unha' title='Unhas Azuis' className='img2'/>
            </div>
        </div>
    )
};
 
//MY EXPORTS
export default Picture;