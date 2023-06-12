import '../style/App.css';
import FootNew from './FootNew';
import CartMovieList from './CartMovieList';
import NavTool from './NavTool';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <NavTool/> 
        </header>

        <main className='App-body'>
            <CartMovieList/>
        </main>

        <footer className='App-footer'>
            <FootNew> </FootNew>
        </footer>
    </div>
  );
}

export default App;
