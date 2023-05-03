import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Quastion = ({ title, answer }) => {
 
  const [showanswer, setShwoanswer] = useState(false);
  const handleClick = () => {
    setShwoanswer(!showanswer);
  };
  return (
    <div className="qus" >
      <h1>{title}</h1>
      <button onClick={handleClick}>
        {showanswer ? (
          <AiOutlinePlus color="#1f93ff" />
        ) : (
          <AiOutlineMinus color="#1f93ff" />
        )}
      </button>
      <div className="answer">{showanswer && <p>{answer}</p>}</div>
    </div>
  );
};
export default Quastion;
