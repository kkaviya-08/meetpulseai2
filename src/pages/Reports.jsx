import React from "react";

const Reports = () => {

  const tasks =
    JSON.parse(
      localStorage.getItem("meetingTasks")
    ) || [];

  return (

    <div className="reports">
      <div className="container">

        <div className="section-header">

          <p>AI REPORTS</p>

          <h1>
            Meeting Intelligence Reports
          </h1>

        </div>

        <div className="report-grid">

          {tasks.length > 0 ? (

            tasks.map((task) => (

              <div
                className="report-card"
                key={task.id}
              >

                <h2>{task.title}</h2>

                <p>

                  <strong>Speaker:</strong>{" "}

                  {task.speaker}

                </p>

                <p>

                  <strong>Engagement:</strong>{" "}

                  {task.engagement}%

                </p>

                <p>

                  <strong>Participation:</strong>{" "}

                  {task.participation}%

                </p>

                <p>

                  <strong>Decision Clarity:</strong>{" "}

                  {task.clarity}%

                </p>

                <p>

                  <strong>Interruptions:</strong>{" "}

                  {task.interruptions}

                </p>

                <p>

                  <strong>Duration:</strong>{" "}

                  {task.duration} mins

                </p>

                {/* AI ANALYSIS */}

                <div className="ai-analysis">

                  {

                    task.participation < 50

                      ?

                      <p className="ai-badge-warning">
                        ⚠ Low participation detected.
                        Some members may not be actively involved.
                      </p>

                      :

                      <p className="ai-badge-success">
                        ✅ Healthy participation balance observed.
                      </p>

                  }

                  {

                    task.interruptions > 5

                      ?

                      <p className="ai-badge-warning">
                        ⚠ High interruption rate detected.
                      </p>

                      :

                      <p className="ai-badge-success">
                        ✅ Communication flow is stable.
                      </p>

                  }

                  {

                    task.clarity < 60

                      ?

                      <p className="ai-badge-warning">
                        ⚠ Weak decision clarity detected.
                      </p>

                      :

                      <p className="ai-badge-success">
                        ✅ Strong decision clarity observed.
                      </p>

                  }

                </div>

              </div>

            ))

          ) : (

            <div className="empty-box">

              <h2>
                No Reports Generated Yet
              </h2>

              <p>
                Add meetings in dashboard
                to generate AI reports.
              </p>

            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default Reports;