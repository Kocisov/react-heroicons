import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function SmFlag(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
