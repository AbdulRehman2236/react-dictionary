import React from "react";
import { Divider, Grid, IconButton, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import useStyles from "./Style";

const Footer = (props) => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          style={{
            marginBottom: "15px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          variant="body2"
          align="center"
          gutterBottom
          style={{ color: "white", fontWeight: "bold" }}
        >
          Have a question? Want to Collaborate? Just want to chat?
        </Typography>
        <Typography
          variant="body2"
          align="center"
          gutterBottom
          style={{ color: "white", marginBottom: "10px", fontWeight: "bold" }}
        >
          React out to me on
        </Typography>

        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ marginBottom: "10px" }}
        >
          <Grid item lg={12} md={8} sm={4}>
            <IconButton style={{ color: "#61dafb" }}>
              <MailIcon />
            </IconButton>
            <IconButton style={{ color: "#61dafb" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton style={{ color: "#61dafb" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton style={{ color: "#61dafb" }}>
              <PhoneAndroidIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
        <Typography
          variant="body2"
          align="center"
          gutterBottom
          style={{ marginTop: "10px", fontWeight: "bold" }}
        >
          AB Production © {new Date().getFullYear()}.
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
