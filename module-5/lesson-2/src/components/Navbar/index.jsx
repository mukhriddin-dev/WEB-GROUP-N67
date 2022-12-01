import "./style.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { context } from "../../context";

export const Navbar = () => {

const {lang, langs, setLangs}=useContext(context);

const t=lang[langs];


  return (
    <>
      <header>
        <div className="container">
          <nav className="nav d-flex justify-content-between">
            <h2 className="nav-logo">LOGO</h2>
            <ul className="nav__ul">
              <li className="nav__ul--list">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__ul--list-item fw-bold text-warning"
                      : "nav__ul--list-item"
                  }
                >
                 {t.home}
                </NavLink>
              </li>
              <li className="nav__ul--list">
                <NavLink
                  to="/task"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__ul--list-item fw-bold text-warning"
                      : "nav__ul--list-item"
                  }
                >
                  {t.about}
                </NavLink>
              </li>
              <li className="nav__ul--list">
                <NavLink
                  to="/link3"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__ul--list-item fw-bold text-warning"
                      : "nav__ul--list-item"
                  }
                >
                  links-3
                </NavLink>
              </li>
              <li className="nav__ul--list">
                <NavLink
                  to="/link4"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__ul--list-item fw-bold text-warning"
                      : "nav__ul--list-item"
                  }
                >
                  links-4
                </NavLink>
              </li>
              <li className="nav__ul--list">
                <NavLink
                  to="/link5"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__ul--list-item fw-bold text-warning"
                      : "nav__ul--list-item"
                  }
                >
                  links-5
                </NavLink>
              </li>
            </ul>

            <select className="form-select w-25" onChange={(e)=>{
              setLangs(e.target.value)
              localStorage.setItem('lang', e.target.value)
              }}>
              <option value="eng">ENG</option>
              <option value="uz">UZB</option>
            </select>
          </nav>
        </div>
      </header>
    </>
  );
};
