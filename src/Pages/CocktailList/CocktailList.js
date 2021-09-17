import { CircularProgress, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CocktailList.css";
import CocktailCard from "./../../Components/CocktailCard/CocktailCard";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState({ drinks: [{}] });
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    getCocktails();
  }, [inputText]);

  const getCocktails = async () => {
    try {
      setLoad(true);
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`
      );
      setCocktails(result.data);
      setLoad(false);
    } catch (error) {
      setIsError(true);
      setLoad(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
    // setInputText("");
  };

  return (
    <div>
      <TextField
        variant="standard"
        placeholder="Search…"
        onChange={handleChange}
        value={inputText}
        type="text"
      />
      {load ? (
        <div className="loading">
          <CircularProgress color="primary" size={200} />
        </div>
      ) : isError ? (
        <div className="error-data">
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/data_error.png"
            alt="error"
          />
        </div>
      ) : (
        <div>
          <div className="cocktail">
            {cocktails.drinks == null ? (
              <h2 className="error-drink">There is no drink with this name!</h2>
            ) : (
              cocktails.drinks.map((el) => (
                <CocktailCard cocktails={el} key={el.idDrink} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CocktailList;
