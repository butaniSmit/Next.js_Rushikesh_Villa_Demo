export default function BlogSection() {
  return (
    <section className="blog-bg-img">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <div className="blog-details">
              <h2 className="blog-heading">Recent Blog Post</h2>
              <p className="blog-text text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim
                facilis laborum voluptate id porro, culpa maiores quis,
                blanditiis laboriosam alias. Sed.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5 pb-5">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog-card" data-aos="fade-left">
              <div className="card border-0 rounded-0">
                <img src="img/img_1.jpg" className="rounded-0" />
                <div className="card-body px-xl-5 py-xl-4">
                  <span style={{ color: "#ced4da" }}>FEBRUARY 26, 2018</span>
                  <h3
                    className="pt-3"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    Five Reasons to Stay at Villa Resort
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog-card pt-md-0 pt-5" data-aos="fade-up">
              <div className="card border-0 rounded-0">
                <img src="img/img_2.jpg" className="rounded-0" />
                <div className="card-body px-xl-5 py-xl-4">
                  <span style={{ color: "#ced4da" }}>FEBRUARY 26, 2018</span>
                  <h3
                    className="pt-3"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    Five Reasons to Stay at Villa Resort
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog-card pt-lg-0 pt-5" data-aos="fade-right">
              <div className="card border-0 rounded-0">
                <img src="img/img_3.jpg" className="rounded-0" />
                <div className="card-body px-xl-5 py-xl-4">
                  <span style={{ color: "#ced4da" }}>FEBRUARY 26, 2018</span>
                  <h3
                    className="pt-3"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    Five Reasons to Stay at Villa Resort
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
