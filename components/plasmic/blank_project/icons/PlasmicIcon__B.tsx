// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BIcon(props: BIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M19 0H2a2 2 0 00-2 2v11a2 2 0 002 2h17a2 2 0 002-2V2a2 2 0 00-2-2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BIcon;
/* prettier-ignore-end */
