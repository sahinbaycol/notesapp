import React, { useState } from 'react'
// import AddButton from './AddButton'
// import ColorSelect from './ColorSelect'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/todos/notesSlice'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { nanoid,  } from 'nanoid'

function NoteContainer() {
    const [title, setTitle]=useState('')
    const [color ,setColor]=useState('gold')
    
    const items=useSelector(state => state.notes.items)
   
    const id=nanoid()

    const dispatch=useDispatch();
    const handleAddNote=(e)=> {
        e.preventDefault()
        dispatch(addNote({ id ,title ,color}))
        console.log(items)
        setTitle('')
        setColor('gold')
    }   
  return (
    <div className='add-note-container'>
        <input onChange={(e)=> {setTitle(e.target.value)}} value={title} placeholder='Enter your note here ...' className='add-note-container-input'></input>
        <div className='add-note-container-bottom'>
            <div className='color-select-container'>
                <button onClick={(e) => setColor('hotpink')} style={{backgroundColor:'hotpink'}}></button>
                <button onClick={(e) => setColor('mediumpurple')} style={{backgroundColor:'mediumpurple'}}></button>
                <button onClick={(e) => setColor('gold')} style={{backgroundColor:'gold'}}></button>
                <button onClick={(e) => setColor('deepskyblue')} style={{backgroundColor:'deepskyblue'}}></button>
                <button onClick={(e) => setColor('darkseagreen')} style={{backgroundColor:'darkseagreen'}}></button>
            </div>
            {/* <div className='color-select-container'>
                    {colors.map((color) => {
                return (
                    <button
                    onClick={(e) => setColor(e.target.value.color)}
                    style={{backgroundColor:color.name}}
                    value={color.name}
                    
                    ></button>
                );
                })}
            </div> */}
            <div>
                <button onClick={handleAddNote} className='add-button'>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default NoteContainer