import logo from "../assets/assets/logo.png";
import "./styles/footer.css";
import call from "../assets/assets/call.png";
import mail from "../assets/assets/mail.png";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-left-div">
        <img src={logo} width={100} />
        <div className="call">
          <img src={call} width={25} />
          <p>+91-9999 9999</p>
        </div>
        <div className="mail">
          <img src={mail} width={25} />
          <p>test@mail.com</p>
        </div>
      </div>
      <div className="footer-right-div">
        <p>Sign Up</p>
        <span>
          get a chance to use advanced form of virtual education for free!
        </span>
        <button>sign up now</button>
      </div>
    </div>
  );
};

export default Footer;
