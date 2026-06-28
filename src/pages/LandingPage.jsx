import { useState } from "react";
import Child from "./Child";

function LandingPage() {
  console.log("Inside Parent");
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const handlePWSkills = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3>Landing Page!!</h3>
      <button onClick={handlePWSkills}>PW SKILLS</button>
      <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
      <h5>{counter}</h5>
      <Child search={search} />
    </div>
  );
}

export default LandingPage;
