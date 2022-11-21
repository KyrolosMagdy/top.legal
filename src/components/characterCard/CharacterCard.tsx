import React from "react";
import { Character } from "../../types/Character";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { StyledTypographyLocationTitle } from "./CharacterCardStyled";
import { StatusBar } from "../StatusBar/StatusBar";

export interface CardProps {
  character: Character;
  onCardClick: () => void;
}

export const CharacterCard = ({
  character,
  onCardClick,
}: CardProps): React.ReactElement => {
  return (
    <Card
      sx={{ maxWidth: 320, position: "relative", cursor: "pointer" }}
      data-testid="card-wrapper"
      onClick={onCardClick}
    >
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt="green iguana"
      />
      <CardContent>
        <StatusBar status={character.status} />
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
        <StyledTypographyLocationTitle color="text.secondary" gutterBottom>
          Last Location
        </StyledTypographyLocationTitle>
        <Typography variant="body1" component="div">
          {character.location.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
