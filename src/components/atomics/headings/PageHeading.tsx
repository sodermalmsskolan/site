/* eslint-disable jsx-a11y/heading-has-content */
import React, { FunctionComponent } from "react";
import { HeadingProps } from "../../text/headings";
import getTextSize from "../../typography/getTextSize";

export type PageHeadingProps = HeadingProps;

const PageHeading: FunctionComponent<PageHeadingProps> = (props) => (
  <h1
    css={{
      fontSize: getTextSize(14),
      margin: 0,
      lineHeight: 1,
      letterSpacing: "-0.025em",
    }}
    {...props}
  />
);

export default PageHeading;
