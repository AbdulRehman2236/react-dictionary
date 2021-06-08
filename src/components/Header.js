import {
  MenuItem,
  TextField,
  Toolbar,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import categories from "../data/Data";
import Explanation from "./Explanation";
import useStyles from "./Style";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header({ word, setWord, category, setCategory, meaning }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <>
      <Toolbar className={classes.header}>{word ? word : "Word Hunt"}</Toolbar>
      <ThemeProvider theme={darkTheme}>
        <TextField
          className={classes.textField}
          label="Search word here"
          value={word}
          onChange={handleWordChange}
        />

        <TextField
          className={classes.selectText}
          select
          label="Select"
          value={category}
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </ThemeProvider>
      <Explanation meaning={meaning} category={category} />
    </>
  );
}

export default Header;
