import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import React from "react";
const NavBar = () => {
  return (
    <nav className="w-full h-20  flex items-center justify-between">
      <Link href={"/"} className="font-semibold text-lg">
        PALTA
      </Link>
      <Link
        href={"/cart"}
        className="flex items-center gap-2 px-2 py-1 transition-colors rounded duration-300 hover:bg-slate-100 dark:hover:bg-slate-700"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Carrito
      </Link>
    </nav>
  );
};

export default NavBar;
