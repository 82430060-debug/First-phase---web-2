import React from 'react';
import Schedule from '../Components/Schedule';

function Dashboard({ language, setLanguage }) {
  return (
    <div>
      <Schedule setLanguage={setLanguage} />
    </div>
  );
}

export default Dashboard;