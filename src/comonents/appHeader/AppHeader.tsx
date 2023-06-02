import "./appHeader.scss";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app__header">
      <div className="app__logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src="/logo.png" alt="random" />
        </Link>
      </div>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              to="/"
              //  end
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              //  end
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              //  end
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
