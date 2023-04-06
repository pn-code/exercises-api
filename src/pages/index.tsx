import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import heroImg from "./../../public/assets/hero-img.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exercise API</title>
        <meta name="description" content="by pn-code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-8 flex h-screen flex-col px-2 lg:items-center lg:pt-[12%]">
        {/* HERO */}
        <section className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row sm:gap-[10%]">
          <section className="flex flex-col items-center gap-8">
            <p className="max-w-xl text-center text-3xl font-semibold lg:text-4xl lg:font-bold">
              Elevate your fitness game with our intuitive API for resistance
              and cardiovascular exercises.
            </p>
            <Link
              className=" w-[80%] rounded-lg bg-indigo-900 p-4 text-center text-lg font-semibold hover:bg-indigo-600"
              href="/"
            >
              Get Started
            </Link>
          </section>

          <Image
            className="w-full max-w-lg rounded-md mt-4"
            src={heroImg}
            alt="exercises-api logo"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
