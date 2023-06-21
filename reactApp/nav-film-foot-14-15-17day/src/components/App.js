import '../style/App.css';
import FootNew from './FootNew';
import ListMovie from './ListMovie';
import NavTool from './NavTool';
import { useState } from 'react';
import {footerDatas} from '../datas/dataMovie'


function App() {
  const [search, setsearch]  = useState("");

  const handleSubmit = (e) =>{
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
          {footerDatas.map((Element) =>(
            < FootNew
              key = {Element.id} 
              title = {Element.title}
              iconName = {Element.iconName}
              color = {Element.color}
              height = {Element.height}
              width = {Element.width}
              max = {Element.max}
              pasInterval = {Element.pasInterval}
            /> 
          ))}
        </footer>
    </div>
  );
}

export default App;
