import { useState } from "react";
import Level from "./Level";
import './Levels.css'

let numLevels = 1;

function Levels() {
  const [levels, setLevels] = useState([
    { id: 1, type: "level", levelNum: 1 }
  ]);

  
  function addLevel() {
    numLevels++;
    setLevels((prevLevels) => [
      ...prevLevels,
      { id: numLevels, type: "level", levelNum: numLevels }
    ]);
  }

  
  function addBreak() {
    numLevels++
    setLevels((prevLevels) => [
      ...prevLevels,
      { id: numLevels, type: "break", levelNum: numLevels }
    ]);
  }

  
  function removeLevel(id) {
    numLevels--
    setLevels((prevLevels) => prevLevels.filter((level) => level.id !== id));
  }

  return (
    <>
    <a href='index.html'><button>Go Back</button></a>
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
