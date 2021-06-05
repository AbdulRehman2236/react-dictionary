import {
  makeStyles,
  MenuItem,
  TextField,
  Toolbar,
  createMuiTheme,
  ThemeProvider,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import React from "react";
import categories from "../data/Data";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const newTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 415,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2),
    justifyContent: "center",
    fontSize: 40,
    color: "#61dafb",
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: "50%",
    marginRight: 15,
    [newTheme.breakpoints.down("xs")]: {
      width: "99%",
    },
  },
  selectText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: "46%",
    [newTheme.breakpoints.down("xs")]: {
      width: "99%",
    },
  },
  card: {
    marginBottom: "15px",
    borderRadius: "10px",
    backgroundColor: "white",
    justifyContent: "center",
  },
  mainCard: {
    borderRadius: "10px",
    marginBottom: "20px",
    backgroundColor: "#3c4047",
  },
}));

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
      <Card className={classes.mainCard}>
        <CardContent>
          <Typography>
            {meaning.map((mean) =>
              mean.meanings.map((item) =>
                item.definitions.map((def) => (
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography
                        style={{ fontWeight: "bold", color: "black" }}
                        gutterBottom
                      >
                        {def.definition}
                      </Typography>
                      <Divider />
                      <Typography>
                        {category !== "hi" && def.example ? (
                          <Typography gutterBottom style={{ color: "black" }}>
                            <Typography
                              gutterBottom
                              style={{
                                fontWeight: "bold",
                                color: "black",
                                textDecoration: "underline",
                                marginTop: "4px",
                              }}
                            >
                              Example:
                            </Typography>
                            {def.example}
                          </Typography>
                        ) : (
                          ""
                        )}
                      </Typography>

                      <Typography>
                        {category === "en_US" && def.synonyms ? (
                          <Typography style={{ color: "black" }}>
                            <Typography
                              gutterBottom
                              style={{
                                fontWeight: "bold",
                                color: "black",
                                textDecoration: "underline",
                              }}
                            >
                              Synonym:
                            </Typography>
                            {def.synonyms.map((syn) => `${syn} ,  `)}
                          </Typography>
                        ) : (
                          ""
                        )}
                      </Typography>

                      <Divider />
                    </CardContent>
                  </Card>
                ))
              )
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Header;
