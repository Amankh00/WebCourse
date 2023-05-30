import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.css";
import Content from "../Skills/Content";
import About from"../About/About";
import Home from "../Home/Home";
import ContactForm from "../ContactForm/ContactForm";
import ProgramFee from "../ProgrameFee/ProgrameFee";

const NavBar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="first" id="#/">
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <Link smooth to="/#" className="navbar-logo" onClick={handleLinkClick}>
            A✨K
          </Link>
          <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={handleToggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link smooth to="/#" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="Content/#Content" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link smooth to="fees/#fees" onClick={handleLinkClick}>
                Fees
              </Link>
            </li>
            <li>
              <Link smooth to="About/#About" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link smooth to="Contact/#Contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <div className="Loginfo">
              <div className="userDetails">
                {isAuthenticated && (
                  <div className="LogIn">
                    <p>{user.name}</p>
                    <img src={user.picture} alt={user.name} />
                  </div>
                )}
              </div>
              <div className="logout">
                {!isAuthenticated ? (
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                ) : (
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <div className={`content ${menuOpen ? "menu-open" : ""}`}>
        {/* Add your other components here */
        <>
        <Home/>
        <Content/>
        <ProgramFee/>
        <About/>
        <ContactForm/>
        </>
        }
      </div>
    </>
  );
};

export default NavBar;
