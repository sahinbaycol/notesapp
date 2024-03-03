import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";
import { useDispatch } from "react-redux";
import { changeItemTitle, deleteNote, editNote } from "../redux/todos/notesSlice";

function Notes() {
  const [isOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const styles = {
    iconStyle: {
      width: "32px",
      height: "32px",
      marginLeft: "10px",
      cursor: "pointer",
    },
    containerStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    openedInputContainerStyle: {
      width: "300px",
      height: "100px",
      paddingLeft: "20px",
      fontSize: "larger",
      fontFamily: " 'Roboto', sans-serif",
      display: "flex",
      alignItems: "center",
    },
    applyButton: {
      width: "150px",
      height: "30px",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: "green",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      margin: "16px",
    },
    inputContainerStyle: {
      display: "flex",
      flexDirection: "column",
    },
  };
  const [editedItemIndex, setEditedItemIndex] = useState(null);
  const [editedItemId, setEditedItemId] = useState(null);
  const [editedItemTitle, setEditedItemTitle] = useState('');

  const handleInputChange = (e) => {
    setEditedItemTitle(e.target.value);
  };

  const handleEditClick = (index) => {
    if (editedItemIndex === index) {
      // Clicking again on the same item, so close the edit mode
      if (isOpen === true) {
        setInputOpen(false);
      } else{
        setInputOpen(true);
      }
      setEditedItemIndex(null);
      console.log(isOpen)
    } else {
      // Clicking on a new item, open the edit mode
      
        setInputOpen(true);
      
      setEditedItemIndex(index);
      console.log(isOpen)
      
    }
    
    console.log(isOpen)
  };
  const handleSaveEdit = () => {
    dispatch(changeItemTitle({ itemId: editedItemId, newTitle: editedItemTitle }));
    setEditedItemId(null);
    setEditedItemTitle('');
  };

  const editHandler = () => {
    if (isOpen === true) {
      setInputOpen(false);
    } else {
      setInputOpen(true);
    }
  };
  const dispatch = useDispatch();
  const items = useSelector((state) => state.notes.items);
  const filtered = useSelector((state) => state.notes.filtered);
  const filteredNotes = items.filter((item) =>
    item.title.toLowerCase().includes(filtered.toLowerCase())
  );
  const noteMap = filteredNotes.map((item, index) => {
    return (
      <div key={index} style={styles.containerStyle}>
        {editedItemIndex === index && isOpen ? (
          <div style={styles.inputContainerStyle}>
            <input
            value={editedItemTitle}
              onChange={
                handleInputChange}
              style={{
                ...styles.openedInputContainerStyle,
                backgroundColor: item.color,
              }}
              className="openedInputContainer"
            ></input>
            <div
              onClick={() => {
                dispatch(changeItemTitle({ itemId: item.id, newTitle: editedItemTitle }));
               
                  setInputOpen(false);
                
                console.log(isOpen)
                setEditedItemTitle('');
                setEditedItemId(null);
                console.log(items)
              }}
              style={styles.applyButton}
            >
              Apply
            </div>
          </div>
        ) : (
          <div
          
            id={item.id}
            style={{ backgroundColor: item.color}}
            className="note-card"
          >
            {item.title}
          </div>
        )}
        <div>
          <img
            onClick={() => handleEditClick(index)
              
            }
            style={styles.iconStyle}
            src={editIcon}
          />
        </div>
        <div>
          <img onClick={()=>{
            dispatch(deleteNote(item.id))
          }} style={styles.iconStyle} src={deleteIcon} />
        </div>
      </div>
    );
  });
  return (
    <div className="notes-container">
      {/* <div style={{backgroundColor:'darkseagreen'}} className='note-card'>Note1</div>
        <div style={{backgroundColor:'deepskyblue'}} className='note-card'>Note2</div>
        <div style={{backgroundColor:'gold'}} className='note-card'></div> */}
      {noteMap}
    </div>
  );
}

export default Notes;
