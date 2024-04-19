import "./styles/pricing.css";
import tickMark from "../assets/assets/tickmark.png";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-heading">
        <p className="p-first-heading">The Pricing</p>
        <p className="p-second-heading">Perfect plans for you!</p>
      </div>
      <div className="pricing-cards">
        {/* basic */}
        <div className="pricing-card">
          <div className="card-title">
            <p>Basic</p>
            <span>For getting started</span>
          </div>
          <div className="grey-line"></div>
          <p className="price-p">$ <p className="price">499</p>/mo</p>
          <div className="button-div">
          <button>Buy Now</button>
          </div>
          <div className="features">
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Smart Lectures</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Upto 30 Custom 3D models!</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Upto 100 Lectures</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>24/7 Customer Support</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
        {/* pro */}
        <div className="pro-card">
        <div className="card-title">
            <p>Pro</p>
            <span>For innovative teachers looking to make their classes</span>
          </div>
          <div className="grey-line"></div>
          <p className="price-p">$ <p className="price">5999</p>/year</p>
          <div className="button-div">
          <button>Buy Now</button>
          </div>
          <div className="features">
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Smart Lectures</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Upto 30 Custom 3D models!</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Upto 100 Lectures</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>24/7 Customer Support</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
        {/* school */}
        <div className="pricing-card">
          <div className="card-title">
            <p>Schools</p>
            <span>A flexible plan for schools and educational organisations</span>
          </div>
          <div className="grey-line"></div>
          <p className="price">Custom</p>
          <div className="button-div">
          <button>Buy Now</button>
          </div>
          <div className="features">
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Smart Lectures</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Upto 30 Custom 3D models!</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>Upto 100 Lectures</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>24/7 Customer Support</p>
            </div>
            <div className="key-points">
              <img src={tickMark} width={20} />
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
