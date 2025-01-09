export const fontSize = (size) => `
  font-size: ${size}rem;

  @media (max-width: 768px) {
    font-size: ${size * 0.8}rem;
  }

  @media (min-width: 1024px) {
    font-size: ${size * 1.2}rem;
  }
`;
