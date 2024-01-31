import React, { useState, useEffect } from "react";
import DogCard from "../../components/dogCard/DogCard";
import { v4 as uuidv4 } from "uuid";

const DogApp = () => {
  const [dogList, setDogList] = useState([]);

  const getDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogList([...dogList, { url: data.message, id: uuidv4(), likes: 0 }]);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    getDog();
  }, [dogList]);

  const onXClick = (id) => {};

  const onLikeClick = (id) => {};

  return (
    <div>
      <button onClick={getDog}>Get Dog</button>
      {dogList.map((el, index) => (
        <DogCard
          key={index}
          imgSrc={el.url}
          likes={el.likes}
          id={el.id}
          onLikeClick={onLikeClick}
          onXClick={onXClick}
        />
      ))}
    </div>
  );
};

export default DogApp;
