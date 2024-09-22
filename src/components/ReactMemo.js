import React, { useState } from "react";

const ReactMemoComponent = React.memo(() => {
  const [skills, setSkills] = useState([
    "jumbotron",
    "CSS",
    "JavaScript",
    "React",
  ]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.length > 5) {
      setSkills([...skills, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="skill-btn" onClick={addSkill}>
        Add Skill
      </button>

      <ul>
        {skills.map((skill, index) => (
          <li id="item-jumbotron" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;
