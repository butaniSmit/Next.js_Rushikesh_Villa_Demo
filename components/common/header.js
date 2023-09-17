import { HeaderQuery } from "@/graphql/queries";
import { ApiDetails } from "@/pages/api/hello";
import Link from "next/link";
import { NavLink } from "react-router-dom";
export default function Header({header}) {
  console.log(header)
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">
          Rushikesh Villa
          </Link>
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
export const  getStaticProps = async()=>{
//  const header = await ApiDetails();

const response = await fetch("http://localhost:1337/graphql",{
  method:"POST",
  headers: {"Content-Type": "application/json"},
  body:JSON.stringify({
      query: `query{
        header{
          data{
            attributes{
              logotitle
              headermenu{
                title
                url
              }
            }
          }
        }
      }`
    })
})
console.log(response)
const header= await response.json();
  return{
    props:{
      header:header
    }
  }
}