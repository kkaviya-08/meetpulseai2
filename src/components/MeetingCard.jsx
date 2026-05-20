const MeetingCard = ({
  task,
  deleteTask
}) => {

  return (

    <div className="task-card">

      <h2>{task.title}</h2>

      <div className="task-meta">

        <p>
          <strong>Speaker:</strong>{" "}
          {task.speaker}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span className={`status-badge ${task.status.toLowerCase()}`}>
            {task.status}
          </span>
        </p>

      </div>

      {/* Metric Bars */}
      <div className="metric-row">
        <span>Engagement</span>
        <span className="metric-value">{task.engagement}%</span>
      </div>
      <div className="mini-bar">
        <div className="mini-fill" style={{ width: `${task.engagement}%` }}></div>
      </div>

      <div className="metric-row">
        <span>Participation</span>
        <span className="metric-value">{task.participation}%</span>
      </div>
      <div className="mini-bar">
        <div className="mini-fill" style={{ width: `${task.participation}%` }}></div>
      </div>

      <div className="metric-row">
        <span>Decision Clarity</span>
        <span className="metric-value">{task.clarity}%</span>
      </div>
      <div className="mini-bar">
        <div className="mini-fill" style={{ width: `${task.clarity}%` }}></div>
      </div>

      <div className="metric-row">
        <span>Interruptions</span>
        <span className="metric-value">{task.interruptions}</span>
      </div>

      <div className="metric-row">
        <span>Duration</span>
        <span className="metric-value">{task.duration} min</span>
      </div>

      <button
        onClick={() =>
          deleteTask(task.id)
        }
      >
        Delete Task
      </button>

    </div>
  );
};

export default MeetingCard;