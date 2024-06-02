type EstimateClockIconProps = {
  color?: string;
};
export function EstimateClockIcon({ color }: EstimateClockIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M10 7.33069V10.664L12.0833 12.7474"
        stroke={color || "#1C274C"}
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M1.6665 10.664C1.6665 6.73565 1.6665 4.77147 2.88689 3.55108C4.10728 2.33069 6.07147 2.33069 9.99984 2.33069C13.9282 2.33069 15.8924 2.33069 17.1128 3.55108C18.3332 4.77147 18.3332 6.73565 18.3332 10.664C18.3332 14.5924 18.3332 16.5566 17.1128 17.777C15.8924 18.9974 13.9282 18.9974 9.99984 18.9974C6.07147 18.9974 4.10728 18.9974 2.88689 17.777C1.6665 16.5566 1.6665 14.5924 1.6665 10.664Z"
        stroke={color || "#1C274C"}
        strokeWidth="1.5"
      ></path>
    </svg>
  );
}
