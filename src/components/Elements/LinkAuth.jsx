import { Link, Outlet } from "react-router-dom";

const LinkAuth = ({ text, isAlready, link }) => {
  return (
    <>
      <p className="text-sm text-slate-50 text-center">{isAlready ?  "don't have an account" : "already have an account" }  <Link to={link} className="text-sky-500">{text}</Link>
      </p>
    </>
  )
}

export default LinkAuth;