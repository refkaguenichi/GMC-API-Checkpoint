import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <table className="home">
      <tr>
        <td>
          <img
            src="https://image.flaticon.com/icons/png/512/4080/4080552.png"
            alt="cocktail"
          />
        </td>
        <td>
          <h1>Welcome to our drinks shop!</h1>
          <p>
            <span>
              We can provide you with a large and varied number of drinks.
            </span>
            We are a forward thinking, constantly evolving business. Since
            starting we have moulded and changed the way we do business and are
            keen on working with a new generation of brewers and breweries. From
            our small Self-Tapped Cocktail Kegs to our Blade Beer Machines - we
            have a bit of everything. We want to help you enjoy a variety of
            tastes, so if you have a new Blade Beer Machine contact us about
            kegs. Or maybe you prefer Cocktails - if so, we can get a 5L
            cocktail keg with you by the end of the week, for you to enjoy
            alone, or with friends!
          </p>
        </td>
        <td>
          <img
            src="https://image.flaticon.com/icons/png/512/4080/4080552.png"
            alt="cocktail"
          />
        </td>
      </tr>
    </table>
  );
};

export default Home;
