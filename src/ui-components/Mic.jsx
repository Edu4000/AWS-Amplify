/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Mic(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="21px"
      height="21px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 21, height: 21 }}
      paths={[
        {
          d: "M6.125 10.5C7.5775 10.5 8.74125 9.3275 8.74125 7.875L8.75 2.625C8.75 1.1725 7.5775 0 6.125 0C4.6725 0 3.5 1.1725 3.5 2.625L3.5 7.875C3.5 9.3275 4.6725 10.5 6.125 10.5ZM10.7625 7.875C10.7625 10.5 8.54 12.3375 6.125 12.3375C3.71 12.3375 1.4875 10.5 1.4875 7.875L0 7.875C0 10.8588 2.38 13.3262 5.25 13.755L5.25 16.625L7 16.625L7 13.755C9.87 13.335 12.25 10.8675 12.25 7.875L10.7625 7.875Z",
          fill: "rgba(115,107,107,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Mic")}
    ></Icon>
  );
}
