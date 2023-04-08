export default function HotelIntro() {
  return (
    <section className="bg-light pt-5">
      <div className="row">
        <div className="col-md-6 col-12 p-0" data-aos="fade">
          <img
            src="img/hero_1.jpg"
            alt
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6 col-12 p-0" data-aos="fade-right">
          <div className="hotelintro-text">
            <h2 className="intro-heading">5 Star Hotel</h2>
            <div className="intro-text text-muted">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                aliquid, est reiciendis repellat sapiente consequatur aperiam,
                ducimus, id minima eligendi officiis, qui expedita sint culpa
                illum magnam ipsam adipisci possimus? Sit aspernatur eaque id
                sunt fuga facere hic laudantium, aperiam!
              </p>
              <p>
                Provident dolor aperiam similique maiores quasi. Quo repudiandae
                fuga commodi itaque dolores accusamus, dolor esse adipisci
                labore harum blanditiis in totam ipsum vero necessitatibus
                incidunt reprehenderit, id iste quas, ab, non! Voluptates,
                reiciendis culpa iure deserunt voluptatum itaque. Quos, soluta.
              </p>
            </div>
            <div className="mt-5 btn">
              <button
                className="btn btn-danger rounded-pill px-4"
                style={{ letterSpacing: ".2rem", fontSize: ".9rem" }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-6 col-12 order-2 order-md-0 p-0"
          data-aos="fade-left"
        >
          <div className="hotelintro-text">
            <h2 className="intro-heading">Presidential Room</h2>
            <div className="intro-text text-muted">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                aliquid, est reiciendis repellat sapiente consequatur aperiam,
                ducimus, id minima eligendi officiis, qui expedita sint culpa
                illum magnam ipsam adipisci possimus? Sit aspernatur eaque id
                sunt fuga facere hic laudantium, aperiam!
              </p>
              <p>
                Provident dolor aperiam similique maiores quasi. Quo repudiandae
                fuga commodi itaque dolores accusamus, dolor esse adipisci
                labore harum blanditiis in totam ipsum vero necessitatibus
                incidunt reprehenderit, id iste quas, ab, non! Voluptates,
                reiciendis culpa iure deserunt voluptatum itaque. Quos, soluta.
              </p>
            </div>
            <div className="mt-5 btn">
              <button
                className="btn btn-danger rounded-pill px-4"
                style={{ letterSpacing: ".2rem", fontSize: ".9rem" }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 p-0" data-aos="fade">
          <img
            src="img/hero_2.jpg"
            alt
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
