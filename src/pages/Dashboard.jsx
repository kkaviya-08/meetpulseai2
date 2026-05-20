// src/pages/Dashboard.jsx

import {
  useState,
  useEffect
} from "react";

import MeetingForm from "../components/MeetingForm";
import MeetingCard from "../components/MeetingCard";
import HealthScore from "../components/HealthScore";

const Dashboard = () => {

  

  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("meetingTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });

  const [productivity, setProductivity] =
    useState(0);

  const [participation, setParticipation] =
    useState(0);

  const [healthScore, setHealthScore] =
    useState(0);

  /* ================= SAVE TO LOCAL STORAGE ================= */

  useEffect(() => {

    localStorage.setItem(
      "meetingTasks",
      JSON.stringify(tasks)
    );

    /* ================= PRODUCTIVITY ================= */

    if (tasks.length > 0) {

      const productivityScore =
        Math.round(

          tasks.reduce(
            (acc, task) =>

              acc +

              (
                Number(task.engagement) +
                Number(task.clarity)
              ) / 2,

            0
          ) / tasks.length

        );

      setProductivity(productivityScore);

      /* ================= PARTICIPATION ================= */

      const participationScore =
        Math.round(

          tasks.reduce(
            (acc, task) =>

              acc +

              (
                Number(task.participation) -
                Number(task.interruptions * 5)
              ),

            0
          ) / tasks.length

        );

      setParticipation(participationScore);

      /* ================= HEALTH SCORE ================= */

      const overallHealth =
        Math.round(
          (
            productivityScore +
            participationScore
          ) / 2
        );

      setHealthScore(overallHealth);

    }

    else {

      setProductivity(0);

      setParticipation(0);

      setHealthScore(0);

    }

  }, [tasks]);

  /* ================= ADD TASK ================= */

  const addTask = (task) => {

    setTasks([...tasks, task]);

  };

  /* ================= DELETE TASK ================= */

  const deleteTask = (id) => {

    const updatedTasks =
      tasks.filter(
        (task) => task.id !== id
      );

    setTasks(updatedTasks);

  };

  return (

    <div className="dashboard">

      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="section-header">

          <p>DASHBOARD</p>

          <h1>
            Meeting Intelligence Dashboard
          </h1>

        </div>

        {/* ================= TOP STATS ================= */}

        <div className="stats-grid">

          <div className="stat-card">

            <h2>{tasks.length}</h2>

            <p>Total Meetings</p>

          </div>

          <div className="stat-card">

            <h2>{productivity}%</h2>

            <p>Productivity Score</p>

          </div>

          <div className="stat-card">

            <h2>{participation}%</h2>

            <p>Participation Balance</p>

          </div>

          <div className="stat-card">

            <h2>{healthScore}%</h2>

            <p>Meeting Health</p>

          </div>

        </div>

        {/* ================= HEALTH SCORE ================= */}

        <HealthScore score={healthScore} />

        {/* ================= MEETING FORM ================= */}

        <div className="dashboard-section">

          <div className="section-header">

            <p>ADD MEETING</p>

            <h1>
              Analyze Meeting Behavior
            </h1>

          </div>

          <MeetingForm addTask={addTask} />

        </div>

        {/* ================= TASK LIST ================= */}

        <div className="dashboard-section">

          <div className="section-header">

            <p>MEETING TASKS</p>

            <h1>
              AI Generated Meeting Insights
            </h1>

          </div>

          <div className="task-grid">

            {

              tasks.length > 0

                ?

                tasks.map((task) => (

                  <MeetingCard
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                  />

                ))

                :

                <div className="empty-box">

                  <h2>
                    No Meetings Added Yet
                  </h2>

                  <p>
                    Add meetings to generate
                    productivity analysis,
                    participation balance,
                    engagement reports,
                    and psychological insights.
                  </p>

                </div>

            }

          </div>

        </div>

        {/* ================= ANALYTICS ================= */}

        <div className="dashboard-section">

          <div className="section-header">

            <p>LIVE ANALYTICS</p>

            <h1>
              Meeting Performance Metrics
            </h1>

          </div>

          <div className="analytics-grid">

            {/* PRODUCTIVITY */}

            <div className="analytics-card">

              <h2>
                Productivity Analysis
              </h2>

              <div className="progress">

                <div
                  className="fill"
                  style={{
                    width: `${productivity}%`
                  }}
                ></div>

              </div>

              <span>

                AI analyzes engagement,
                decision clarity,
                and completion patterns.

              </span>

            </div>

            {/* PARTICIPATION */}

            <div className="analytics-card">

              <h2>
                Participation Balance
              </h2>

              <div className="progress">

                <div
                  className="fill"
                  style={{
                    width: `${participation}%`
                  }}
                ></div>

              </div>

              <span>

                Detects dominance,
                interruptions,
                and communication balance.

              </span>

            </div>

            {/* HEALTH */}

            <div className="analytics-card">

              <h2>
                Meeting Health Score
              </h2>

              <div className="progress">

                <div
                  className="fill"
                  style={{
                    width: `${healthScore}%`
                  }}
                ></div>

              </div>

              <span>

                Combined AI score based on
                productivity,
                engagement,
                and collaboration quality.

              </span>

            </div>

          </div>

        </div>

        {/* ================= TIMELINE ================= */}

        <div className="dashboard-section">

          <div className="section-header">

            <p>ACTIVITY TIMELINE</p>

            <h1>
              Meeting Workflow
            </h1>

          </div>

          <div className="workflow-grid">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <h2>
                Meeting Started
              </h2>

              <p>
                AI captures meeting interaction
                and speaker communication.
              </p>

            </div>

            <div className="step">

              <div className="step-number">
                02
              </div>

              <h2>
                AI Processing
              </h2>

              <p>
                NLP and behavioral analytics
                process engagement patterns.
              </p>

            </div>

            <div className="step">

              <div className="step-number">
                03
              </div>

              <h2>
                Report Generation
              </h2>

              <p>
                Meeting health reports,
                productivity scores,
                and insights are generated.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;