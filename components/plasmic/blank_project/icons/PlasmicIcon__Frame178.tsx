// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame178IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame178Icon(props: Frame178IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 330 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M291 1a1 1 0 00-2 0h2zm-1.707 10.707a1 1 0 001.414 0l6.364-6.364a1 1 0 10-1.414-1.414L290 9.586l-5.657-5.657a1 1 0 10-1.414 1.414l6.364 6.364zM289 1v10h2V1h-2z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame178Icon;
/* prettier-ignore-end */
