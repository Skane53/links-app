import React, { useEffect, useState } from "react";
import serverUrl from "../serverUrl";
import CourseNavBar from "./CourseNavBar";

function Links({ endpoint }) {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch(`${serverUrl}links/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) => console.error(error));
  }, [endpoint]);

  return (
    <div className="container">
      <h1>Links Page</h1>
      <CourseNavBar />
      <div className="container.fluid row d-flex p-3">
        {links.map((e) => {
          return (
            <li
              key={e["_id"]}
              className="col-12 col-sm-6 col-lg-4 col-xl-3 rounded d-flex flex-column my-3 border p-2">
              <a className="flex-grow-1" href={e.url}>
                {e.url}
              </a>
              <div>Course Title : {e.courseTitle}</div>
              <div> Course Number : {e.courseNumber}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Links;
