import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div>
    <h1 style={{ color: 'firebrick' }}>{name} is a Web Developer in {city}</h1>
  </div>;
}

export default Home;
