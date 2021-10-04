import _ from "lodash";
import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const Option = ({ onOptionSelected, option }) =>
  <Button className="option" onClick={() => onOptionSelected(option)}>{_.toUpper(option)}</Button>

export default ({ question, options, onOptionSelected }) => (
  <div>
    <p>{question.text}</p>
    {options.map((option, number) =>
      <Option
        key={number}
        question={question}
        option={option}
        onOptionSelected={onOptionSelected}
      /> )}
  </div>
);