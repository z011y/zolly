type LogoProps = {
  fillColor: any;
  strokeColor: any;
  primaryColor: any;
  width?: number;
  height?: number;
};

const Logo = ({
  fillColor,
  strokeColor,
  primaryColor,
  width,
  height,
}: LogoProps) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={0.5}
        y={0.5}
        width={23}
        height={23}
        rx={6}
        fill={fillColor}
        stroke={strokeColor}
      />
      <circle cx={12} cy={8} r={3} fill={primaryColor} />
      <circle cx={12} cy={16} r={3} fill={primaryColor} />
    </svg>
  );
};

export default Logo;
