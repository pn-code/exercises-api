import Image from "next/image";
import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
type ExerciseWithAuthor = RouterOutputs["exercises"]["getAll"][number];
dayjs.extend(relativeTime);

const ExerciseCard = (props: ExerciseWithAuthor) => {
  const { exercise, author } = props;

  return (
    <article
      className="flex items-center gap-4 px-2 text-white"
      key={exercise.id}
    >
      <div className="flex-column relative flex h-48 w-full flex-1 items-start justify-start">
        <Image
          className=""
          src={exercise.image}
          alt={exercise.name}
          layout={"fill"}
          objectFit="contain"
        />
      </div>

      <section className="flex flex-[3] flex-col gap-2">
        <h2 className="inline text-lg font-semibold">{exercise.name}</h2>
        <span className="text-sm text-slate-300">Primarily targets the {exercise.primaryTarget}</span>
        <p>{exercise.description}</p>
        <a
          className="w-20 underline"
          href={exercise.demo}
          rel="noreferrer"
          target="_blank"
        >
          See Demo
        </a>
        <footer className="flex gap-1">
          <Image
            className="inline h-5 w-5 rounded-full"
            src={author.profileImageUrl}
            alt="author profile image"
            height={20}
            width={20}
          />
          <span className="block text-sm text-amber-300">
            {`${author.fullName} · ${dayjs(exercise.createdAt).fromNow()}`}
          </span>
        </footer>
      </section>
    </article>
  );
};

export default ExerciseCard;
