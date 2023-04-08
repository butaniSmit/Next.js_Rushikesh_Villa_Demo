export default function ContectSection() {
  return (
    <section className="bg-danger py-5">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-7 col-12">
            <form
              action="#"
              className="bg-white p-md-5 p-4 mb-5 position-relative"
              style={{ marginTop: "-150px" }}
              data-aos="fade-right"
            >
              <div className="row mb-3">
                <div className="col-md-6 form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="message" id="message">
                    Write Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    cols={30}
                    rows={8}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="btn btn-danger rounded-pill py-2 px-4">
                    Send Message
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5 col-12">
            <div className="px-md-5 text-white" data-aos="fade-left">
              <p>
                <span className="d-block" style={{ color: "#f2a3a3" }}>
                  ADDRESS:
                </span>
                <span
                  className="fs-3"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {" "}
                  98 West 21th Street, Suite 721 New York NY 10016
                </span>
              </p>
              <p>
                <span className="d-block" style={{ color: "#f2a3a3" }}>
                  PHONE:
                </span>
                <span
                  className="fs-3"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {" "}
                  (+1) 435 3533
                </span>
              </p>
              <p>
                <span className="d-block" style={{ color: "#f2a3a3" }}>
                  EMAIL:
                </span>
                <span
                  className="fs-3"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {" "}
                  info@yourdomain.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
