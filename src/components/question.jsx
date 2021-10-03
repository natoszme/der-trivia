import React from "react";
import { Button } from "react-bootstrap";

const Option = ({ onOptionSelected, option }) =>
  <Button onClick={() => onOptionSelected(option)}>{option}</Button>

export default ({ question, options, onOptionSelected }) => (
  <div>
    <h3>{question.text}</h3>
    {options.map((option, number) =>
      <Option
        key={number}
        question={question}
        option={option}
        onOptionSelected={onOptionSelected}
      /> )}
  </div>
);