export const breakpoints = {
 custom375: "375px", // Add custom breakpoint for 375px
  xs: "480px",    // Extra small devices (phones, 480px and below)
  sm: "768px",    // Small devices (tablets, 768px and below)
  md: "1024px",   // Medium devices (small laptops/tablets, 1024px and below)
  lg: "1280px",   // Large devices (desktops, 1280px and below)
  xl: "1440px",   // Extra large devices (larger desktops, 1440px and below)
  xxl: "1600px",  // Very large screens
  xxxl: "1920px", // Ultra-wide screens (4K)
};

export const media = {
  xs: `(max-width: ${breakpoints.xs})`,       // Up to 480px
  custom375: `(max-width: ${breakpoints.custom375})`,       // Up to 480px
  sm: `(max-width: ${breakpoints.sm})`,       // Up to 768px
  md: `(max-width: ${breakpoints.md})`,       // Up to 1024px
  lg: `(max-width: ${breakpoints.lg})`,       // Up to 1280px
  xl: `(max-width: ${breakpoints.xl})`,       // Up to 1440px
  xxl: `(max-width: ${breakpoints.xxl})`,     // Up to 1600px
  xxxl: `(max-width: ${breakpoints.xxxl})`,   // Up to 1920px

  xsMin: `(min-width: ${breakpoints.xs})`,    // From 480px
  smMin: `(min-width: ${breakpoints.sm})`,    // From 768px
  mdMin: `(min-width: ${breakpoints.md})`,    // From 1024px
  lgMin: `(min-width: ${breakpoints.lg})`,    // From 1280px
  xlMin: `(min-width: ${breakpoints.xl})`,    // From 1440px
  xxlMin: `(min-width: ${breakpoints.xxl})`,  // From 1600px
  xxxlMin: `(min-width: ${breakpoints.xxxl})`,// From 1920px
};
