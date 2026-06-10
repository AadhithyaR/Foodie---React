import React from "react";
import MealCards from "./MealCards";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <div id="banner">
        <div id="banner-images">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg"
            alt=""
          />
        </div>
        <h1>Welcome!</h1>
        <h1 className="today-class">Today's Special <br/>Get your favorite meals delivered fast!</h1>
      </div>

       <Categories />

      <MealCards />

    </>
  );
};

export default Home;
