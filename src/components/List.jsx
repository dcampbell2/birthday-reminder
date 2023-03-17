import React from "react";

const List = ({ people }) => {
  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      <li>
        <div className="flex items-center gap-x-6">
          {people.map((person) => {})}
          <img
            className="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
              Leslie Alexander
            </h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">
              Co-Founder / CEO
            </p>
          </div>
        </div>
      </li>

      {/*More people*/}
    </ul>
  );
};

export default List;
