import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;

  h1 {
    color: #e5ddd9;
    margin: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
  }

  h2,
  p {
    color: var(--pinkish);
  }

  .content--box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .box--column {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .result--box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    margin: 20px;
  }

  @media screen and (min-width: 700px) {
    .content--box {
      flex-direction: row;
      justify-content: center;
      align-items: end;
    }
  }
`;
