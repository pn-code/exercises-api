import { useState } from "react";
import CreateExerciseWizard from "~/components/ui/CreateExerciseWizard";
import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";
import Feed from "~/components/ui/Feed";

const ExercisesPage = () => {
  const [openExerciseWizard, setOpenExerciseWizard] = useState<boolean>(false);

  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching data when page is requested...
  api.exercises.getAll.useQuery();

  // Return empty div if user isn't loaded...
  if (!userLoaded) return <div />;

  return (
    <main>
      <header className="flex items-center justify-between my-5 px-4">
        <h2 className="text-3xl">
          {isSignedIn && openExerciseWizard ? "Create Exercise" : "Exercise List"}
        </h2>
        <button
          onClick={() => setOpenExerciseWizard((open) => !open)}
          className="rounded-md bg-indigo-700 p-2 font-semibold hover:bg-indigo-600"
        >
          {isSignedIn && openExerciseWizard ? "Exercise List" : "Create Exercise"}
        </button>
      </header>

      <section className="relative z-[999] h-full w-full bg-slate-100">
        {openExerciseWizard && <CreateExerciseWizard />}
      </section>

      <Feed />
    </main>
  );
};

export default ExercisesPage;
