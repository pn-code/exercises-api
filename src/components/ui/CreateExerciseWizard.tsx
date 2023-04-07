import React, { useState } from "react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  closeExerciseWizard: () => void;
}

const CreateExerciseWizard: React.FC<Props> = ({ closeExerciseWizard }) => {
  // INPUTS
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("cardio");
  const [primaryTarget, setPrimaryTarget] = useState("cardio");
  const [image, setImage] = useState("");
  const [demo, setDemo] = useState("");

  // Create Function
  const { mutate, isLoading: isCreatingExercise } =
    api.exercises.create.useMutation({
      onSuccess: () => {
        closeExerciseWizard();
      },
      onError: (e) => {
        toast.error("Please make sure all fields are properly filled in.");
      },
    });

  const handleExerciseCreation = () => {
    mutate({ name, description, type, primaryTarget, image, demo });
  };

  return (
    <form className="absolute inset-0 flex h-screen flex-col gap-2 bg-slate-900 px-2 lg:items-center">
      <section className="flex flex-col gap-2 pt-4 lg:pt-4">
        <label htmlFor="name">Exercise Name</label>
        <input
          id="name"
          type="text"
          placeholder="Exercise Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isCreatingExercise}
          required
        />

        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          cols={30}
          rows={10}
          placeholder="Describe exercise..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isCreatingExercise}
          required
        />

        <label htmlFor="type">Exercise Type</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          disabled={isCreatingExercise}
          required
        >
          <option value="cardio">Cardiovascular</option>
          <option value="resistance">Resistance</option>
        </select>

        <label htmlFor="primaryTarget">Primary Target</label>
        <select
          name="primaryTarget"
          id="primaryTarget"
          value={primaryTarget}
          onChange={(e) => setPrimaryTarget(e.target.value)}
          disabled={isCreatingExercise}
          required
        >
          <option value="cardio">Cardio</option>
          <option value="neck">Neck</option>
          <option value="rear deltoids">Rear Deltoids</option>
          <option value="anterior deltoids">Anterior Deltoids</option>
          <option value="lateral deltoids">Lateral Deltoids</option>
          <option value="lats">Lats</option>
          <option value="upper back">Upper Back</option>
          <option value="lower back">Lower Back</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="calves">Calves</option>
          <option value="tibialis anterior">Tibs</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="hip flexors">Hip Flexors</option>
          <option value="abdominals">Abdominals</option>
          <option value="chest">Chest</option>
        </select>

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          placeholder="Add image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={isCreatingExercise}
          required
        />

        <label htmlFor="">Demo URL</label>
        <input
          type="text"
          placeholder="Add demo url"
          value={demo}
          onChange={(e) => setDemo(e.target.value)}
          disabled={isCreatingExercise}
          required
        />

        <button
          type="submit"
          onClick={handleExerciseCreation}
          disabled={isCreatingExercise}
          className="mt-2 rounded-md bg-indigo-800 p-4 hover:bg-indigo-600 disabled:bg-slate-100"
        >
          {isCreatingExercise ? (
            <div className="flex justify-center">
              <LoadingSpinner size={30} />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </section>
    </form>
  );
};

export default CreateExerciseWizard;
