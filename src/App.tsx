import styled, { StyledComponent } from "styled-components";
import { TodoInput } from "./components/TodoInput";
import { TodoLists } from "./components/TodoLists";
import { TodoTitle } from "./components/TodoTitle";
const BodyFrame: StyledComponent<"div", any> = styled.div`
  //background-color: lightgray;
  width: 600px;
  height: 700px;
  margin: 0 auto;
  margin-top: 6em;
`;
function App() {
  return (
    <BodyFrame>
      <TodoTitle />
      <TodoInput />
      <TodoLists />
    </BodyFrame>
  );
}

export default App;
