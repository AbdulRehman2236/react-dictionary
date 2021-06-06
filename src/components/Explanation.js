import React from "react";
import useStyles from "./Style";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";

const Explanation = ({ meaning, category }) => {
  const classes = useStyles();
  return (
    <>
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
};

export default Explanation;
