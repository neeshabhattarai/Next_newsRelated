import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="mx-10 my-4 flex  justify-between ">
      <Link href={"/"}>News</Link>
      <Link href={"/archieve"}>Archieve</Link>
    </div>
  );
}

export default Navbar;
