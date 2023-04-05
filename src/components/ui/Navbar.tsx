import React from "react";
import Link from "next/link";
import { SignIn, SignOutButton, useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser();

  return (
    <nav className="flex justify-between border-b border-slate-400 bg-indigo-900 p-4">
      <header className="cursor-pointer">
        <h1>LOGO</h1>
      </header>
      <ul className="flex gap-8">
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </ul>
    </nav>
  );
};

export default Navbar;
