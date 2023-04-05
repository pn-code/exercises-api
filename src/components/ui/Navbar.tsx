import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-indigo-900">
      <header className="cursor-pointer">
        <h1>LOGO</h1>
      </header>
      <ul className="flex gap-8">
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
