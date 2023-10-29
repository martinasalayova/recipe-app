import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <Wrapper className="Popular">
      <h3>Popular picks</h3>
      <Splide>
        {popular.map((recipe) => {
          return (
            <Card>
              <div key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}></img>
              </div>
            </Card>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 2rem;
  border-radius: 5px;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`;
