export default function Testimonials() {
  return (
    <section className="py-5">
      <div className="container px-xl-5 py-5">
        <div className="row">
          <div className="text-center mb-5">
            <h2 className="testimonial-heading">Testimonial</h2>
          </div>
          <div className="col-md-4 col-12">
            <div className="text-center">
              <img
                src="img/person_1.jpg"
                alt
                className="img-fluid rounded-circle w-25 my-3"
              />
              <p className="testimonial-text p-0">
                “Et quidem, impedit eum fugiat excepturi iste aliquid suscipit,
                tempore, delectus rem soluta voluptatem distinctio sed dolores,
                magni fugit nemo cum expedita. Totam a accusantium sunt aut
                autem placeat officia.”
              </p>
              <em style={{ color: "#6c757d" }}>— Jean Smith</em>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="text-center">
              <img
                src="img/person_2.jpg"
                alt
                className="img-fluid rounded-circle w-25 my-3"
              />
              <p className="testimonial-text p-0">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim
                facilis laborum voluptate id porro, culpa maiores quis,
                blanditiis laboriosam alias”
              </p>
              <em style={{ color: "#6c757d" }}>— John Doe</em>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="text-center">
              <img
                src="img/person_3.jpg"
                alt
                className="img-fluid rounded-circle w-25 my-3"
              />
              <p className="testimonial-text p-0">
                “Nostrum, alias, provident magnam sit blanditiis laboriosam unde
                quaerat, at ipsam, ratione maiores saepe nisi modi corporis
                quas! Beatae quam, quod aspernatur debitis nesciunt quasi porro
                ea iste nobis aliquid perspiciatis nostrum culpa impedit aut,
                iure blanditiis itaque similique sunt!”
              </p>
              <em style={{ color: "#6c757d" }}>— john Doe</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
