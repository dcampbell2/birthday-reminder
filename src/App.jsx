import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./data";
import List from "./components/List";
import "./App.css";

function App() {
  const [people, setPeople] = useState([data]);
  console.log(people[0]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {people[0].length} Birthdays today
          </h2>
        </div>
        <List people={people[0]} />
      </div>
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear List
      </button>
    </div>
  );
}

export default App;
