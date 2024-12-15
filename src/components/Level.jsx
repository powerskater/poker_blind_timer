import image from "./files/red_x.png";

function Level({ id, levelNum, type, removeLevel }) {
  return (
    <>
      {type === "level" ? (
        <tr>
          <td>{levelNum}</td>
          <td><input /></td>
          <td><input /></td>
          <td><input /></td>
          <td><input /></td>
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
