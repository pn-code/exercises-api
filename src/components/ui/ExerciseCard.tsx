import React from "react";
import { RouterOutputs } from "~/utils/api";

type ExerciseWithAuthor = RouterOutputs["exercises"]["getAll"][number];

const ExerciseCard = (props: ExerciseWithAuthor) => {
  const { exercise, author } = props;

  return (
    <article className="text-white" key={exercise.id}>
      <img className="w-[120px]" src={exercise.image} alt={exercise.name} />
      <h2>{exercise.name}</h2>
      <h3>by {author.fullName}</h3>
      <p>{exercise.description}</p>
      <a className="underline" href={exercise.demo}>
        See Demo
      </a>
    </article>
  );
};

export default ExerciseCard;
