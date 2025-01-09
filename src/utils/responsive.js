import { media } from "./breakpoints";

export const responsive = (size, styles) => `
  @media ${media[size]} {
    ${styles}
  }
`;
