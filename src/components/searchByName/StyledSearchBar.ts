import { styled } from "@mui/material/styles";

export const StyledSearchComponentWrapper = styled('div') (({ theme }) => ({
    margin: theme.spacing(5),
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '40% 40% 10%',
    gridGap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '90%',

    }
}))