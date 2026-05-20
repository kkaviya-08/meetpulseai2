import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">
            <h2>MeetPulse <span>AI</span></h2>
            <p>
              AI Powered Meeting Psychology Intelligence System.
              Transform every meeting into actionable insights
              with behavioral analytics.
            </p>
          </div>

          <div className="footer-col">
            <h3>Platform</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Features</h3>
            <ul>
              <li><a href="#">Engagement Analysis</a></li>
              <li><a href="#">Task Extraction</a></li>
              <li><a href="#">Behavior Analytics</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 MeetPulse AI | Smart Meeting Analytics Platform
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;