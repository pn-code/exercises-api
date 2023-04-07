import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import heroImg from "./../../public/assets/hero-img.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exercise API | Home</title>
        <meta
          name="description"
          content="Comprehensive exercise API for developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-[calc(100vh-200px)] flex-col items-center gap-8 px-2 pt-[7%]">
        <header className="flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold text-amber-300 lg:text-5xl">
            Easily access exercises
          </h1>
          <p className="max-w-xl text-center text-lg font-semibold lg:text-xl">
            Elevate your fitness with our comprehensive resistance and
            cardiovascular exercises.
          </p>
        </header>

        <Image
          className="w-full max-w-lg rounded-md"
          src={heroImg}
          alt="exercises-api logo"
        />

        <Link
          className="w-full max-w-[510px] rounded-lg bg-indigo-900 p-4 text-center text-lg font-semibold hover:bg-indigo-600"
          href="/exercises"
        >
          Get Started
        </Link>
      </main>
    </>
  );
};

export default Home;
