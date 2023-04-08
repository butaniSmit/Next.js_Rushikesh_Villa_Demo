import Slider from "react-slick";
export const HotelGallery = () => {
    var settings = {
        dots: true,
        // infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
      <section className="slider py-5">
        <div className="container slider-padding">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <div className="text-center">
                <div className="slider-text">
                  <h1>Hotel Gallery</h1>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    dolor, iusto doloremque quo odio repudiandae sunt eveniet?
                    Enim facilis laborum voluptate id porro, culpa maiores quis,
                    blanditiis laboriosam alias. Sed.
                  </p>
                </div>
                <div className="owl-carousel-slider">
                  <div
                    className="owl-carousel shadow-lg owl-theme"
                    id="main-slider"
                  >
                    {/* <Slider {...settings}> */}
                    <div className="item">
                      <img src="img/slider-1.jpg" alt className="img-fluid" width={2000} />
                    </div>
                    {/* <div className="item">
                      <img src="img/slider-2.jpg" alt className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="img/slider-3.jpg" alt className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="img/slider-4.jpg" alt className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="img/slider-5.jpg" alt className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="img/slider-6.jpg" alt className="img-fluid" />
                    </div> */}
                    {/* </Slider> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
