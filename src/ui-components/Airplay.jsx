/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Airplay(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="21px"
      height="21px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Airplay")}
    >
      <Icon
        width="21px"
        height="21px"
        viewBox={{ minX: 0, minY: 0, width: 21, height: 21 }}
        paths={[]}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Vector47296")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="12.5%"
        bottom="8.33%"
        left="4.17%"
        right="4.17%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="10.5px"
          height="5.25px"
          viewBox={{ minX: 0, minY: 0, width: 10.5, height: 5.25 }}
          paths={[
            {
              d: "M0 5.25L10.5 5.25L5.25 0L0 5.25Z",
              fill: "rgba(115,107,107,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="68.42%"
          bottom="0%"
          left="22.73%"
          right="22.73%"
          {...getOverrideProps(overrides, "Vector47298")}
        ></Icon>
        <Icon
          width="19.25px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 19.25, height: 14 }}
          paths={[
            {
              d: "M17.5 0L1.75 0C0.7875 0 0 0.7875 0 1.75L0 12.25C0 13.2125 0.7875 14 1.75 14L5.25 14L5.25 12.25L1.75 12.25L1.75 1.75L17.5 1.75L17.5 12.25L14 12.25L14 14L17.5 14C18.4625 14 19.25 13.2125 19.25 12.25L19.25 1.75C19.25 0.7875 18.4625 0 17.5 0Z",
              fill: "rgba(115,107,107,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="15.79%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector47299")}
        ></Icon>
      </View>
    </View>
  );
}
