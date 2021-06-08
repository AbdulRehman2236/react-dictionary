import { makeStyles, createMuiTheme } from "@material-ui/core";

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
  footer: {
    backgroundColor: "#3c4047",
    borderColor: "#3c4047",
    //borderRadius: "10px",
    padding: "10px",
    color: "#61dafb",
    marginTop: theme.spacing(8),
  },
}));

export default useStyles;
