//MY IMPORTS
import styles from '/interativo.css'
import {Swiper, SwiperSlide} from 'swiper/react'

 
//MY FUNCTIONS
function Interativo(){

    const data = [
        { id: '1', image:'https://br.pinterest.com/pin/328551735320072637/' },
        { id: '2', image:'https://br.pinterest.com/pin/328551735320072637/' },
        { id: '3', image:'https://br.pinterest.com/pin/328551735320072637/' },
        { id: '4', image:'https://br.pinterest.com/pin/328551735320072637/' },
    ]


    return(
        <div>
            <Swiper slidesPerView={1} pagination={{  clickable: true }} navigation>
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="slider" className='slide-iten' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
 
//MY EXPORTS
export default Interativo