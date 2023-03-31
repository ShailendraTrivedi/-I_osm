import React from "react";

const BelowHeader = () => {
  return (
    <>
      <nav className="">
        <div className="!visible grow items-center !flex basis-auto">
          <ul className="mr-auto flex flex-row sm:flex-col">
            <li>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white p-2 [&.active]:border-primary [&.active]:text-primary"
                href="#!"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white p-2 [&.active]:border-primary [&.active]:text-primary "
                href="#!"
              >
                Fashion
              </a>
            </li>
            <li>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white p-2 [&.active]:border-primary [&.active]:text-primary "
                href="#!"
              >
                Beauty
              </a>
            </li>
            <li>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white p-2 [&.active]:border-primary [&.active]:text-primary "
                href="#!"
              >
                Home & Furniture
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BelowHeader;
