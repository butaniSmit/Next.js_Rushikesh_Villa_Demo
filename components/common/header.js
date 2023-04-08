import Link from "next/link";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a href="index.html" className="navbar-brand">
          Rushikesh Villa
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse justify-content-end navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/hotel" className="nav-link">
                  Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
