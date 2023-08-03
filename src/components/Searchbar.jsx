import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../redux/todos/notesSlice'

function Searchbar() {

  const filtered = useSelector((state) => state.notes.filtered);
  const dispatch = useDispatch();
  return (
    <div className='searchbar-container'>
        <input onBlur={(e) => e.target.placeholder = "Search..."} onFocus={(e) => e.target.placeholder = ""}  onChange={(e) => dispatch(search(e.target.value))} value={filtered} className='searchbar' placeholder='Search...' type="text" />
    </div>
  )
}

export default Searchbar