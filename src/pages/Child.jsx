import { memo } from "react";

function Child({ search }) {
  console.log("Inside Child!!");
  return <h5>Child Page {search}</h5>;
}

export default memo(Child);
