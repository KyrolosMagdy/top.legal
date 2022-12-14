import React from "react";
import { render } from "@testing-library/react";

import { LoaderComponent } from "./LoaderComponent";

test("render character card correctly", () => {
  const { asFragment } = render(
    <LoaderComponent
      open={true}
    />
  );

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    aria-hidden="true"
    class="MuiBackdrop-root css-1ji7omv-MuiBackdrop-root"
    style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
  >
    <span
      class="MuiCircularProgress-root MuiCircularProgress-indeterminate MuiCircularProgress-colorInherit css-62e83j-MuiCircularProgress-root"
      role="progressbar"
      style="width: 40px; height: 40px;"
    >
      <svg
        class="MuiCircularProgress-svg css-1idz92c-MuiCircularProgress-svg"
        viewBox="22 22 44 44"
      >
        <circle
          class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate css-176wh8e-MuiCircularProgress-circle"
          cx="44"
          cy="44"
          fill="none"
          r="20.2"
          stroke-width="3.6"
        />
      </svg>
    </span>
  </div>
</DocumentFragment>
`);
});
