import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./CocktailCard.css";
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function CocktailCard({ cocktails }) {
  const classes = useStyles();

  return (
    <Card className="one-cocktail">
      <Link
        style={{ textDecoration: "none", textAlign: "center" }}
        to={`/cocktails/cocktail/${cocktails.idDrink}`}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cocktails.strDrinkThumb}
            title={`Cocktail ${cocktails.idDrink} image`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "#303f9f" }}
            >
              {cocktails.strDrink}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cocktails.strCategory}
            </Typography>
            <Link
              style={{ textDecoration: "none", textAlign: "center" }}
              to={`/cocktails/cocktail/${cocktails.idDrink}`}
            >
              <CardActions>
                <Button variant="contained" color="primary" size="small">
                  Details
                </Button>
              </CardActions>
            </Link>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
