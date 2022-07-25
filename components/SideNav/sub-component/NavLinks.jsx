import React, { useEffect } from "react";
import NavCategory from "./NavCategory";

const NavLinks = () => {
  useEffect(() => {
    let navHeaderHeight = document.getElementById("nav-header").offsetHeight;
    document.getElementById(
      "nav-link-container"
    ).style.maxHeight = `calc(100vh - ${navHeaderHeight}px)`;
  });
  return (
    <div
      id="nav-link-container"
      className="flex flex-col p-gap gap-gap overflow-y-auto h-[100%] transition-all"
    >
      <NavCategory />
      {/* <NavCategorySingle /> */}
    </div>
  );
};

export default NavLinks;
