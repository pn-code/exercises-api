import React from "react";
import ExerciseCard from "~/components/ui/ExerciseCard";
import { api } from "~/utils/api";

const ExercisesPage = () => {
  const { data, isLoading } = api.exercises.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>Something went wrong.</div>

  return (
    <main>
      <header>
        <h2>Exercise List</h2>
        {data?.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
      </header>
    </main>
  );
};

export default ExercisesPage;
