import styled from "styled-components"
import { Color } from "./data/Color";
import { useState } from "react";

const SideList = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideBtns = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  button {
    margin: 0.25rem 0;
    border: 1px solid ${Color.brown1};
    border-left: none;
    font-size: 1rem;
    padding: 0.4rem 0.2rem;
    color: ${Color.brown3};
    background-color: ${Color.brown1};
    transition: all 400ms;
    border-radius: 0 0.5rem 0.5rem 0;
    pointer-events: ${props => props.disabled? "none" : "auto"};
    opacity: ${props => props.disabled? 0.5 : 1};
  }
  button:hover {
    background-color: ${Color.brown3};
    border: 1px solid ${Color.brown3};
    border-left: none;
    color: ${Color.brown1};
    cursor: pointer;
  }
`;

const List = styled.ul`
  background-color: ${Color.white3};
  border: 1px solid ${Color.brown1};
  width: calc(${props => props.$status} * 15vw);
  height: 100vh;
  overflow-y: hidden;
  font-size: 1rem;
  white-space: nowrap;       /* 텍스트가 한 줄로만 나오도록 함 */
  overflow: hidden;          /* 넘치는 부분을 숨김 */
  transition: all 400ms;
`;

export default function Side({ data, setSelectedQuestion }) {
  const [sideStatus, setSideStatus] = useState(1);

  function handleClickSideButton(type) {
    if (type === "+") {
      if (sideStatus < 2) {
        setSideStatus(sideStatus + 1);
      }
    } else if (type === "-") {
      if (sideStatus > 0) {
        setSideStatus(sideStatus - 1);
      }
    }
  };

  return (
    <>
    <SideList 
      className="side-container"
    >
      <List 
        className="side-list"
        $status={sideStatus}
      >
      {data && data.length > 0 && data.map((item, index) => (
        <li 
          key={index}
          onClick={() => setSelectedQuestion(index)}
        >
          {item.important === 1 && "⭐"}
          {item.question}
        </li>
      ))}
      </List>
      <SideBtns className="side-buttons">
        <button
          onClick={() => handleClickSideButton("+")}
        >
          ▶
        </button>
        <button
          onClick={() => handleClickSideButton("-")}
        >
          ◀
        </button>
      </SideBtns>
    </SideList>
    </>
  )
}