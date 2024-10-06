import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bestsellerSlider.css'
import bestsellerSlider from '../../images/bestsellerSlider';


function BestSellerSlider() {

    const settings = {
        // dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false
        };


    return (
        <div className='sliderContainer'>
            <Slider {...settings}>
            {bestsellerSlider.map((item, index) => (
                    <div key={index} className='slide'>
                        <div className='image'>
                            <img src={item.image}/>
                        </div>
                    </div>
                ))}
            </Slider>
            
        </div>
    )
}

export default BestSellerSlider
