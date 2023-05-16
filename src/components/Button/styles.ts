import styled from "styled-components";
import { IButtonProps } from "../../interfaces";

export const Button = styled.button<IButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    background: #b18068;
    color: white;
    font-size: ${(props) => props.fontSize};
    padding: 5px;

    width: ${(props) => props.width};
    height: ${(props) => props.height}
}
`;
