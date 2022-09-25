/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ContinuewithFacebookLeftAlignedFixed(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="215px"
      height="35px"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(24,119,242,1)"
      {...rest}
      {...getOverrideProps(overrides, "ContinuewithFacebookLeftAlignedFixed")}
    >
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="6px"
        left="13px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(24,119,242,1)"
        {...getOverrideProps(overrides, "Facebook Logo")}
      >
        <Icon
          width="23px"
          height="22.86px"
          viewBox={{ minX: 0, minY: 0, width: 23, height: 22.8603515625 }}
          paths={[
            {
              d: "M23 11.3603C23 17.7116 17.8513 22.8603 11.5 22.8603C5.14872 22.8603 0 17.7116 0 11.3603C0 5.62031 4.20538 0.862729 9.70312 0L9.70312 8.03608L6.7832 8.03608L6.7832 11.3603L9.70312 11.3603L9.70312 13.8939C9.70312 16.7761 11.42 18.3681 14.0468 18.3681C15.305 18.3681 16.6211 18.1435 16.6211 18.1435L16.6211 15.3134L15.171 15.3134C13.7424 15.3134 13.2969 14.427 13.2969 13.5175L13.2969 11.3603L16.4863 11.3603L15.9765 8.03608L13.2969 8.03608L13.2969 0C18.7946 0.862729 23 5.62031 23 11.3603Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="calc(50% - 11.43px - -22.86px)"
          left="calc(50% - 11.5px - 0px)"
          {...getOverrideProps(overrides, "path14")}
        ></Icon>
      </View>
      <Text
        fontFamily="Gothic A1"
        fontSize="14px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="11px"
        left="48px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Continue with Facebook"
        {...getOverrideProps(overrides, "Continue with Facebook")}
      ></Text>
    </View>
  );
}
