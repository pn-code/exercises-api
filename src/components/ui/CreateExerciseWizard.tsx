import { useUser } from "@clerk/nextjs";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { api } from "~/utils/api";

const CreateExerciseWizard = () => {
  const { user } = useUser();
  if (!user) return null;

  // INPUTS
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("cardio");
  const [primaryTarget, setPrimaryTarget] = useState("cardio");
  const [image, setImage] = useState("");
  const [demo, setDemo] = useState("");

  // Create Function
  const { mutate } = api.exercises.create.useMutation();

  const handleExerciseCreation = (e) => {
    mutate({ name, description, type, primaryTarget, image, demo });
  };

  return (
    <form className="absolute inset-0 flex h-screen flex-col gap-2 bg-slate-900 px-2 lg:items-center">
      <section className="flex flex-col gap-2 pt-4 lg:pt-4">
        <section className="flex items-center gap-2">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            src={user.profileImageUrl}
            alt="Profile Image"
          />
          <h4>{user.fullName}</h4>
        </section>

        <label htmlFor="name">Exercise Name</label>
        <input
          id="name"
          type="text"
          placeholder="Exercise Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        />

        <label htmlFor="type">Exercise Type</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
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
        />

        <label htmlFor="">Demo URL</label>
        <input
          type="text"
          placeholder="Add demo url"
          value={demo}
          onChange={(e) => setDemo(e.target.value)}
        />

        <button onClick={handleExerciseCreation} className="mt-2 rounded-md bg-indigo-900 p-4">Submit</button>
      </section>
    </form>
  );
};

export default CreateExerciseWizard;
