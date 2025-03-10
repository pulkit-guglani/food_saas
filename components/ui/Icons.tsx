import Svg, { Path, Rect } from "react-native-svg";

type IconProps = {
  onClick?: () => void;
  props?: any;
};

export const BackButtonIcon = (props: IconProps) => {
  const { onClick } = props;
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      onPress={() => onClick && onClick()}
      {...props}
    >
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#EDEDED" />
      <Path
        d="M20.5 23.8334L14.6667 18.0001L20.5 12.1667"
        stroke="#101010"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
