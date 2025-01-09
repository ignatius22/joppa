import styled from "styled-components";
import { responsive } from "../utils/responsive";
import { fontSize } from "../utils/typography";

export const StyledButton = styled.button`
  padding: 1rem;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${responsive("sm", `
    padding: 0.5rem;
    background-color: lightgreen;
  `)}

  ${fontSize(1.2)}
`;
