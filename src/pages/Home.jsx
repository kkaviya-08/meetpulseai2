import heroImg from "../assets/hero-meeting.png";
import dashboardImg from "../assets/dashboard.png";
import engagementImg from "../assets/engagement.png";
import teamworkImg from "../assets/teamwork.jpg";
import fatigueImg from "../assets/fatigue.png";
import tasksImg from "../assets/tasks.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      {/* ═══════════════════════ HERO ═══════════════════════ */}

      <div className="container">
        <section className="hero">

          <div className="hero-left">

            <div className="tag">
              AI Powered Meeting Intelligence
            </div>

            <h1>
              Transform Meetings Into
            </h1>
            <h1><span> Smart Decisions</span>
            </h1>

            <p>
              MeetPulse AI analyzes meeting behavior,
              engagement, communication balance,
              decision quality, and productivity using
              artificial intelligence and behavioral analytics.
            </p>

            <div className="hero-buttons">

              <Link to="/dashboard" className="primary-btn">
              Explore Dashboard
              </Link>

              <Link to="/reports" className="secondary-btn">
              Live Demo
              </Link>

            </div>

          </div>

          <div className="hero-right">
            <div className="hero-image-wrapper">
              <div className="image-card">
                <img src={heroImg} alt="MeetPulse AI Dashboard" />
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* ═══════════════════════ STATS ═══════════════════════ */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-card">
              <h2>92%</h2>
              <p>Engagement Accuracy</p>
            </div>

            <div className="stat-card">
              <h2>40%</h2>
              <p>Meeting Time Saved</p>
            </div>

            <div className="stat-card">
              <h2>85%</h2>
              <p>Task Detection Accuracy</p>
            </div>

            <div className="stat-card">
              <h2>70%</h2>
              <p>Improved Team Participation</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES ═══════════════════════ */}

      <section className="section">
        <div className="container">

          <div className="section-header">
            <p>FEATURES</p>
            <h1>AI Meeting Intelligence</h1>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <img src={engagementImg} alt="Participation Analysis" />
              <div className="card-content">
                <h2><span>Participation Analysis</span></h2>
                <p>
                  Detects dominance imbalance,
                  silent participants, and communication gaps.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src={fatigueImg} alt="Psychological Safety" />
              <div className="card-content">
                <h2><span>Psychological Safety</span></h2>
                <p>
                  Identifies fear of speaking,
                  hesitation, and low collaboration confidence.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src={tasksImg} alt="Task Extraction" />
              <div className="card-content">
                <h2><span>Task Extraction</span></h2>
                <p>
                  Automatically extracts tasks,
                  deadlines, responsibilities,
                  and pending action items.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src={dashboardImg} alt="Decision Clarity" />
              <div className="card-content">
                <h2><span>Decision Clarity</span></h2>
                <p>
                  Detects vague commitments,
                  unclear decisions,
                  and weak meeting conclusions.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src={teamworkImg} alt="Behavior Analytics" />
              <div className="card-content">
                <h2><span>Behavior Analytics</span></h2>
                <p>
                  Understands interruption patterns,
                  engagement drop,
                  and communication flow.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src={dashboardImg} alt="AI Meeting Reports" />
              <div className="card-content">
                <h2><span>AI Meeting Reports</span></h2>
                <p>
                  Generates analytics dashboards,
                  summaries,
                  and productivity insights.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════ ANALYTICS ═══════════════════════ */}

      <section className="section">
        <div className="container">

          <div className="section-header">
            <p>LIVE ANALYTICS</p>
            <h1>Meeting Performance Metrics</h1>
          </div>

          <div className="analytics-grid">

            <div className="analytics-card">
              <h2>Engagement Level</h2>
              <div className="progress">
                <div className="fill fill1"></div>
              </div>
              <span>78% Active Interaction</span>
            </div>

            <div className="analytics-card">
              <h2>Decision Clarity</h2>
              <div className="progress">
                <div className="fill fill2"></div>
              </div>
              <span>82% Clear Outcomes</span>
            </div>

            <div className="analytics-card">
              <h2>Productivity Score</h2>
              <div className="progress">
                <div className="fill fill3"></div>
              </div>
              <span>90% Productive Discussion</span>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════ WORKFLOW ═══════════════════════ */}

      <section className="section">
        <div className="container">

          <div className="section-header">
            <p>WORKFLOW</p>
            <h1>How MeetPulse AI Works</h1>
          </div>

          <div className="workflow-grid">

            <div className="step">
              <div className="step-number">01</div>
              <h2>Meeting Capture</h2>
              <p>
                Meeting audio and transcripts are collected
                and prepared for AI analysis.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <h2>AI Processing</h2>
              <p>
                Natural language processing and
                behavioral analytics analyze the meeting.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <h2>Smart Insights</h2>
              <p>
                Productivity reports, engagement scores,
                and task recommendations are generated.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;