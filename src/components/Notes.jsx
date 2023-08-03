import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'


function Notes() {
  
  const items=useSelector(state=> state.notes.items)
  const filtered = useSelector((state) => state.notes.filtered);
  const filteredNotes = items.filter((item) =>
  item.title.toLowerCase().includes(filtered.toLowerCase())
);
    const noteMap=filteredNotes.map((item)=> {
        return(
            
                <div id={item.id} style={{backgroundColor:item.color}} className='note-card'>{item.title}</div>
            
        )
    })
  return (
    <div className='notes-container'>
        {/* <div style={{backgroundColor:'darkseagreen'}} className='note-card'>Note1</div>
        <div style={{backgroundColor:'deepskyblue'}} className='note-card'>Note2</div>
        <div style={{backgroundColor:'gold'}} className='note-card'></div> */}
        {noteMap}
    </div>
  )
}

export default Notes