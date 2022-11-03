import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import data from "../data";

export default function CardGrid() {
  return (
    <Container>
      <Typography
        mt={4}
        variant="h1"
        component="h3"
        align="center"
        color="error"
        sx={{ background: "lightgrey", mt: 6, border: "2px solid red" }}
      >
        Card & Grid
      </Typography>
      <Grid
        container
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((card) => {
          const { id, name, text, img } = card;
          return (
            <Grid item key={id} xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={img} alt="name" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
