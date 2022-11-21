import React from "react";
import { render, screen } from "@testing-library/react";

import { CharacterCard } from "./CharacterCard";
import { Character } from "../../types/Character";
import userEvent from "@testing-library/user-event";

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

test("user can click on the card", async () => {
  const clickFun = jest.fn();
  render(
    <CharacterCard character={character} onCardClick={clickFun} />
  );
  expect.assertions(1)
  const cardWrapper = screen.getByTestId("card-wrapper");
  await userEvent.click(cardWrapper);
  expect(clickFun).toBeCalled();
});

test("render character card correctly", () => {
  const { asFragment } = render(
    <CharacterCard
      character={character}
      onCardClick={() => console.log("cliekc")}
    />
  );

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-b9w45m-MuiPaper-root-MuiCard-root"
    data-testid="card-wrapper"
  >
    <img
      alt="green iguana"
      class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-o69gx8-MuiCardMedia-root"
      height="250"
    />
    <div
      class="MuiCardContent-root css-46bh2p-MuiCardContent-root"
    >
      <div
        class="css-40a30d"
      >
        <h6
          class="MuiTypography-root MuiTypography-h6 css-ibgdc6-MuiTypography-root"
        >
          Dead
        </h6>
      </div>
      <div
        class="MuiTypography-root MuiTypography-h5 css-ag7rrr-MuiTypography-root"
      />
      <p
        class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom css-13ag9a9-MuiTypography-root"
      >
        Last Location
      </p>
      <div
        class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
      >
        location
      </div>
    </div>
  </div>
</DocumentFragment>
`);
});
