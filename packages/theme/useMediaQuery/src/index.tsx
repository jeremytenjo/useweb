import React from "react";
import MuiuseMediaQuery, {
  type UseMediaQueryProps as MuiUseMediaQueryProps,
} from "@mui/material/useMediaQuery";

export type UseMediaQueryProps = MuiUseMediaQueryProps;

/**
 * [API](https://mui.com/material-ui/api/useMediaQuery/)
 *
 * [Demo](https://mui.com/material-ui/react-useMediaQuery/)
 *
 * @example
 * <useMediaQuery open={open} onClose={closeuseMediaQuery}>Hello</useMediaQuery>
 */
export default function useMediaQuery(props: UseMediaQueryProps) {
  return <MuiuseMediaQuery {...props} />;
}
