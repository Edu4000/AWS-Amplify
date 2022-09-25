/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Locked(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="99px"
      height="89px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 99, height: 89 }}
      paths={[
        {
          d: "M8.25 22.25L8.25 14.8333C8.25 6.64111 15.6373 0 24.75 0C33.8627 0 41.25 6.64111 41.25 14.8333L41.25 22.25C45.8063 22.25 49.5 25.5706 49.5 29.6667L49.5 55.625C49.5 59.7211 45.8063 63.0417 41.25 63.0417L8.25 63.0417C3.69365 63.0417 0 59.7211 0 55.625L0 29.6667C0 25.5706 3.69365 22.25 8.25 22.25ZM12.375 14.8333C12.375 8.68917 17.9155 3.70833 24.75 3.70833C31.5845 3.70833 37.125 8.68917 37.125 14.8333L37.125 22.25L12.375 22.25L12.375 14.8333ZM27.1301 44.0736C29.366 43.2352 30.9375 41.2513 30.9375 38.9375C30.9375 35.8654 28.1673 33.375 24.75 33.375C21.3327 33.375 18.5625 35.8654 18.5625 38.9375C18.5625 41.2513 20.134 43.2352 22.3699 44.0736L20.625 51.9167L28.875 51.9167L27.1301 44.0736Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(25%, 14.58%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Locked")}
    ></Icon>
  );
}
