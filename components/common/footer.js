export default function Footer() {
  return (
    <>
      <section className="py-5 bg-black">
        <div className="container px-xl-5 my-md-5">
          <div className="row" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            <div className="col-md-3">
              <div className="mb-3">About Us</div>
              <div className="mb-3">Terms &amp; Conditions</div>
              <div className="mb-3">Privacy Policy</div>
              <div className="mb-3">Help</div>
              <div className="mb-3">Rooms</div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">Our Location</div>
              <div className="mb-3">The Hosts</div>
              <div className="mb-3">About</div>
              <div className="mb-3">Contact</div>
              <div className="mb-3">Restaurant</div>
            </div>
            <div className="col-md-3">
              <em className="mb-3  text-white">Address:</em>
              <div className="mb-3">
                98 West 21th Street, Suite 721 New York NY 10016
              </div>
              <em className="mb-3  text-white">Phone:</em>
              <div className="mb-3">(+1) 435 3533</div>
              <em className="mb-3  text-white">Email:</em>
              <div className="mb-3">info@yourdomain.com</div>
            </div>
            <div className="col-md-3">
              <div className="mb-3 text-white">Sign up for our newsletter</div>
              <form action="#" className="position-relative">
                <input
                  type="email"
                  className="form-control bg-none bg-black text-white"
                  placeholder="Your Email..."
                />
                <hr />
                <button type="submit" className="btn telegram-btn">
                  <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
          <hr style={{ color: "rgba(255, 255, 255, 0.7)" }} />
          <div className="row pt-5">
            <div className="col-md-6 text-start text-secondary">
              <span>Copyright</span>
              <span>©</span>
              <span id="year" />
              <span>All rights reserved | This template is made with </span>
              <i className="fa fa-heart" aria-hidden="true" /> by
              <span>Desilo</span>
            </div>
            <div className="col-md-6 text-end text-secondary mt-4 mt-md-0">
              <i className="fs-4 fa-brands fa-instagram" />
              <i className="fs-4 fa-brands fa-facebook px-3" />
              <i className="fs-4 fa-brands fa-twitter" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
