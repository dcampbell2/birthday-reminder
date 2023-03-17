import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      <Person />
      {/*More people*/}
    </ul>
  );
};

export default List;
