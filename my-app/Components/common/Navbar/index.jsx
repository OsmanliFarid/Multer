import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-400 flex items-center px-10 gap-x-3 h-20">
        <Link href={"/users"}>Users</Link>
        <Link href={"/add-user"}>AddUser</Link>
      </div>
    </>
  );
};

export default Navbar;
