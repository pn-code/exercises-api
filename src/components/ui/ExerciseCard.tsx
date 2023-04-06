import React from "react";
import { RouterOutputs } from "~/utils/api";

type ExerciseWithAuthor = RouterOutputs["exercises"]["getAll"][number];

const ExerciseCard = (props: ExerciseWithAuthor) => {
  const { exercise, author } = props;

  return (
    <article className="flex gap-4 px-2 text-white" key={exercise.id}>
      <img className="w-[120px]" src={exercise.image} alt={exercise.name} />
      <section className="flex flex-col gap-2">
        <h2 className="inline text-lg font-semibold">{exercise.name}</h2>
        <p>{exercise.description}</p>
        <a className="underline" href={exercise.demo}>
          See Demo
        </a>
        <footer className="flex gap-1">
          <img
            className="inline h-5 w-5 rounded-full"
            src={author.profileImageUrl}
            alt="author profile image"
          />
          <span className="block text-sm text-amber-300">
            {author.fullName}
          </span>
        </footer>
      </section>
    </article>
  );
};

export default ExerciseCard;
