import '../style/App.css';
import FootNew from './FootNew';
import ListMovie from './ListMovie';
import NavTool from './NavTool';
import { useState } from 'react';


function App() {
  const [search, setsearch]  = useState("");

  const handleSubmit = (e) =>{
    const form = document.getElementById('form');
    const label = document.querySelector('input');
    setsearch(label.value);
    label.value='';
    console.log(search);
  }

  return (
    <div className="App" onSubmit={handleSubmit}>
        <header className="App-header">
            <NavTool/> 
        </header>

        <main className='App-body'>
            <ListMovie searchTerm={search}/>
        </main>

        <footer className='App-footer'>
            <FootNew> </FootNew>
        </footer>
    </div>
  );
}

export default App;
