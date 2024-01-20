import { IconProps } from "../../types";

function CaretLeft({ width = 16, height = 16 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
    >
      <g fillRule="evenodd">
        <path
          d="M13.703 12L9.128 7.39a.44.44 0 0 1 0-.62l.635-.64a.44.44 0 0 1 .622-.002l.002.002 5.482 5.523a.44.44 0 0 1 .127.347.44.44 0 0 1-.127.347l-5.482 5.523a.44.44 0 0 1-.622.002l-.002-.002-.635-.64a.44.44 0 0 1 0-.62L13.703 12z"
          fill="currentcolor"
          stroke="currentcolor"
        />
      </g>
    </svg>
  );
}

export default CaretLeft;
