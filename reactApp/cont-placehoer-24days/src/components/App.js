import '../styles/App.css';
import Git28day from './Git28day';
import Placeholder24 from './Placeholder24';
import Quiz46 from './Quiz46';
import Testimonial from './Testimonial47.jsx';
import {quizData} from "../data/quizData"
import {placeholderData} from "../data/placeholerData"

function App() {
  return (
    <div className="App">
        <div className='App-All'>
            <Git28day /> 
            <Placeholder24
              user = {placeholderData}
            />
            <Quiz46 
                quizData = {quizData}
            /> 
            <Testimonial /> 
        </div>
    </div>
  );
}

export default App;
