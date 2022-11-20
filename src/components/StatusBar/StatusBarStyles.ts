import { styled } from "@mui/material/styles";

export const StyledStatusBarWrapper = styled('div')(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1)
}))