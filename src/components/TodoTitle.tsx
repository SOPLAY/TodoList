import styled from "styled-components";
const Title = styled.div`
  display: flex;
  background-color: #4dabf7;
  min-width: 600px;
  min-height: 80px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 2.75rem;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

  margin-bottom: 20px;
`;

export function TodoTitle() {
  return <Title>Todo list</Title>;
}
