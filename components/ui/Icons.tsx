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
export const SearchIcon = (props: IconProps) => {
  const { onClick } = props;
  return (
    <Svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      onPress={() => onClick && onClick()}
      {...props}
    >
      <Rect x="0.5" y="1" width="39" height="39" rx="19.5" stroke="white" />
      <Path
        d="M29 29.5L23 23.5M25 18.5C25 22.366 21.866 25.5 18 25.5C14.134 25.5 11 22.366 11 18.5C11 14.634 14.134 11.5 18 11.5C21.866 11.5 25 14.634 25 18.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
