import { useState } from "react";
import image from "./files/red_x.png";

function Level({ id, levelNum, type, removeLevel, updateLevel, smallBlind: initialSmallBlind, bigBlind: initialBigBlind, ante: initialAnte, duration: initialDuration }) {
    const [smallBlind, setSmallBlind] = useState(initialSmallBlind || "")
    const [bigBlind, setBigBlind] = useState(initialBigBlind || "")
    const [ante, setAnte] = useState(initialAnte || "")
    const [duration, setDuration] = useState(initialDuration || "")

    function handleUpdate() {
        updateLevel(id, { smallBlind, bigBlind, ante, duration });
    }

  return (
    <>
      {type === "level" ? (
        <tr>
          <td>{levelNum}</td>
          <td><input value={smallBlind} onChange={(e) => setSmallBlind(e.target.value)} onBlur={handleUpdate} /></td>
          <td><input value={bigBlind} onChange={(e) => setBigBlind(e.target.value)} onBlur={handleUpdate} /></td>
          <td><input value={ante} onChange={(e) => setAnte(e.target.value)} onBlur={handleUpdate} /></td>
          <td><input value={duration} onChange={(e) => setDuration(e.target.value)} onBlur={handleUpdate} /></td>
          <td id="x">
            <img src={image} onClick={() => removeLevel(id)} alt="red x" />
          </td>
        </tr>
      ) : (
        <tr>
          <td id="break" colSpan={5}>
            Break for <input /> minutes
          </td>
          <td id="x">
            <img src={image} onClick={() => removeLevel(id)} alt="red x" />
          </td>
        </tr>
      )}
    </>
  );
}

export default Level;
