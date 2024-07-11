import { useEffect, useState } from "react";
import fetchAPI from "./utils/fetchAPI";

export default function App() {

  useEffect(() => {
    fetchAPI().then((data) => console.log(data))
  },[])

  return (
    <div>App</div>
  );
}
