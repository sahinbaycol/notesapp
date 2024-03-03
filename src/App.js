import Searchbar from './components/searchbar/Searchbar';
import NoteContainer from './components/NoteContainer';
import Notes from './components/Notes';
import './App.css';

function App() {

  return (
    <div className='container'>
      <div className='notes-app-header'>NotesApp</div>
      <Searchbar />
      <NoteContainer />
      <Notes />
    </div>
  );
}

export default App;
