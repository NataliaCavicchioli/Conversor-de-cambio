import styled from "styled-components";

export const FooterBox = styled.footer`
  width: 100vw;
  height: 5rem;

  background-color: var(--pinkish);
  color: var(--black);
  position: fixed;
  bottom: 0px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .container_footer_span {
    opacity: 0.7;
  }

  .container_footer_name {
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
