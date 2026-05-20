// src/components/MeetingForm.jsx

import React, { useState } from "react";

const MeetingForm = ({ addTask }) => {

  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [status, setStatus] = useState("Pending");

  const [engagement, setEngagement] =
    useState(70);

  const [participation, setParticipation] =
    useState(70);

  const [interruptions, setInterruptions] =
    useState(2);

  const [clarity, setClarity] =
    useState(70);

  const [duration, setDuration] =
    useState(30);

  

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      title.trim() === "" ||
      speaker.trim() === ""
    ) {

      alert("Please fill all fields");

      return;
    }

    if (title.length < 3) {

      alert(
        "Meeting topic must contain at least 3 characters"
      );

      return;
    }

    const newTask = {

      id: Date.now(),

      title,

      speaker,

      status,

      engagement,

      participation,

      interruptions,

      clarity,

      duration

    };

    addTask(newTask);

    /* RESET */

    setTitle("");
    setSpeaker("");
    setStatus("Pending");

    setEngagement(70);
    setParticipation(70);
    setInterruptions(2);
    setClarity(70);
    setDuration(30);

  };

  return (

    <div className="meeting-behaviour-section">

      {/* LEFT SIDE */}

      <div className="behaviour-info">

        <div className="info-card">

          <h2>
            AI Meeting Behavior Analysis
          </h2>

          <p>

            MeetPulse AI analyzes
            communication patterns,
            engagement levels,
            participation balance,
            interruptions,
            and decision clarity
            during meetings.

          </p>

        </div>

        <div className="mini-info-grid">

          <div className="mini-card">

            <h3>📊 Participation Tracking</h3>

            <p>
              Detects dominance and
              silent participants.
            </p>

          </div>

          <div className="mini-card">

            <h3>🎯 Engagement Analysis</h3>

            <p>
              Measures focus,
              collaboration,
              and interaction quality.
            </p>

          </div>

          <div className="mini-card">

            <h3>💡 Decision Clarity</h3>

            <p>
              Identifies weak commitments
              and unclear tasks.
            </p>

          </div>

          <div className="mini-card">

            <h3>🧠 Behavior Monitoring</h3>

            <p>
              Tracks interruptions,
              fatigue,
              and communication flow.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="meeting-form-box">

        <form
          className="form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Meeting Topic"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Speaker Name"
            value={speaker}
            onChange={(e) =>
              setSpeaker(e.target.value)
            }
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option>
              Pending
            </option>

            <option>
              Completed
            </option>

          </select>

          {/* ENGAGEMENT */}

          <div className="slider-box">

            <label>
              Engagement Level :
              {engagement}%
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={engagement}
              onChange={(e) =>
                setEngagement(e.target.value)
              }
            />

          </div>

          {/* PARTICIPATION */}

          <div className="slider-box">

            <label>
              Participation Balance :
              {participation}%
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={participation}
              onChange={(e) =>
                setParticipation(e.target.value)
              }
            />

          </div>

          {/* CLARITY */}

          <div className="slider-box">

            <label>
              Decision Clarity :
              {clarity}%
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={clarity}
              onChange={(e) =>
                setClarity(e.target.value)
              }
            />

          </div>

          <input
            type="number"
            min="0"
            placeholder="Meeting Duration (Minutes)"
            value={duration}
            onChange={(e) =>
            setDuration(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Meeting Duration (Minutes)"
            value={duration}
            onChange={(e) =>
              setDuration(e.target.value)
            }
          />

          <button type="submit">

            Analyze Meeting

          </button>

        </form>

      </div>

    </div>
  );
};

export default MeetingForm;