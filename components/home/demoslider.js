import Slider from "react-slick";

export default function DemoSlider() {
    var settings = {
        dots: true,
        // infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <Slider {...settings}>
        <div>
            <h1>silde 1</h1>
        </div>
        <div>
            <h1>silde 1</h1>
        </div>
        </Slider>
    </>
  );
}
