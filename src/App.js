import logo from './logo.svg';
import './App.css';
import Quizz from "./components/quizz";
import questions from "./questions.json";
import _ from "lodash";

function App() {
  const roundQuestions = _.take(questions, 10);
  return (
    <div className="App">
        <Quizz questions={roundQuestions} />
    </div>
  );
}

export default App;
