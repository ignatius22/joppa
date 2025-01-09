export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const gridLayout = (columns = "1fr", gap = "1rem") => `
  display: grid;
  grid-template-columns: ${columns};
  gap: ${gap};
`;
