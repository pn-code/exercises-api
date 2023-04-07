import Image from "next/image";
import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
type ExerciseWithAuthor = RouterOutputs["exercises"]["getAll"][number];
dayjs.extend(relativeTime);

const ExerciseCard = (props: ExerciseWithAuthor) => {
  const { exercise, author } = props;

  return (
    <article className="flex gap-4 px-2 text-white items-center" key={exercise.id}>
      <div className="relative flex flex-column h-48 w-full items-start justify-start flex-1">
        <Image
          className=""
          src={exercise.image}
          alt={exercise.name}
          layout={"fill"}
          objectFit="contain"
        />
      </div>

      <section className="flex flex-col gap-2 flex-[3]">
        <h2 className="inline text-lg font-semibold">{exercise.name}</h2>
        <p>{exercise.description}</p>
        <a
          className="underline w-20"
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
