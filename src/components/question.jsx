import _ from "lodash";

export default function Question(props) {
  const { text, answer, incorrectAnswers } = props.question;
  const options = _(incorrectAnswers).concat(answer).shuffle().value();

  return (
    <div>
    <h3>{text}</h3>
      <ul>
        {options.map((option, number) => <Option key={number} { ...props } option={option} /> )}
      </ul>
    </div>
  );
}

const Option = ({ question: { answer }, onOptionSelected, option }) => {
  const isCorrect = _.isEqual(answer, option);
  return <button onClick={() => onOptionSelected(isCorrect)}>{option}</button>;
}