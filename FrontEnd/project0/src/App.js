import React, { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/routes").then((response) => {
      setData(response.data);
    });
  }, []);

  return <div>{data?.message || "Loading..."}</div>;
}

export default App;
