import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import NavBar from './Components/NavBar';
import BeginnerG from './German/BeginnerG';
import IntermediateG from './German/IntermediateG';
import BusinessG from './German/BusinessG';
import GermanQuiz from './German/GermanQuiz';
import BeginnerE from './English/BeginnerE';
import IntermediateE from './English/IntermediateE';
import BusinessE from './English/BusinessE';
import EnglishQuiz from './English/EnglishQuiz';
import BeginnerA from './Arabic/BeginnerA';
import IntermediateA from './Arabic/IntermediateA';
import BusinessA from './Arabic/BusinessA';
import ArabicQuiz from './Arabic/ArabicQuiz';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [language, setLanguage] = useState('English');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <NavBar language={language} setLanguage={setLanguage} />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Dashboard" element={<Dashboard language={language} setLanguage={setLanguage} />} />
        <Route path="/Courses" element={<Courses language={language} />} />
        <Route path="/Quiz" element={<Quiz language={language} />} />
        <Route path="/Profile" element={<Profile language={language} />} />
        <Route path="/profile" element={<Profile language={language} />} />
        <Route path="/BeginnerG" element={<BeginnerG />} />
        <Route path="/IntermediateG" element={<IntermediateG />} />
        <Route path="/BusinessG" element={<BusinessG />} />
        <Route path="/GermanQuiz" element={<GermanQuiz />} />
        <Route path="/BeginnerE" element={<BeginnerE />} />
        <Route path="/IntermediateE" element={<IntermediateE />} />
        <Route path="/BusinessE" element={<BusinessE />} />
        <Route path="/EnglishQuiz" element={<EnglishQuiz />} />
        <Route path="/BeginnerA" element={<BeginnerA />} />
        <Route path="/IntermediateA" element={<IntermediateA />} />
        <Route path="/BusinessA" element={<BusinessA />} />
        <Route path="/ArabicQuiz" element={<ArabicQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;