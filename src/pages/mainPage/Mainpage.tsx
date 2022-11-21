import React, { useState, useEffect, useCallback } from "react";
import { Container, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { PaginationComponent } from "../../components/pagination/Pagination";
import { fetchCharactersAsync } from "../../features/characters/charactersAsyncActions";
import {
  handleHideCharactersErrorMessages,
  selectCharacterErrorMessage,
  selectCharacters,
  selectCharactersStatus,
  selectCharacterTotalPages,
} from "../../features/characters/charactersSlice";
import { StyledCardsWrapper } from "./MainPageStyled";
import { LoaderComponent } from "../../components/loader/LoaderComponent";
import { SearchByName } from "../../components/searchByName/SearchByNameComponent";
import { Filtiration } from "../../types/Filteration";
import { Character } from "../../types/Character";
import { CharacterModal } from "../../components/modals/characterModal/CharacterModal";
import { CustomSnackbarComponent } from "../../components/customSnackbar/CustomSnackbarComponent";

export const MainPage = (): React.ReactElement => {
  const [page, setPage] = useState(1);
  const [currentKey, setCurrentKey] = useState<keyof Filtiration>("name");
  const [value, setValue] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    {} as Character
  );

  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const characterStatus = useAppSelector(selectCharactersStatus);
  const charactersErrorMessage = useAppSelector(selectCharacterErrorMessage);
  const totalPages = useAppSelector(selectCharacterTotalPages);

  const fetchAllCharacters = useCallback(() => {
    dispatch(
      fetchCharactersAsync({
        page,
      })
    );
  }, [dispatch, page])

  useEffect(() => {
    fetchAllCharacters()
  }, [fetchAllCharacters]);

  const handleSearchButton = () => {
    if (value.length > 0) {
      dispatch(
        fetchCharactersAsync({
          page,
          filter: {
            [currentKey]: value,
          },
        })
      );
    }
  };

  const handleClearFilters = () => {
    setValue('');
    setCurrentKey('name')
    fetchAllCharacters();
  }

  return (
    <Container maxWidth="xl">
      <LoaderComponent open={characterStatus === "loading"} />
      <CustomSnackbarComponent
        open={charactersErrorMessage.length > 0}
        message={charactersErrorMessage}
        handleClose={() => {
          dispatch(handleHideCharactersErrorMessages());
        }}
      />
      {Boolean(selectedCharacter?.id >= 0) && (
        <CharacterModal
          open={Boolean(selectedCharacter?.id >= 0)}
          handleClose={() => setSelectedCharacter({} as Character)}
          character={selectedCharacter}
        />
      )}
      <SearchByName
        filterKey={currentKey}
        onFilterKeyChange={(v) => setCurrentKey(v)}
        value={value}
        onValueChange={(e) => setValue(e)}
        handleSearch={handleSearchButton}
        handleClearFilters={handleClearFilters}
      />
      {characters?.length === 0 && (
        <Typography variant="h4" textAlign="center">
          No Characters Found
        </Typography>
      )}
      <StyledCardsWrapper>
        {characters?.length > 0 &&
          characters.map((character) => (
            <CharacterCard
              onCardClick={() => {
                setSelectedCharacter(character);
              }}
              character={character}
              key={character.id}
            />
          ))}
      </StyledCardsWrapper>
      <PaginationComponent
        currentPage={page}
        totalPages={totalPages}
        onChange={(pageN: number) => {
          setPage(pageN);
        }}
      />
    </Container>
  );
};
