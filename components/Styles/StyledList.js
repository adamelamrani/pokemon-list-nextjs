import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  max-width: 1200px;

  li {
    background-color: rgb(175, 122, 197);
    border: 2px solid rgb(165, 105, 189);
    border-radius: 15px;
    height: 240px;
    width: 150px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 30px;
    margin-top: 50px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        top: 50px;
        margin-bottom: 30px;
      }

      p {
        color: #8ddb86;
        font-size: 18px;
      }
    }
  }
`;

export default StyledList;
