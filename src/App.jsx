import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Timer from './components/Timer';
import Levels from './components/Levels';

function App() {
  const [levels, setLevels] = useState([]);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  function handleLevelsUpdate(newLevels) {
    setLevels(newLevels);
    localStorage.setItem('levelsData', JSON.stringify(newLevels));
  }

  useEffect(() => {
    const savedLevels = JSON.parse(localStorage.getItem('levelsData'));
    if (savedLevels) {
      setLevels(savedLevels);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Timer duration={levels[0]?.duration * 60000 || 0} level={levels[currentLevelIndex]} />
              <br />
              <br />
              <Link to="/blinds">
                <button>Configure Blinds</button>
              </Link>
            </>
          }
        />
        <Route path="/blinds" element={<Levels onLevelsUpdate={handleLevelsUpdate} />} />
      </Routes>
    </>
  );
}

export default App;
