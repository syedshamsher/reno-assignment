type RenoIconProps = {
  color?: string;
};
export function RenoIcon({ color }: RenoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <path
        d="M1.04932 18.6627V2.76902L15.6715 18.6627H1.04932Z"
        stroke={color || "#274BF1"}
        strokeWidth="2"
      ></path>
      <g filter="url(#filter0_b_4_1239)">
        <path
          d="M1.04932 1H11.0079C13.8944 1 16.2343 3.33996 16.2343 6.22645C16.2343 9.11293 13.8944 11.4529 11.0079 11.4529H1.04932V1Z"
          stroke={color || "#274BF1"}
          strokeWidth="2"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_4_1239"
          x="-2.95068"
          y="-3"
          width="23.1851"
          height="18.4531"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="1.5"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4_1239"
          ></feComposite>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4_1239"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
