import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/links">
                Links
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create a Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                Delete a Link
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
