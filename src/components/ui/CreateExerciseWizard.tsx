import { useUser } from "@clerk/nextjs";
import React from "react";

const CreateExerciseWizard = () => {
  const { user } = useUser();
  if (!user) return null;

  return (
    <form className="absolute inset-0 flex h-screen flex-col justify-center gap-2 bg-slate-900 px-2 lg:items-center">
      <section className="flex flex-col gap-2 pb-5 lg:pb-0">
        <section className="flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full"
            src={user.profileImageUrl}
            alt="Profile Image"
          />
          <h4>{user.fullName}</h4>
        </section>

        <label htmlFor="">Exercise Name</label>
        <input type="text" placeholder="Exercise Name" />

        <label htmlFor="">Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Describe exercise..."
        />

        <label htmlFor="">Exercise Type</label>
        <select name="" id="">
          <option value="">Cardiovascular</option>
          <option value="">Resistance</option>
        </select>

        <label htmlFor="">Primary Target</label>
        <select name="" id="">
          <option value="">Cardio</option>
          <option value="">Neck</option>
          <option value="">Rear Deltoids</option>
          <option value="">Anterior Deltoids</option>
          <option value="">Lateral Deltoids</option>
          <option value="">Lats</option>
          <option value="">Upper Back</option>
          <option value="">Lower Back</option>
          <option value="">Glutes</option>
          <option value="">Hamstrings</option>
          <option value="">Calves</option>
          <option value="">Tibs</option>
          <option value="">Quadriceps</option>
          <option value="">Hip Flexors</option>
          <option value="">Abdominals</option>
          <option value="">Chest</option>
        </select>

        <label htmlFor="">Image URL</label>
        <input type="text" placeholder="Add image url" />

        <label htmlFor="">Demo URL</label>
        <input type="text" placeholder="Add demo url" />

        <button className="mt-2 rounded-md bg-indigo-900 p-4">Submit</button>
      </section>
    </form>
  );
};

export default CreateExerciseWizard;
