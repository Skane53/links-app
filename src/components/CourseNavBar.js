import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serverUrl from "../serverUrl";

//One Tab component, to filter by courseTitle
function OneTab({ courseTitle }) {
  return (
    <span>
      <Link
        className="link rounded-pill h6 bg-primary px-3 py-1 m-3"
        to={"/links/" + courseTitle}>
        {courseTitle}
      </Link>
    </span>
  );
}

function CourseNavBar() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch(serverUrl + "links")
      .then((response) => response.json())
      .then((jsonRes) =>
        Array.from(new Set(jsonRes.map((i) => i.courseTitle))).sort((a, b) =>
          a.localeCompare(b, "fr", { ignorePunctuation: true })
        )
      )
      .then((response) => setTabs(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <nav className="navbar bg-secondary container d-flex justify-content-between px-2">
      <div className="horizontal-scroll my-3 py-1">
        {tabs ? tabs.map((i) => <OneTab key={i} courseTitle={i} />) : "loading"}
      </div>
    </nav>
  );
}

export default CourseNavBar;
