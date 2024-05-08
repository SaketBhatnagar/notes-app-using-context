import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="text-white text-sm font-semibold py-2 flex justify-center bg-gradient-to-r from-indigo-500 to-sky-500 ">
      <article className=" w-[80%] flex justify-between">
        <NavLink to="/" >Saket Bhatnagar</NavLink>

        <nav className="flex ">
          <ul className="flex  gap-3 md:gap-4 lg:gap-6 xl:gap-8 ">
            <li>
              <a target="_blank" href="https://github.com/SaketBhatnagar">
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/saket-bhatnagar-9b6735159"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/foxbat_saket">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex ">
          <ul className="flex  gap-3 md:gap-4 lg:gap-6 xl:gap-8 ">
            <li>
              <NavLink
                 className={({ isActive }) => {
                    return isActive?"border-b-2":""
              }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                      return isActive?"border-b-2":""
                }}
                to="/products-project"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                    return isActive?"border-b-2":""
              }}
                to="/notes-project"
              >
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                    return isActive?"border-b-2":""
              }}
                to="/login-project"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                 className={({ isActive }) => {
                    return isActive?"border-b-2":""
              }}
                to="/counter-project"
              >
                Counter
              </NavLink>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
};

export default Navbar;
