import serverUrl from "./serverUrl";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Links from "./components/Links";
import Layout from "./components/Layout";
import CreateLink from "./components/CreateLink";
import DeleteLink from "./components/DeleteLink";

function App() {
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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="links" element={<Links endpoint={""} />} />
            <Route path="links/B2B" element={<Links endpoint={"B2B/"} />} />

            {tabs
              ? tabs.map((i) => (
                  <Route
                    path={`links/${i}`}
                    element={<Links endpoint={`${i}/`} />}></Route>
                ))
              : "loading"}

            <Route path="create" element={<CreateLink />} />
            <Route path="delete" element={<DeleteLink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
