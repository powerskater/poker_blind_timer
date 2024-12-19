import { useState } from "react";
import Level from "./Level";
import "./Levels.css";

function Levels() {
  const [levels, setLevels] = useState([{ id: 1, type: "level", levelNum: 1 }]);

  // Function to add a new level
  function addLevel() {
    setLevels((prevLevels) => {
      // Calculate the next level number by counting existing levels of type 'level'
      const nextLevelNum = prevLevels.filter((level) => level.type === "level").length + 1;

      return [
        ...prevLevels,
        { id: Date.now(), type: "level", levelNum: nextLevelNum },
      ];
    });
  }

  // Function to add a new break
  function addBreak() {
    setLevels((prevLevels) => [
      ...prevLevels,
      { id: Date.now(), type: "break" },
    ]);
  }

  // Function to remove a level and recalculate level numbers
  function removeLevel(id) {
    setLevels((prevLevels) => {
      // Filter out the level to be removed
      const updatedLevels = prevLevels.filter((level) => level.id !== id);

      // Recalculate levelNum for levels of type 'level'
      let levelCounter = 1;
      return updatedLevels.map((level) => {
        if (level.type === "level") {
          return { ...level, levelNum: levelCounter++ };
        }
        return level;
      });
    });
  }

  return (
    <>
      <a href="index.html">
        <button>Go Back</button>
      </a>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Small Blind</th>
            <th>Big Blind</th>
            <th>Ante</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {levels.map((level) => (
            <Level
              key={level.id}
              id={level.id}
              type={level.type}
              levelNum={level.levelNum}
              removeLevel={removeLevel}
            />
          ))}
        </tbody>
      </table>
      <button onClick={addLevel}>Add Level</button>
      <button onClick={addBreak}>Add Break</button>
    </>
  );
}

export default Levels;
