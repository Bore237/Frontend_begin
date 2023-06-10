import logo from './logo.svg';
import './App.css';
import FootNew from './FootNew';
import CartMovie from './CartMovie';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Nav> </Nav>
        </header>

        <body className='App-body'>
            <CartMovie> </CartMovie>
        </body>

        <footer className='App-footer'>
            <FootNew> </FootNew>
        </footer>
    </div>
  );
}

export default App;
