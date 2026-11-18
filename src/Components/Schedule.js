import React from 'react';
import "../Styles/Schedule.css";
import {Link} from 'react-router-dom'
 
const Schedule = ({setLanguage}) => {
 
  const teachers = [
    { name: 'Jacob Jones', course: 'Technical English for Beginners', type: 'Beginner', progress: '21/23', pct: '94%', colorClass: 'bg-orange', typeClass: 'type-beginner' },
    { name: 'Kristin Watson', course: 'English punctuation made easy', type: 'Advanced', progress: '18/40', pct: '45%', colorClass: 'bg-green', typeClass: 'type-advanced' },
  ];
 
  const tasks = [
    { title: 'Repeat words', subtitle: '2 tasks', time: '12 m', icon: '↻', highlight: false },
    { title: 'Learn new words', subtitle: '6 tasks', time: '15 m', icon: '💡', highlight: false },
    { title: 'Train words', subtitle: '8 tasks', time: '0 m', icon: '🧩', highlight: true },
  ];
 
  return (
    <div className="dashboard-container">
 
      <h1 className="dashboard-greeting">Welcome back!</h1>
 
      <div className="dashboard-grid">
 
        <div className="left-column">
 
         <div className="card language-selector">
  <Link to="/Courses" className="lang-item active" onClick={() => setLanguage('English')}>🇬🇧 English</Link>
  <Link to="/Courses" className="lang-item" onClick={() => setLanguage('German')}>🇩🇪 German</Link>
  <Link to="/Courses" className="lang-item" onClick={() => setLanguage('Arabic')}>🇸🇦 Arabic</Link>
</div>
 
          <div className="middle-row">
 
          
            <div className="card box1">
              <h2>Self-study course</h2>
              <div className="course-card active-course">
                <div className="course-card-top">
                  <span className="badge new-badge">New</span>
                  <div className="icon-circle book-icon">📚</div>
                </div>
                <h3>Intermediate grammar</h3>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '40%' }}></div>
                  </div>
                  <div className="progress-text">
                    <span>Progress</span>
                    <span>8/20</span>
                  </div>
                </div>
              </div>
              <div className="course-card locked-course">
                <span>Pronunciation and intonation</span>
                <div className="icon-circle lock-icon">🔒</div>
              </div>
              <div className="course-card locked-course">
                <span>Listening comprehension</span>
                <div className="icon-circle lock-icon">🔒</div>
              </div>
            </div>
 
            {/* BOX 2: Level */}
            <div className="card box2">
              <h2>Level</h2>
              <div className="level-info">
                <span className="main-level">B1</span>
                <div className="test-date">
                  <span>Tested on</span>
                  <span>25 Sep 2024</span>
                </div>
              </div>
              <div className="test-grid">
                <div className="test-card">
                  <span className="test-title">Speaking test</span>
                  <div className="score-bar bg-light-green">
                    <div className="score-fill bg-green">B2</div>
                  </div>
                </div>
                <div className="test-card">
                  <span className="test-title">Core skill test</span>
                  <div className="score-bar bg-light-orange">
                    <div className="score-fill bg-orange">A2</div>
                  </div>
                </div>
                <div className="test-card">
                  <span className="test-title">Writing test</span>
                  <div className="score-bar bg-light-purple">
                    <div className="score-fill bg-purple">B1</div>
                  </div>
                </div>
                <div className="test-card dashed-border">
                  <div className="coming-soon-pill">✨ Coming soon</div>
                </div>
              </div>
            </div>
 
          </div>
 
          {/* Courses with a teacher */}
          <div className="card courses-teacher">
            <h2>Courses with a teacher</h2>
            <div className="table-header">
              <span>Mentor</span>
              <span>Course title</span>
              <span>Type</span>
              <span>Lessons progress</span>
            </div>
            <div className="teacher-list">
              {teachers.map((teacher, index) => (
                <div className="teacher-row" key={index}>
                  <span className="teacher-name">{teacher.name}</span>
                  <span className="teacher-course">{teacher.course}</span>
                  <span className={`teacher-type ${teacher.typeClass}`}>{teacher.type}</span>
                  <div className="teacher-progress">
                    <span className="progress-fraction">{teacher.progress}</span>
                    <span className={`progress-pct ${teacher.colorClass}`}>{teacher.pct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
        </div>
 
        {/* ================= RIGHT COLUMN ================= */}
        <div className="right-column">
 
          {/* BOX 3: Activity */}
          <div className="card box3">
            <h2>Activity</h2>
            <div className="activity-stats">
              <span className="activity-number">143</span>
              <div className="activity-label">
                <span>Days</span>
                <span>activity</span>
              </div>
            </div>
            <div className="activity-days">
              <div className="day-box active-day">⚡</div>
              <div className="day-box active-day">⚡</div>
              <div className="day-box active-day">⚡</div>
              <div className="day-box active-day">⚡</div>
              <div className="day-box inactive-day">
                <span className="orange-dot"></span>F
              </div>
              <div className="day-box inactive-day">S</div>
              <div className="day-box inactive-day">S</div>
            </div>
          </div>
 
          {/* Daily Tasks */}
          <div className="card daily-tasks">
            <h2>Daily tasks</h2>
            <div className="task-list">
              {tasks.map((task, index) => (
                <div className={`task-row ${task.highlight ? 'task-highlight' : ''}`} key={index}>
                  <div className="task-icon">{task.icon}</div>
                  <div className="task-details">
                    <span className="task-subtitle">{task.subtitle}</span>
                    <span className="task-title">{task.title}</span>
                  </div>
                  <div className="task-time">{task.time}</div>
                </div>
              ))}
            </div>
          </div>
 
          {/* Bottom Right Self-study promo */}
          <div className="card promo-card">
            <span className="promo-label">Self-study course</span>
            <h3>Intermediate grammar</h3>
            <div className="promo-tags">
              <span className="tag-advanced">Advanced</span>
              <span className="tag-video">Video</span>
            </div>
            <p className="promo-desc">What's the best way to treat the common cold?</p>
          </div>
 
        </div>
 
      </div>
    </div>
  );
}
 
export default Schedule;
 