import isPropValid from '@emotion/is-prop-valid';

export const getBrowserTheme = () => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  return darkModeMediaQuery.matches ? "dark" : "light";
};

export function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === "string") {
      return isPropValid(propName);
  }
  return true;
}