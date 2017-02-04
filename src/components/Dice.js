import styled from 'styled-components';

const Dice = styled.div`
  display: flex;
  justifyContent: center;
  alignItems: center;
  height: 55px;
  width: 55px;
  margin: 4px;
  border: 1px solid #333;
  borderRadius: 8px;
  cursor: pointer;
  font-size: 50px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  background: cornflowerblue;
  box-shadow: 0 0 5px rgba(177, 177, 177, .9);
  &:nth-child(even) {
    background: tomato;
  }
`;

export default Dice ;