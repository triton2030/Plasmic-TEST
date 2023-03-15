// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow1Icon(props: Arrow1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 7a1 1 0 000 2V7zm10.707 1.707a1 1 0 000-1.414L5.343.929A1 1 0 003.93 2.343L9.586 8l-5.657 5.657a1 1 0 101.414 1.414l6.364-6.364zM1 9h10V7H1v2z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Arrow1Icon;
/* prettier-ignore-end */
