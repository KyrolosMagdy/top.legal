import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { PaginationComponent } from "../../components/pagination/Pagination";
import { fetchCharactersAsync } from "../../features/characters/charactersAsyncActions";
import { selectCharacters, selectCharactersStatus, selectCharacterTotalPages } from "../../features/characters/charactersSlice";
import { StyledCardsWrapper } from "./MainPageStyled";
import { LoaderComponent } from "../../components/loader/LoaderComponent";

export const MainPage = (): React.ReactElement => {
    const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const characterStatus = useAppSelector(selectCharactersStatus);
  const totalPages = useAppSelector(selectCharacterTotalPages)

  useEffect(() => {
    dispatch(fetchCharactersAsync({ page }));
  }, [dispatch, page]);

  return (
    <Container maxWidth='xl'>
        <LoaderComponent open={ characterStatus === 'loading' } />
      <StyledCardsWrapper>
        {characters?.length > 0 &&
          characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
      </StyledCardsWrapper>
      <PaginationComponent currentPage={page} totalPages={totalPages} onChange={(pageN: number) => {
        setPage(pageN)
      }} />
    </Container>
  );
};
