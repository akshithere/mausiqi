import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

function BackButton({ stroke, ...svgProps }: SvgProps): React.JSX.Element {
  return (
    <Svg width={8} height={14} fill="none" {...svgProps}>
      <Path
        d="M7 13 1 7l6-6"
        stroke={typeof stroke === 'string' ? stroke : '#100F0A'}
        strokeWidth={2}
      />
    </Svg>
  );
}
export default BackButton;
