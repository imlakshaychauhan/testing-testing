import "./styles/kpi.css";

const Kpi = () => {
  return (
    <div className="kpi-div">
      <h1 className="t-heading">KPIs</h1>
      <div className="parent-div">
        <div className="kpi">
          <p className="kpi-p">
            <span className="kpi-heading"> 34</span>min
          </p>
          <p className="kpi-desc">Avg. Engagement Time</p>
        </div>
        <div className="v-grey-line"></div>
        <div className="kpi">
          <p className="kpi-p">
            <span className="kpi-heading"> 1300</span>+
          </p>
          <p className="kpi-desc">Installs</p>
        </div>
        <div className="v-grey-line"></div>
        <div className="kpi">
          <p className="kpi-p">
            <span className="kpi-heading"> 650</span>+
          </p>
          <p className="kpi-desc">Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default Kpi;
