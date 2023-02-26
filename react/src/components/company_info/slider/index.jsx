import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CompanySlider({ data, category }) {
    const settings = {
        infinite: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        lazyLoad: true,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px",
                },
            },
        ],
    };

    const settingsGallery = {
        infinite: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,
    };
    return (
        <>
            {category === "services" && (
                <Slider {...settings}>
                    {data &&
                        data.map((char, i) => (
                            <div className="box_service" key={i}>
                                <img src={char.image} alt="" />
                                <p>{char.text}</p>
                            </div>
                        ))}
                </Slider>
            )}

            {category === "gallery" && (
                <Slider {...settingsGallery}>
                    {data &&
                        data.map((char, i) => (
                            <div className="box_service gallery" key={i}>
                                <img src={char.image} alt="" />
                            </div>
                        ))}
                </Slider>
            )}
        </>
    );
}

export default CompanySlider;
