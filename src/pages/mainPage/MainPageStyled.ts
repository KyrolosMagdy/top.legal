import { styled } from "@mui/material/styles";

export const StyledCardsWrapper = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 320px)',
    gridGap: theme.spacing(3),
    justifyContent: 'center',
}))

export const StyledMainPageWrapper = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '20% 80%'
}))