import './headerSlider.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headerSlider from '../../images/headerSlides';


function HeaderSlider() {
   
    const settings = {
    dots: true,
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
        <div className='slideContainer'>
            <Slider {...settings}>
                {headerSlider.map((item, index) => (
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

export default HeaderSlider
