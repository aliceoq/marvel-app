import { IconProps } from "../../types";

function CaretRight({ width = 16, height = 16 }: IconProps) {
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
          d="M10.294 12l4.575 4.61a.44.44 0 0 1 0 .62l-.635.64-.002.002a.44.44 0 0 1-.622-.002l-5.482-5.523A.44.44 0 0 1 8 12a.44.44 0 0 1 .127-.347L13.61 6.13l.002-.002a.44.44 0 0 1 .622.002l.635.64a.44.44 0 0 1 0 .62L10.294 12z"
          stroke="currentcolor"
          fill="currentcolor"
        />
      </g>
    </svg>
  );
}

export default CaretRight;
