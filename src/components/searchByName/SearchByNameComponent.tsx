import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { Filtiration } from "../../types/Filteration";
import { StyledSearchComponentWrapper } from "./StyledSearchBar";
import { Container } from "@mui/material";

export interface SearchByNameProps {
  filterKey: keyof Filtiration;
  onFilterKeyChange: (keyValue: keyof Filtiration) => void;
  value: string;
  onValueChange: (value: string) => void;
  handleSearch: () => void;
}

export const SearchByName = ({
  filterKey,
  onFilterKeyChange,
  value,
  onValueChange,
  handleSearch,
}: SearchByNameProps): React.ReactElement => {
  const keys = ["name", "status", "species", "type", "gender"];
  return (
    <Container>
      <StyledSearchComponentWrapper>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter By: </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterKey}
            label="Filter By: "
            onChange={(e) => {
              onFilterKeyChange(e.target.value as keyof Filtiration);
            }}
            sx={{ backgroundColor: "white" }}
          >
            {keys.map((key) => (
              <MenuItem key={key} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Paper
          component="form"
          sx={(theme) => ({
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: '100%',
            [theme.breakpoints.down("md")]: {
              width: "98%",
            },
          })}
        >
          <InputBase
            placeholder="Find Your Character"
            inputProps={{ "aria-label": "search google maps" }}
            sx={(theme) => ({
              ml: 1,
              flex: 1,
            })}
            value={value}
            onChange={(e) => {
              onValueChange(e.target.value);
            }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px", cursor: "default" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </StyledSearchComponentWrapper>
    </Container>
  );
};
