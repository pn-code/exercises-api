import { useState } from "react";
import CreateExerciseWizard from "~/components/ui/CreateExerciseWizard";
import ExerciseCard from "~/components/ui/ExerciseCard";
import { api } from "~/utils/api";

const ExercisesPage = () => {
  const [openExerciseWizard, setOpenExerciseWizard] = useState<boolean>(false);
  const { data, isLoading } = api.exercises.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Something went wrong</div>;

  return (
    <main>
      <header className="flex items-center justify-between">
        <h2 className="text-3xl">
          {openExerciseWizard ? "Create Exercise" : "Exercise List"}
        </h2>
        <button
          onClick={() => setOpenExerciseWizard((open) => !open)}
          className="rounded-md bg-indigo-700 p-2 font-semibold hover:bg-indigo-600"
        >
          {openExerciseWizard ? "Exercise List" : "Create Exercise"}
        </button>
      </header>

      <section className="relative z-[999] h-full w-full bg-slate-100">
        {openExerciseWizard && <CreateExerciseWizard />}
      </section>

      {/* Exercise List */}
      <section>
        {data?.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
      </section>
    </main>
  );
};

export default ExercisesPage;
