import React, { useState } from "react";
// import AddButton from './AddButton'
// import ColorSelect from './ColorSelect'
import { useDispatch } from "react-redux";
import { addNote } from "../redux/todos/notesSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { nanoid } from "nanoid";
import mark from '../mark.png'



function NoteContainer() {
  const [isActivePink, setActivePink] = useState(false);
  const [isActiveMediumPurple, setActiveMediumPurple] = useState(false);
  const [isActiveGold, setActiveGold] = useState(false);
  const [isActiveDeepSkyBlue, setActiveDeepSkyBlue] = useState(false);
  const [isActiveDarkSeaGreen, setActiveDarkSeaGreen] = useState(false);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("gold");

  const items = useSelector((state) => state.notes.items);

  const id = nanoid();

  const dispatch = useDispatch();
  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch(addNote({ id, title, color }));
    console.log(items);
    setTitle("");
    setColor("gold");
  };

  const handleSetColor = (e) => {
    if (e.target.value === "hotpink") {
      setColor("hotpink");
      setActivePink(!isActivePink);
    } else if (e.target.value === "mediumpurple") {
      setColor("mediumpurple");
      setActiveMediumPurple(!isActiveMediumPurple);
    } else if (e.target.value === "gold") {
      setColor("gold");
      setActiveGold(!isActiveGold);
    } else if (e.target.value === "deepskyblue") {
      setColor("deepskyblue");
      setActiveDeepSkyBlue(!isActiveDeepSkyBlue);
    } else if (e.target.value === "darkseagreen") {
      setColor("darkseagreen");
      setActiveDarkSeaGreen(!isActiveDarkSeaGreen);
    }
    console.log(isActivePink);
  };
  return (
    <div className="add-note-container">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onBlur={(e) => e.target.placeholder = "Enter your note here ..."} onFocus={(e) => e.target.placeholder = ""}
        value={title}
        placeholder="Enter your note here ..."
        className="add-note-container-input"
      ></input>
      <div className="add-note-container-bottom">
        <div className="color-select-container">
          <button
            onClick={(e) => setColor("hotpink")}
            value="hotpink"
            style={{ 
            backgroundColor: "hotpink",
            display:'flex',
            alignItems:'center',
            justifyContent:'center' }}
          >
            {color === "hotpink" ? (
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  
                  
                }}
                src={require('../mark.png')}
                alt=""
              />
            ) : (
              ""
            )}
          </button>
          <button
            onClick={(e) => setColor("mediumpurple")}
            value="mediumpurple"
            style={{ backgroundColor: "mediumpurple" }}
          >
            {color === "mediumpurple" ? (
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  background: "transparent",
                }}
                src={require('../mark.png')}
                alt=""
              />
            ) : (
              ""
            )}
          </button>
          <button
            onClick={(e) => setColor("gold")}
            value="gold"
            style={{ backgroundColor: "gold" }}
          >
            {color === "gold" ? (
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  background: "transparent",
                }}
                src={require('../mark.png')}
                alt=""
              />
            ) : (
              ""
            )}
          </button>
          <button
            onClick={(e) => setColor("deepskyblue")}
            value="deepskyblue"
            style={{ backgroundColor: "deepskyblue" }}
          >
            {color === "deepskyblue" ? (
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  background: "transparent",
                }}
                src={require('../mark.png')}
                alt=""
              />
            ) : (
              ""
            )}
          </button>
          <button
            onClick={(e) => setColor("darkseagreen")}
            value="darkseagreen"
            style={{ backgroundColor: "darkseagreen" }}
          >
            {color === "darkseagreen" ? (
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "transparent",
                }}
                src={require('../mark.png')}
                alt=""
              />
            ) : (
              ""
            )}
          </button>
        </div>
        <div>
          <img src="" alt="" />
          <button onClick={handleAddNote} className="add-button">
            ADD
          </button>
        </div>  
      </div>
    </div>
  );
}

export default NoteContainer;
