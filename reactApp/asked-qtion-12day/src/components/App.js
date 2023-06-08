import '../style/App.css';
import QuestionFrame from './QuestionFrame';
import { dataQcm } from '../datas/data';

function App() {

  return (
    <div className="App">
        <header className="App-header">
            <h1 > Frequently Asked Question </h1>
        </header>
        <div className='appContaint'>
            {dataQcm.map(({id, reponse, question}) =>(
                <div key={id}>
                    <QuestionFrame 
                    reponse={reponse} 
                    question={question}
                    />
                </div>
            ))}
        </div>
    </div>
    )
}

export default App;
