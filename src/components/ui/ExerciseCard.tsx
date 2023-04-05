import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <article className="text-white" key={exercise.id}>
      <img className="w-[120px]" src={exercise.image} alt={exercise.name} />
      <h2>{exercise.name}</h2>
      <p>{exercise.description}</p>
      <a className="underline" href={exercise.demo}>
        See Demo
      </a>
    </article>
  );
};

export default ExerciseCard;
