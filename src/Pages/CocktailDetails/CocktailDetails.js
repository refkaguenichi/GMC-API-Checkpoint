import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, CircularProgress } from "@material-ui/core";
import DetailDrink from "./../../Components/CocktailDetail/DetailDrink";

const CocktailDetails = ({ history, match }) => {
  const [cocktail, setCocktail] = useState({});
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);

  useEffect(() => {
    const getCocktail = async () => {
      try {
        setLoad(true);
        let response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        setCocktail(response.data.drinks[0]);
        setLoad(false);
      } catch (error) {
        setisEerror(true);
        setLoad(false);
      }
    };
    getCocktail();
  }, [match.params.id]);

  return load ? (
    <div className="loading">
      {/* <h2>Loading</h2> */}
      <CircularProgress color="primary" size={200} />
    </div>
  ) : (
    <div>
      {isError ? (
        <div className="error-data">
          {/* <h2>Error to get data</h2> */}
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/data_error.png"
            alt="error"
          />
        </div>
      ) : (
        <div>
          <DetailDrink cocktail={cocktail} />
          <Button size="large" onClick={() => history.goBack()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default CocktailDetails;
