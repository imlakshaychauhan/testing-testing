import "./styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-div">
      <div className="pricing-heading">
        <p className="p-first-heading">Contact Us</p>
        <p className="p-second-heading">How can we help you</p>
        <p className="short-note">
          Have a question, or just want to say Hi 👋 Fill in the form below
        </p>
      </div>
      <div className="parent-contact-form">
      <div className="contact-form">
        <div>
          <div className="name">
            <span>Your name</span>
            <input placeholder="Name" />
          </div>
          <div className="message">
            <span>Your message</span>
            <input placeholder="Message..." />
          </div>
        </div>
        <div className="email">
          <span>Your email</span>
          <input placeholder="Email Address..." />
        </div>
            <button>Submit</button>
      </div>
    </div>
      </div>
  );
};

export default Contact;
