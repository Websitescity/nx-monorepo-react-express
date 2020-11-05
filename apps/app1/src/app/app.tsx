import React, { useEffect, useState } from "react";
import { Message } from "@nx-monorepo/api-interfaces";
import { SharedComponents } from "@nx-monorepo/shared-components";
export const App = () => {
  const [m, setMessage] = useState<Message>({ message: "" });

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to app1!</h1>
        <SharedComponents />
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
