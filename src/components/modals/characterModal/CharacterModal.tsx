import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent, CardMedia } from "@mui/material";

import { Character } from "../../../types/Character";
import { StatusBar } from "../../StatusBar/StatusBar";
import {
    StyledModalWrapper,
    StyledTypographyLocationTitle,
  } from "./CharacterModalStyles";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  character: Character;
}

export const CharacterModal = ({
  open,
  handleClose,
  character,
}: ModalProps): React.ReactElement => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      data-testid="modal-wrapper"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
      disableAutoFocus
    >
      <StyledModalWrapper>
        <Card sx={{ display: "grid", justifyContent: "center", boxShadow: 0 }}>
          <CardMedia
            component="img"
            image={character.image}
            alt="green iguana"
            sx={{ width: "100%" }}
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
            <StyledTypographyLocationTitle color="text.secondary" gutterBottom>
              Gender
            </StyledTypographyLocationTitle>
            <Typography variant="body1" component="div">
              {character.gender}
            </Typography>
            <StyledTypographyLocationTitle color="text.secondary" gutterBottom>
              Origin
            </StyledTypographyLocationTitle>
            <Typography variant="body1" component="div">
              {character.origin.name}
            </Typography>
            <StyledTypographyLocationTitle color="text.secondary" gutterBottom>
              Species
            </StyledTypographyLocationTitle>
            <Typography variant="body1" component="div">
              {character.species}
            </Typography>
          </CardContent>
        </Card>
      </StyledModalWrapper>
    </Modal>
  );
};
