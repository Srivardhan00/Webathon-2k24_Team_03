import React from "react";
import { Link } from "react-router-dom"; // Import Link
import TagsComponent from "../Products/tags";
import "./Card.css";
import { GiCookingPot } from "react-icons/gi";
import { CiClock1 } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";

const Card = ({
  id,
  img,
  name,
  users,
  ratings,
  prepareTime,
  cookTime,
  tags,
}) => {
  return (
    <Link to={`/recipe/${id}`} className="card-link">
      <section className="card">
        <p className="recipe-Name">{name}</p>
        <TagsComponent array={tags} />
        <img src={img} alt={name} className="card-img" />
        <div style={{ display: "flex", gap: "5px" }}>
          <CiClock1 />
          <p className="times">{prepareTime} min </p>
          <GiCookingPot />
          <p>{cookTime} min</p>
          <IoStarSharp />
          <p>
            {ratings} ({users})
          </p>
        </div>
      </section>
    </Link>
  );
};

export default Card;
