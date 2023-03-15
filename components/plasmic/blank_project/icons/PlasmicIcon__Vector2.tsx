// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 5"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 0v1h1V0H0zm2 0v1h1V0H2zm2 0v1h1V0H4zm2 0v1h1V0H6zM5 1v1h1V1H5zM3 1v1h1V1H3zM1 1v1h1V1H1zM0 2v1h1V2H0zm2 0v1h1V2H2zm2 0v1h1V2H4zm2 0v1h1V2H6zM0 4v1h1V4H0zm2 0v1h1V4H2zm2 0v1h1V4H4zm2 0v1h1V4H6zM5 3v1h1V3H5zM3 3v1h1V3H3zM1 3v1h1V3H1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
