function Contact() {
  return (
    <main className="contact-page">

      <div className="contact-container">

        <div className="section-heading">
          <p>WE'RE HERE TO HELP</p>
          <h1>Contact Us</h1>
        </div>

        <div className="contact-layout">

          <div className="contact-info">

            <h2>Get in Touch</h2>

            <p>
              Have a question about a product, order, or
              exchange? We'd love to hear from you.
            </p>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="contact-item">
              <h3>Email</h3>
              <p>contact@devclothing.com</p>
            </div>

            <div className="contact-item">
              <h3>Business Hours</h3>
              <p>Monday – Saturday</p>
              <p>10:00 AM – 7:00 PM</p>
            </div>

          </div>

          <form className="contact-form">

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                placeholder="How can we help you?"
                rows="6"
              ></textarea>
            </div>

            <button
              type="button"
              className="contact-submit-button"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}

export default Contact;