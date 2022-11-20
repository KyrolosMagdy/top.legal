import { Typography } from "@mui/material";
import React from "react";
import { StyledStatusBarWrapper } from "./StatusBarStyles";

export interface StatusBarProps {
  status: string;
}

export const StatusBar = ({ status }: StatusBarProps): React.ReactElement => {
  return (
    <StyledStatusBarWrapper
      sx={(theme) => ({
        backgroundColor:
          status === "Alive"
            ? theme.palette.success.main
            : status === "Dead"
            ? theme.palette.error.main
            : theme.palette.error.contrastText,
      })}
    >
      <Typography
        sx={(theme) => ({
          color:
            status === "unknown"
              ? theme.palette.common.black
              : theme.palette.common.white,
        })}
        variant="h6"
      >
        {status}
      </Typography>
    </StyledStatusBarWrapper>
  );
};
