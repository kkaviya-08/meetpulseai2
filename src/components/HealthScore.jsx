import React from "react";

const HealthScore = ({ score }) => {
  return (
    <div className="score-card">

      <h2>Meeting Health Score</h2>

      <div
        className="score-ring"
        style={{ "--score-pct": `${score}%` }}
      >
        <span className="score-value">{score}%</span>
      </div>

      <p className="score-label">
        {score >= 70
          ? "Excellent Meeting Engagement"
          : score >= 40
            ? "Moderate Meeting Engagement"
            : "Needs Improvement"}
      </p>

    </div>
  );
};

export default HealthScore;