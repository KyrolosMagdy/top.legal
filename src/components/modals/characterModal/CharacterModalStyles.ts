import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledModalWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 600,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(3),
  transform: 'translate(-50%, -50%)',
  borderRadius: theme.spacing(1)
}));

export const StyledTypographyLocationTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2),
    marginTop: theme.spacing(1)
}))