import React from "react";
import Link from "next/link";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser();

  return (
    <nav className="flex items-center justify-between border-b border-slate-400 bg-indigo-900 p-4">
      <header className="cursor-pointer">
        <Link href="/">
          <h1 className="text-xl font-bold">Exercise Library</h1>
        </Link>
      </header>
      <ul className="flex gap-8 font-semibold">
        {!!user.isSignedIn && <Link href="/exercises">Exercises</Link>}
        {!!user.isSignedIn && <SignOutButton />}
        {!user.isSignedIn && <SignInButton />}
      </ul>
    </nav>
  );
};

export default Navbar;
