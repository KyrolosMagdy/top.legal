import React from "react";
import Pagination from "@mui/material/Pagination";
import { StyledPaginationWrapper } from "./StyledPagination";

export interface PaginationProps {
  currentPage: number;
  onChange: (pageNumber: number) => void;
  totalPages: number;
}

export const PaginationComponent = ({
  totalPages,
  currentPage,
  onChange,
}: PaginationProps): React.ReactElement => {
  return (
    <StyledPaginationWrapper>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(e, value) => {
          onChange(value);
        }}
      />
    </StyledPaginationWrapper>
  );
};
