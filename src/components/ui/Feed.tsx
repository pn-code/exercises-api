import { api } from "~/utils/api";
import LoadingPage from "~/pages/loading";
import ExerciseCard from "./ExerciseCard";

const Feed = () => {
  const { data, isLoading: exercisesLoading } = api.exercises.getAll.useQuery();

  if (exercisesLoading) return <LoadingPage />;
  if (!data) return <div>Something went wrong!</div>;

  return (
    <section className="flex flex-col gap-4">
      {data?.map((exerciseWithAuthor) => (
        <ExerciseCard
          {...exerciseWithAuthor}
          key={exerciseWithAuthor.exercise.id}
        />
      ))}
    </section>
  );
};

export default Feed;
