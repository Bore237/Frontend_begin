import '../style/App.css';
import JokeCard from './JokeCard';
import {jokeDatas} from '../datas/jokeDatas'

function App() {
  return (
    <div className="App">
        <JokeCard
            joke={jokeDatas}
        />
    </div>
  );
}

export default App;
