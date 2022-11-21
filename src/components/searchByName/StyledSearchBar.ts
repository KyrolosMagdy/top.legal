import { styled } from "@mui/material/styles";

export const StyledSearchComponentWrapper = styled('div') (({ theme }) => ({
    margin: theme.spacing(5),
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '35% 35% 35%',
    gridGap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '90%',

    }
}))

export const StyledButtonsWrapper = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '40% 40%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '100%'
    }
}))