import { IconProps } from "../../types";

function Menu({ width = 16, height = 16 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      focusable="false"
      role="presentation"
      viewBox="0 0 16 12"
    >
      <path
        d="M1 1H15"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 6H15"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 11H15"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Menu;
