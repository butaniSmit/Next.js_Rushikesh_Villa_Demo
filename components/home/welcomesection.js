export default function Welcomesection() {
  return (
    <>
        <div className="bg-nav-img-index" style={{backgroundImage : `url(img/hero_1.jpg)`}}>
          <div className="dark-overly"></div>
          {/* top-navbar */}
          <div className="top-nav-area text-white">
            <div className="container px-lg-3 p-2">
              <div className="row">
                <div className="col">
                  <ul className="topnav-list d-md-flex justify-content-between list-unstyled">
                    <li className>
                      <i className="fa fa-location-crosshairs"> </i> 98 West
                      21th Street, Suite 721 New York NY 10016
                      <i className="fa-solid fa-mobile-screen-button ms-2">
                        {" "}
                      </i>{" "}
                      (+1) 435 3533
                    </li>
                    <li className>
                      <i className="fa-brands fa-twitter" />
                      <i className="fa-brands fa-facebook px-4  " />
                      <i className="fa-brands fa-instagram" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* offcanvas-navbar */}
          {/* welcome-text */}
          <section>
            <div className="container">
              <div className="row">
                <div className="col" data-aos="fade-up">
                  <div className="wc-text text-center text-white">
                    <h1>
                      Welcome to <i>Villa</i> resort
                    </h1>
                    <p className="lead fw-normal fs-3">
                      Discover our world-class hotel &amp; restaurant resort.
                    </p>
                  </div>
                  <div className="btns justify-content-center d-md-flex pt-4">
                    <a
                      href="#"
                      className="btn rounded-pill btn-danger py-3 px-4 mb-3 mb-md-0 d-sm-inline d-block"
                    >
                      EXPLOR THE BEAUTY
                    </a>
                    <a
                      href="#"
                      className="btn rounded-pill btn-outline-light py-3 px-4 ms-md-4 ms-0 d-sm-inline d-block"
                    >
                      DOWNLOAD
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  );
}
