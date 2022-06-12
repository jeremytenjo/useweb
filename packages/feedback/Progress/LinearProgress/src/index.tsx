import React from "react";
import MuiLinearProgress, {
  type LinearProgressProps as MuiLinearProgressProps,
} from "@mui/material/LinearProgress";

export type LinearProgressProps = MuiLinearProgressProps;

/**
 * [API](https://mui.com/material-ui/api/linear-progress/)
 *
 * [Demo](https://mui.com/material-ui/react-linear-progress/)
 *
 * @example
 * <LinearProgress open={open} onClose={closeLinearProgress}>Hello</LinearProgress>
 */
export default function LinearProgress(props: LinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}
