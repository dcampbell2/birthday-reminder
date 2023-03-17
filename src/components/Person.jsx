import React from "react";

const Person = ({ name, age, image }) => {
  return (
    <div className="flex items-center gap-x-6">
      <img className="h-20 w-20 rounded-full" src={image} alt={name} />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">{age}</p>
      </div>
    </div>
  );
};

export default Person;
