import React from "react";
import { render } from "@testing-library/react";

import { CustomSnackbarComponent } from "./CustomSnackbarComponent";

describe("snackbar functionality", () => {
  test("expecting the snackbar to be closed", () => {
    const { getByText } = render(
      <CustomSnackbarComponent
        message="Error"
        open={true}
        handleClose={() => console.log("close")}
      />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Error")).toBeInTheDocument();
  });

  test("expecting Snackbar to be fixed", () => {
    const { asFragment } = render(
      <CustomSnackbarComponent
        message="Error"
        open={true}
        handleClose={() => console.log("close")}
      />
    );

    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="MuiSnackbar-root MuiSnackbar-anchorOriginBottomLeft css-cpgvjg-MuiSnackbar-root"
    role="presentation"
  >
    <div
      class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiAlert-root MuiAlert-filledError MuiAlert-filled css-1d8pzwa-MuiPaper-root-MuiAlert-root"
      direction="up"
      role="alert"
      style="opacity: 1; transform: scale(1, 1); transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
    >
      <div
        class="MuiAlert-icon css-1ytlwq5-MuiAlert-icon"
      >
        <svg
          aria-hidden="true"
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root"
          data-testid="ErrorOutlineIcon"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          />
        </svg>
      </div>
      <div
        class="MuiAlert-message css-1pxa9xg-MuiAlert-message"
      >
        <h6
          class="MuiTypography-root MuiTypography-h6 css-2lrp60-MuiTypography-root"
        >
          Error
        </h6>
      </div>
      <div
        class="MuiAlert-action css-ki1hdl-MuiAlert-action"
      >
        <button
          aria-label="Close"
          class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-1e0d89p-MuiButtonBase-root-MuiIconButton-root"
          tabindex="0"
          title="Close"
          type="button"
        >
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
            data-testid="CloseIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
          <span
            class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
          />
        </button>
      </div>
    </div>
  </div>
</DocumentFragment>
`);
  });
});
