const Font = {
  family: "Inter, system-ui, sans-serif",
  size: {
    small: "14px",
    regular: "16px",
    big: "18px",
    bigger: "20px",
  },
};

const DarkTheme = {
  colors: {
    background: {
      primary: "rgb(0,85,204)",
      secondary: "transparent",
      link: "transparent",
    },
    hover: {
      primary: "rgb(12,102,228)",
      secondary: "rgb(9,50,108)",
      link: "transparent",
    },
    active: {
      primary: "rgb(9,50,108)",
      secondary: "rgb(0,85,204)",
      link: "transparent",
    },
    disabled: {
      primary: "rgb(28,43,65)",
      secondary: "rgb(28,43,65)",
      link: "transparent",
    },
    border: {
      primary: "rgb(0,85,204)",
      secondary: "rgb(0,85,204)",
      link: "transparent",
    },
  },
  color: "#FFFF",
  background: "rgb(29,33,37)",
  border: "rgba(161,189,217,0.08)",
  highlight: "rgb(0,85,204)",
  font: { ...Font },
};

const LightTheme = {
  colors: {
    background: {
      primary: "rgb(87,157,255)",
      secondary: "transparent",
      link: "transparent",
    },
    hover: {
      primary: "rgb(56,139,255)",
      secondary: "rgb(204,224,255)",
      link: "transparent",
    },
    active: {
      primary: "rgb(29,122,252)",
      secondary: "rgb(29,122,252)",
      link: "transparent",
    },
    disabled: {
      primary: "rgb(233,242,255)",
      secondary: "rgb(233,242,255)",
      link: "transparent",
    },
    border: {
      primary: "rgb(56,139,255)",
      secondary: "rgb(56,139,255)",
      link: "transparent",
    },
  },
  color: "rgb(16,18,20)",
  background: "rgb(247,248,249)",
  border: "rgba(9,30,66,0.06)",
  highlight: "rgb(87,157,255)",
  font: { ...Font },
};

export { DarkTheme, LightTheme };
