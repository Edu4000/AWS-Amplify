/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Fileupload(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M4 13L10 13L10 7L14 7L7 0L0 7L4 7L4 13ZM0 15L14 15L14 17L0 17L0 15Z",
          fill: "rgba(220,55,32,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Fileupload")}
    ></Icon>
  );
}
