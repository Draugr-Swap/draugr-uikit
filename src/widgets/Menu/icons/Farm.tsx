import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill="url(#a)" d="M0 0h23.619v24H0z" />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#b" transform="scale(.00538)" />
        </pattern>
        <image
          id="b"
          width={186}
          height={189}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </Svg>
  );
};

export default Icon;
