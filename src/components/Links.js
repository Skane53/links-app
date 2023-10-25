import React, { useEffect, useState } from "react";
import serverUrl from "../serverUrl";

function Links() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(serverUrl + "links")
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Links Page</h1>
      <p>
        {links.map((e) => {
          return <li key={e["_id"]}>{e["courseTitle"]}</li>;
        })}
      </p>
    </div>
  );
}

export default Links;
