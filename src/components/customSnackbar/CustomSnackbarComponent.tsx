import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Typography } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface SnackbarProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity?: "error" | "success";
}

export const CustomSnackbarComponent = ({
  open,
  handleClose,
  message,
  severity = "error",
}: SnackbarProps): React.ReactElement => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ padding: "0.3rem", display: "flex", alignItems: "center" }}
      >
        <Typography variant="h6" sx={{ padding: "0 1rem" }}>
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};
