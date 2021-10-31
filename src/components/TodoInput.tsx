import styled from "styled-components";

const Box = styled.div`
  display: flex;
  background-color: #fff;
  min-width: 600px;
  min-height: 80px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-left: 50px;
  font-size: 2.5rem;
`;
export const TodoInput = () => {
  return (
    <Box>
      <Input placeholder="asd" />
    </Box>
  );
};
