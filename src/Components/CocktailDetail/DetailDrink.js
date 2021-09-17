import React from "react";
import "./DetailDrink.css";

const DetailDrink = ({ cocktail }) => {
  return (
    <div className="cont_principal">
      <div className="cont_central">
        <div className="cont_modal cont_modal_active">
          <div className="cont_photo">
            <div className="cont_img_back">
              <img src={cocktail.strDrinkThumb} alt="one ocktail" />
            </div>
            <div className="cont_detalles"></div>
          </div>
          <div className="cont_text_ingredients">
            <div className="cont_over_hidden">
              <div className="cont_tabs">
                <ul>
                  <li>
                    <a href="ingredient">
                      <h4>All about {cocktail.strDrink}</h4>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cont_text_det_preparation">
                <div className="cont_title_preparation">
                  <p>Ingredients</p>
                </div>
                <div className="cont_info_preparation">
                  <p>
                    <span>
                      {cocktail.strMeasure1}
                      {cocktail.strIngredient1}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure2}
                      {cocktail.strIngredient2}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure3}
                      {cocktail.strIngredient3}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure4}
                      {cocktail.strIngredient4}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure5}
                      {cocktail.strIngredient5}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure6}
                      {cocktail.strIngredient6}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure7}
                      {cocktail.strIngredient7}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure8}
                      {cocktail.strIngredient8}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure9}
                      {cocktail.strIngredient9}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure9}
                      {cocktail.strIngredient9}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure10}
                      {cocktail.strIngredient10}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure11}
                      {cocktail.strIngredient11}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure12}
                      {cocktail.strIngredient12}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure13}
                      {cocktail.strIngredient13}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure14}
                      {cocktail.strIngredient14}
                    </span>
                    <span>, </span>
                    <span>
                      {cocktail.strMeasure15}
                      {cocktail.strIngredient15}
                    </span>
                  </p>
                </div>
                <div className="cont_text_det_preparation">
                  <div className="cont_title_preparation">
                    <p>Preparation</p>
                  </div>
                  <div className="cont_info_preparation">
                    <p>{cocktail.strInstructions}</p>
                  </div>

                  <div className="cont_title_preparation">
                    <p>Description</p>
                  </div>
                  <div className="cont_info_preparation">
                    <p>
                      <span>{cocktail.strCategory}</span>,{" "}
                      <span>{cocktail.strAlcoholic}, </span>
                      <span>{cocktail.strGlass}</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDrink;
