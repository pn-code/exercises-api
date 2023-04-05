import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exercise API</title>
        <meta name="description" content="by pn-code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen justify-center">
        {/* HERO */}
        <section className="flex w-full flex-col items-center">
          <header>
            <h1 className="text-5xl font-bold">Exercise API</h1>
          </header>

          <p className="text-3xl font-semibold text-amber-400">
            Elevate your fitness game with our intuitive API for resistance and
            cardiovascular exercises.
          </p>

          <Link
            className="rounded-lg bg-indigo-900 p-4 text-lg font-semibold hover:bg-indigo-600"
            href="/"
          >
            Get Started
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
