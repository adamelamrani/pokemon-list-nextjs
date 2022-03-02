import styled from "styled-components";

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  position: fixed;
  background-color: #8ddb86;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px;
    color: rgb(108, 52, 131);
    font-weight: bold;
    font-size: 20px;
  }
`;

export default NavigationStyle;
