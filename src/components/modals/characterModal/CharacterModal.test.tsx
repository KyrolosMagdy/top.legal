import React from "react";
import { render } from "@testing-library/react";

import { CharacterModal } from "./CharacterModal";
import { Character } from "../../../types/Character";

const character: Character = {
  image: "",
  location: {
    id: 1,
    name: "location",
  },
  origin: {
    id: 1,
    name: "lol",
  },
  status: "Dead",
  gender: "Male",
  species: "Human",
  id: 0,
  name: "",
};

test("render character modal correctly", () => {
  const { asFragment } = render(
    <CharacterModal
      character={character}
      handleClose={() => console.log("testing")}
      open={true}
    />
  );

  expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`);
});
