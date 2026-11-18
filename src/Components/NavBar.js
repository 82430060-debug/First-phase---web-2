import React from 'react';
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ language, setLanguage, isInsideHero = false }) => {
  const quizPath = 
     language === 'German'
      ? '/GermanQuiz'
      : language === 'Arabic'
      ? '/ArabicQuiz'
      : '/EnglishQuiz';

  return (
    <div className={isInsideHero ? 'topbar' : 'navbar-wrapper topbar'}>
      <Link to="/Dashboard" className="logo">
        <span>italki</span>
      </Link>

      <nav className="nav">
        <Link to="/Dashboard" className="nav__link">Dashboard</Link>
        <Link to="/Courses" className="nav__link">Courses</Link>
        <Link to={quizPath} className="nav__link">Quiz</Link>
        <Link to="/profile" className="nav__link">Profile</Link>
      </nav>

      <div className="topbar__right">
        <div className="ui-lang">
          <button
            type="button"
            className="ui-lang__btn"
            aria-pressed={language === 'English'}
            onClick={() => setLanguage('English')}
          >
            EN
          </button>
          <button
            type="button"
            className="ui-lang__btn"
            aria-pressed={language === 'Arabic'}
            onClick={() => setLanguage('Arabic')}
          >
            AR
          </button>
          <button
            type="button"
            className="ui-lang__btn"
            aria-pressed={language === 'German'}
            onClick={() => setLanguage('German')}
          >
            DE
          </button>
        </div>

        <Link to="/Profile" className="avatar">
          FM
        </Link>
      </div>
    </div>
  );
};

export default NavBar;