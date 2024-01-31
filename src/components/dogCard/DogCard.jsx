import React from "react";

const DogCard = ({ imgSrc, onXClick, onLikeClick, likes, id }) => {
  return (
    <div>
      <img src={imgSrc} alt="dog" />
      <button onClick={onXClick}>x</button>
      <button onClick={onLikeClick}>❤️</button>
      <h4>{likes}</h4>
    </div>
  );
};

export default DogCard;
